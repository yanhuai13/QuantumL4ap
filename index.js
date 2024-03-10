const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to QuantumLeap! Our state-of-the-art simulation software for quantum computing provides researchers and enthusiasts with an intuitive environment to model and test quantum algorithms, offering insights into quantum behavior with visualizations and comprehensive analytics tools.');
});

// Define route for the simulation environment page
app.get('/simulation-environment', (req, res) => {
  res.send('Our simulation environment provides an intuitive interface for modeling and testing quantum algorithms, with support for a wide range of quantum computing architectures.');
});

// Define route for the visualizations page
app.get('/visualizations', (req, res) => {
  res.send('Explore quantum behavior with our comprehensive visualizations, which provide insights into quantum states, entanglement, and more.');
});

// Define route for the analytics tools page
app.get('/analytics-tools', (req, res) => {
  res.send('Analyze and optimize your quantum algorithms with our powerful analytics tools, which provide detailed metrics and performance indicators.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});