const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const serviceAccount = require('./serviceAccountKey.json');
const testScores = require('./testScores.js'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mimo-c5e84.firebaseio.com"
});

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`); // Логирует URL запроса
  next(); // Передает управление следующему middleware или маршруту
});

app.use('/api', testScores);
console.log("Api routes set up")

const updateStudentRankings = async () => {
  try {
    const students = [];
    const snapshot = await admin.firestore().collection('students').get();

    snapshot.forEach(doc => {
      const data = doc.data();
      const email = data.email;
      const gpaData = data.gpa;

      if (email && gpaData) {
        const gpaValues = Object.values(gpaData).filter(gpa => gpa !== "");
        const lastGPA = gpaValues.length > 0 ? parseFloat(gpaValues[gpaValues.length - 1]) : null;

        if (lastGPA !== null) {
          students.push({ email, gpa: lastGPA, docId: doc.id });
        }
      }
    });

    students.sort((a, b) => b.gpa - a.gpa);

    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      const rank = i + 1;

      await admin.firestore().collection('students').doc(student.docId).update({
        rank: rank,
      });

      console.log(`Updated rank for ${student.email} to ${rank}`);
    }

    console.log('Ranking update completed');
  } catch (error) {
    console.error('Error updating student rankings:', error);
  }
};

setInterval(updateStudentRankings, 6 * 60 * 60 * 1000);
updateStudentRankings();

app.get('/', (req, res) => {
  res.send('Сервер работает. Перейдите по /api/gpa/average для получения среднего GPA.');
});

app.get('/api/gpa/average', async (req, res) => {
  try {
    const students = [];
    const snapshot = await admin.firestore().collection('students').get();

    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.email && data.gpa && data.rank !== undefined) {
        students.push({ email: data.email, gpa: data.gpa, rank: data.rank });
      }
    });

    if (students.length === 0) {
      return res.status(404).json({ message: "Нет доступных данных для GPA." });
    }

    res.status(200).json({ students });
  } catch (error) {
    console.error("Ошибка при получении списка студентов:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
