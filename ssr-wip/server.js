import http from "http";
import React from "react";
import { renderToString } from "react-dom/server";

// Define a simple React component
function App() {
  return (
    <div>
      <h1>Hello, Server-Side Rendering!</h1>
      <p>This content is rendered on the server.</p>
    </div>
  );
}

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Render the React component to HTML on the server
  const html = renderToString(<App />);

  // Set the content type and send the rendered HTML as a response
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Server-Side Rendering Example</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
  `);
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
