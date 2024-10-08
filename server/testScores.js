const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();

const db = admin.firestore();

router.get('/all-test-scores', async (req, res) => {
    console.log('Fetching all test scores...');
    try {
        const testScoresRef = db.collection('testScores');
        const snapshot = await testScoresRef.get();

        if (snapshot.empty) {
            console.log('No test scores found');
            return res.status(404).send('No test scores found.');
        }

        const testScores = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            testScores.push({ id: doc.id, ...data });
        });

        console.log('Test scores:', testScores);
        res.json(testScores);
    } catch (error) {
        console.error('Error fetching test scores:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/', (req, res) => {
    res.send('API работает. Используйте /all-test-scores для получения всех оценок тестов.');
});

module.exports = router;
