const express = require("express");
const app = express();
const TeachableMachine = require("@sashido/teachablemachine-node");

const model = new TeachableMachine({
  modelUrl: ""	// model link here
});

const port = 5999;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi')
});

app.get("/face-rec", (req, res) => {
	model.classify({
		imageUrl: req.body.img,
	  }).then((predictions) => {
		res.send(predictions)
	  }).catch((e) => {
		console.log("ERROR", e);
	});
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});

