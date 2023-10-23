const express = require('express');
const { join } = require('path');

const app = express();

const PORT = 3000;

app.use(express.static(join(__dirname, 'public')));

app.listen(3000, 'localhost', () => {
  console.log(`Server listening on ${PORT}`);
});
