import React, { useEffect, useState } from "react";
import {
    Table, TableBody, TableCell,
    TableContainer, TableHead,
    TableRow, Paper
} from "@mui/material";
import axios from 'axios';

const RankingComponent = () => {
    const [averageGPA, setAverageGPA] = useState(null);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchAverageGPA = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/gpa/average');
                setAverageGPA(response.data.averageGPA);
            } catch (error) {
                console.error("Ошибка при получении среднего GPA:", error);
            }
        };

        fetchAverageGPA();
    }, []);

    // В данном случае добавьте временные данные студентов
    const temporaryStudents = [
        { id: 1, name: 'Kutman Bekbolotov', rating: averageGPA || 'N/A' }, // Используйте averageGPA
    ];

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Student Name</strong></TableCell>
                        <TableCell align="right"><strong>Average GPA</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {temporaryStudents.map((student) => (
                        <TableRow key={student.id}>
                            <TableCell>{student.name}</TableCell>
                            <TableCell align="right">{student.rating}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RankingComponent;
