import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box, Container } from '@mui/material';

const CssMaterials = () => {
    const lessons = [
        { title: 'Introduction to CSS', description: 'Learn the fundamentals of CSS, including selectors, properties, and values.' },
        { title: 'CSS Box Model', description: 'Understand the CSS Box Model and how elements are rendered on the page.' },
        { title: 'Flexbox Layout', description: 'Learn how to create responsive layouts using CSS Flexbox.' },
        { title: 'CSS Grid Layout', description: 'Explore CSS Grid for more complex, two-dimensional layouts.' }
    ];

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                CSS Materials
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

export default CssMaterials;
