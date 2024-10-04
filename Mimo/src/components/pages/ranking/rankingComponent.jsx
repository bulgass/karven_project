import React, { useEffect, useState } from "react";
import {
    Table, TableBody, TableCell,
    TableContainer, TableHead,
    TableRow, Paper
} from "@mui/material";
import axios from 'axios';

const RankingComponent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/gpa/average');
                setStudents(response.data.students); // Устанавливаем список студентов
            } catch (error) {
                console.error("Ошибка при получении списка студентов:", error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Rank</strong></TableCell> {/* Номер */}
                        <TableCell><strong>Email</strong></TableCell>
                        <TableCell align="right"><strong>GPA</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}.</TableCell> {/* Нумерация студентов */}
                            <TableCell>{student.email}</TableCell>
                            <TableCell align="right">{student.gpa}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RankingComponent;
