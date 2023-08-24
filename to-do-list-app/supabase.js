// Import the required modules
const express = require('express');
const jwt = require('jsonwebtoken');

// Create an instance of the Express app
const app = express();

const secretKey = 'SecretCode';

app.use(express.json());
app.use(express.static('public'))

const users = [
  { id: 1, username: 'teste', password: 'teste123' }
];

// Generate JWT token for a user
function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
}

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user);
  res.json({ token });
});

// Protected route
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}! This is a protected route.` });
});

// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

// Set the port number for the server to listen on
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});