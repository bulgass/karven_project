const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mimo-c5e84.firebaseio.com"
});

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Обработчик для корневого URL
app.get('/', (req, res) => {
  res.send('Сервер работает. Перейдите по /api/gpa/average для получения среднего GPA.');
});

// Эндпоинт для получения среднего GPA
app.get('/api/gpa/average', async (req, res) => {
  try {
    const gpaData = [];
    const snapshot = await admin.firestore().collection('students').get();

    snapshot.forEach(doc => {
      const data = doc.data();
      const gpaString = data.gpa;
      if (gpaString && gpaString !== "") {
        gpaData.push(parseFloat(gpaString));
      }
    });

    if (gpaData.length === 0) {
      return res.status(404).json({ message: "Нет доступных данных для GPA." });
    }

    const total = gpaData.reduce((acc, gpa) => acc + gpa, 0);
    const averageGPA = total / gpaData.length;

    res.status(200).json({ averageGPA });
  } catch (error) {
    console.error("Ошибка при получении GPA:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
