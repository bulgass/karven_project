import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box, Container } from '@mui/material';

const CppMaterials = () => {
    const lessons = [
        { title: 'Introduction to C++', description: 'Learn the basics of JavaScript, the most popular programming language for web development.' },
        { title: 'C++ Functions', description: 'Understand how to create and use functions in JavaScript.' },
        { title: 'C++ Data Sturcture', description: 'Learn how to work with arrays and perform operations on them.' },
        { title: 'C++ OOP', description: 'Explore modern JavaScript features introduced in ECMAScript 6 (ES6).' }
    ];

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                C++ Materials
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                {lessons.map((lesson, index) => (
                    <Box key={index} flexBasis="30%" mb={3}>
                        <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '20px'}}>
                            <CardContent >
                                <Typography variant="h5" gutterBottom>
                                    {lesson.title}
                                </Typography>
                                <Typography variant="body2">
                                    {lesson.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="primary">
                                    Start Tutorial
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default CppMaterials;
