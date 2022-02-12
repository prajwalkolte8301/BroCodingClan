const express = require("express");
const app = express();
const port = 8800;

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/server/auth", authRoute);
app.use("/server/users", usersRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
