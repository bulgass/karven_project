import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../../firebase'; 
import "../testsPage.css";

const HtmlTest = () => {
    const questions = [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language",
                "Hyper Tool Markup Language"
            ],
            correct: "Hyper Text Markup Language"
        },
        {
            question: "Who is making the Web standards?",
            options: [
                "Google",
                "Microsoft",
                "The World Wide Web Consortium",
                "Mozilla"
            ],
            correct: "The World Wide Web Consortium"
        },
        {
            question: "What is the correct HTML element for the largest heading?",
            options: [
                "<head>",
                "<h6>",
                "<heading>",
                "<h1>"
            ],
            correct: "<h1>"
        },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const saveScoreToFirestore = async () => {
        try {
            await addDoc(collection(db, "testScores"), {
                subject: "HTML",
                score: score,
                timestamp: new Date()
            });
            console.log("Score saved successfully!");
        } catch (e) {
            console.error("Error adding score: ", e);
        }
    };

    const handleAnswerOptionClick = (option) => {
        if (option === questions[currentQuestion].correct) {
            setScore(score + 10); 
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer("");
        } else {
            setShowScore(true); 
            saveScoreToFirestore(); 
        }
    };

    return (
        <div className="HtmlTest">
            <h1>HTML Knowledge Test</h1>
            {showScore ? (
                <div>
                    <h2>Your Score: {score} / {questions.length * 10}</h2>
                    <p>Test completed! Your score has been saved.</p>
                </div>
            ) : (
                <div>
                    <h2>Question {currentQuestion + 1} / {questions.length}</h2>
                    <p>{questions[currentQuestion].question}</p>
                    <div>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerOptionClick(option)}
                                disabled={selectedAnswer === option}
                                style={{
                                    margin: "5px",
                                    padding: "10px 20px",
                                    backgroundColor: selectedAnswer === option ? "#ddd" : "#fff",
                                    cursor: selectedAnswer ? "default" : "pointer"
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HtmlTest;
