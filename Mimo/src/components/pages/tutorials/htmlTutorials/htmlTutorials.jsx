import React from 'react';
import { Typography, Container, Box, Divider } from '@mui/material';

const HtmlTutorial = () => {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h3" align="center" gutterBottom>
          Introduction to HTML
        </Typography>

        <Typography variant="body1" paragraph>
          HTML (HyperText Markup Language) is the standard language for creating webpages. It describes the structure of a webpage using markup, where elements like paragraphs, headings, and links are defined. These elements are the building blocks of any website.
        </Typography>

        <Divider />
        
        {/* HTML Basics */}
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            1. Basic Structure of an HTML Document
          </Typography>
          <Typography variant="body1" paragraph>
            Every HTML document starts with a <code>&lt;!DOCTYPE html&gt;</code> declaration, which tells the browser that the document is written in HTML5. The document is then wrapped in <code>&lt;html&gt;</code> tags. Inside the HTML document, there are two main sections: the <code>&lt;head&gt;</code> and the <code>&lt;body&gt;</code>.
          </Typography>

          <Typography variant="body1" paragraph>
            Here’s an example of a basic HTML structure:
          </Typography>

          <Box component="pre" bgcolor="grey.100" p={2} borderRadius={4} mb={3}>
            {`<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML page.</p>
  </body>
</html>`}
          </Box>

          <Typography variant="body1" paragraph>
            In the example above:
            <ul>
              <li>The <code>&lt;head&gt;</code> element contains metadata about the document, like its title, character set, and linked resources (CSS or JavaScript).</li>
              <li>The <code>&lt;body&gt;</code> element contains the actual content of the webpage, such as headings, paragraphs, images, and links.</li>
            </ul>
          </Typography>
        </Box>

        <Divider />

        {/* HTML Elements */}
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            2. Common HTML Elements
          </Typography>

          <Typography variant="body1" paragraph>
            HTML uses elements to represent different types of content. Here are a few of the most commonly used elements:
          </Typography>

          <Typography variant="body2" paragraph>
            <strong>&lt;h1&gt; to &lt;h6&gt;</strong> – Heading elements. The <code>&lt;h1&gt;</code> tag is used for the main heading, while <code>&lt;h6&gt;</code> is for subheadings.
          </Typography>
          
          <Box component="pre" bgcolor="grey.100" p={2} borderRadius={4} mb={3}>
            {`<h1>Main Heading</h1>
<h2>Subheading</h2>`}
          </Box>

          <Typography variant="body2" paragraph>
            <strong>&lt;p&gt;</strong> – The paragraph element. It is used to define blocks of text:
          </Typography>
          
          <Box component="pre" bgcolor="grey.100" p={2} borderRadius={4} mb={3}>
            {`<p>This is a paragraph of text.</p>`}
          </Box>

          <Typography variant="body2" paragraph>
            <strong>&lt;a&gt;</strong> – Anchor element. It is used to create links to other pages or resources:
          </Typography>
          
          <Box component="pre" bgcolor="grey.100" p={2} borderRadius={4} mb={3}>
            {`<a href="https://www.example.com">Visit Example</a>`}
          </Box>
          
        </Box>

        <Divider />

        {/* HTML Forms */}
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            3. HTML Forms
          </Typography>
          <Typography variant="body1" paragraph>
            HTML forms are used to collect user input. They include various form elements like <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code>.
          </Typography>

          <Typography variant="body1" paragraph>
            Here’s an example of a simple form:
          </Typography>

          <Box component="pre" bgcolor="grey.100" p={2} borderRadius={4} mb={3}>
            {`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Submit</button>
</form>`}
          </Box>
        </Box>

        <Divider />

        {/* Conclusion */}
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            Conclusion
          </Typography>
          <Typography variant="body1" paragraph>
            This tutorial has introduced the basics of HTML. We've covered the basic structure of an HTML document, common HTML elements, and how to create simple forms. HTML is a powerful language and forms the backbone of web development. Mastering it is the first step towards becoming a web developer.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HtmlTutorial;
