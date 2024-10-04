import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box, Container } from '@mui/material';

const HtmlMaterials = () => {
    const lessons = [
        { title: 'Introduction to HTML', description: 'Learn the basics of HTML, the foundation of web development.' },
        { title: 'HTML Tags', description: 'Get to know various HTML tags and their uses.' },
        { title: 'HTML Forms', description: 'Understand how to create forms for user input in HTML.' },
        { title: 'HTML5 New Features', description: 'Explore new elements and features introduced in HTML5.' }
    ];

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                HTML Materials
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                {lessons.map((lesson, index) => (
                    <Box key={index} flexBasis="30%" mb={3}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '20px' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {lesson.title}
                                </Typography>
                                <Typography variant="body2">
                                    {lesson.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="primary" >
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

export default HtmlMaterials;
