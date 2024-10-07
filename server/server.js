const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mimo-c5e84.firebaseio.com"
});

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Сервер работает. Перейдите по /api/gpa/average для получения среднего GPA.');
});

app.get('/api/gpa/average', async (req, res) => {
  try {
    const students = [];
    let totalGPA = 0;
    let count = 0;

    const snapshot = await admin.firestore().collection('students').get();

    snapshot.forEach(doc => {
      const data = doc.data();
      const email = data.email;
      const gpaData = data.gpa; 

      if (email && gpaData) {
        
        const gpaValues = Object.values(gpaData).filter(gpa => gpa !== "");
        const lastGPA = gpaValues.length > 0 ? parseFloat(gpaValues[gpaValues.length - 1]) : null;

        if (lastGPA !== null) {
          students.push({ email, gpa: lastGPA });
          totalGPA += lastGPA;
          count++;
        }
      }
    });

    if (students.length === 0) {
      return res.status(404).json({ message: "Нет доступных данных для GPA." });
    }

    const averageGPA = totalGPA / count;
    res.status(200).json({ averageGPA, students });
  } catch (error) {
    console.error("Ошибка при получении GPA:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
