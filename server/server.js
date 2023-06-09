const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello from server!');
});

app.listen(5000, () => {
  console.log('Server listening on port: 5000');
});
