const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    // Serve the home page with dynamic content
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Home Page</title>
      </head>
      <body>
          <h1>Welcome to the Home Page</h1>
          <p>This is the home page content.</p>
          <p>Current date and time: ${new Date()}</p>
          <a href="/about">About Us</a>
      </body>
      </html>
    `);
  } else if (req.url === "/about" || req.url === "/about.html") {
    // Serve the about page with dynamic content
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>About Us</title>
      </head>
      <body>
          <h1>About Us</h1>
          <p>We are a dynamic web server example.</p>
          <p>Current date and time: ${new Date()}</p>
          <a href="/">Home</a>
      </body>
      </html>
    `);
  } else {
    // Handle 404 - Not Found
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
