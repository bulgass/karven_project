import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const tutorials = {
    0: {
        title: 'Introduction to HTML',
        content: `
            <h2>What is HTML?</h2>
            <p>HTML stands for HyperText Markup Language. It is used to create web pages and web applications.</p>
            <h3>Basic HTML Structure</h3>
            <pre>
                &lt;!DOCTYPE html&gt;
                &lt;html&gt;
                    &lt;head&gt;
                        &lt;title&gt;My First HTML Page&lt;/title&gt;
                    &lt;/head&gt;
                    &lt;body&gt;
                        &lt;h1&gt;Welcome to HTML&lt;/h1&gt;
                        &lt;p&gt;This is an example of HTML structure.&lt;/p&gt;
                    &lt;/body&gt;
                &lt;/html&gt;
            </pre>
        `,
    },
    1: {
        title: 'HTML Tags',
        content: `
            <h2>Common HTML Tags</h2>
            <p>HTML uses a variety of tags to format content. Some of the most common tags include:</p>
            <ul>
                <li>&lt;h1&gt; to &lt;h6&gt;: Headings</li>
                <li>&lt;p&gt;: Paragraph</li>
                <li>&lt;a&gt;: Anchor (link)</li>
                <li>&lt;img&gt;: Image</li>
            </ul>
        `,
    },
    2: {
        title: 'HTML Forms',
        content: `
            <h2>HTML Forms</h2>
            <p>Forms are used to collect user input. Below is an example of a simple form:</p>
            <pre>
                &lt;form action="/submit" method="POST"&gt;
                    &lt;label for="name"&gt;Name:&lt;/label&gt;
                    &lt;input type="text" id="name" name="name"&gt;
                    &lt;input type="submit" value="Submit"&gt;
                &lt;/form&gt;
            </pre>
        `,
    },
    3: {
        title: 'HTML5 New Features',
        content: `
            <h2>HTML5 New Features</h2>
            <p>HTML5 introduces new elements like &lt;article&gt;, &lt;section&gt;, and &lt;nav&gt;. These elements help to structure web content more semantically.</p>
        `,
    },
};

const HtmlTutorial = () => {
    const { lessonId } = useParams();  
    const tutorial = tutorials[lessonId] || tutorials[0];  

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                {tutorial.title}
            </Typography>
            <Box>
                <div dangerouslySetInnerHTML={{ __html: tutorial.content }} />
            </Box>
        </Container>
    );
};

export default HtmlTutorial;
