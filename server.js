const express = require("express");

const app = express();

app.get("/api/test", (req, res) => {
  const test = [
    { id: 1, name: "test1" },
    { id: 2, name: "test2" },
    { id: 3, name: "test3" },
  ];
  res.json(test);
});

const port = 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
