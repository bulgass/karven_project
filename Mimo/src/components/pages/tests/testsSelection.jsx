import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const TestSelection = () => {
    const subjects = [
        { title: 'HTML Test', description: 'Test your knowledge of HTML.', path: '/tests/html' },
        { title: 'CSS Test', description: 'Test your knowledge of CSS.', path: '/tests/css' },
        { title: 'JavaScript Test', description: 'Test your knowledge of JavaScript.', path: '/tests/javascript' },
    ];

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Select a Test
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                {subjects.map((subject, index) => (
                    <Box key={index} flexBasis="30%" mb={3}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '20px' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {subject.title}
                                </Typography>
                                <Typography variant="body2">
                                    {subject.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    component={Link}
                                    to={subject.path}
                                >
                                    Start Test
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default TestSelection;
