const express = require("express");
const app = express();
const port = 8800;

const mongoose = require("mongoose");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
