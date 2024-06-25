const express = require("express");
const app = express();
const port = process.env.PORT ?? 80;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/step/1", (req, res) => {
  res.sendFile(__dirname + "/step1.html");
});

app.get("/step/2", (req, res) => {
  res.sendFile(__dirname + "/step2.html");
});

app.get("/step/3", (req, res) => {
  res.sendFile(__dirname + "/step3.html");
});

app.get("/step/done", (req, res) => {
  res.sendFile(__dirname + "/done.html");
});

app.listen(port, () => {
  console.log("listen");
});
