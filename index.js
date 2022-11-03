const express = require("express");
const app = express();

const port = 5999;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi');
});

app.get('/door-intruder', (req, res) => {
	console.log("ATTENTION!! INTRUDER DETECTED");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

