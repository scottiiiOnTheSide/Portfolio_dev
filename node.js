const express = require('express');
const app = express();

app.listen(5000, '0.0.0.0', () => {
	console.log("Portfolio Project Running on Port 5000. . .");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});
