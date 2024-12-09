const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to serve HTML files
const serveFile = (res, filePath, contentType) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
};

// Create the server
const server = http.createServer((req, res) => {
    let filePath = '';
    let contentType = 'text/html';

    // Routing
    if (req.url === '/' || req.url === '/index') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else if (req.url === '/contact-me') {
        filePath = path.join(__dirname, 'contact-me.html');
    } else {
        filePath = path.join(__dirname, '404.html');
    }

    // Serve the file
    serveFile(res, filePath, contentType);
});

// Start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
