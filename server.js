// server.js
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

// Access the variables using process.env
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: true
}));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USERNAME && password === PASSWORD) {
    // Authentication successful
    req.session.loggedIn = true;
    res.redirect('/files');
  } else {
    // Authentication failed
    res.send("<h2>Login failed. <a href='/'>Try again</a></h2>");
  }
});


// File list page
app.get("/files", (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect("/");
  }

  const fileDir = path.join(__dirname, "public/files");
  fs.readdir(fileDir, (err, files) => {
    if (err) {
      return res.send("Error loading files.");
    }

    let fileLinks = files.map(file => `<li><a href="/files/${file}" download>${file}</a></li>`).join("");
    res.send(`
      <h2>Available Files</h2>
      <ul>${fileLinks}</ul>
      <a href="/logout">Logout</a>
    `);
  });
});

// Serve files from /public/files
app.use("/files", express.static(path.join(__dirname, "public/files")));

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
