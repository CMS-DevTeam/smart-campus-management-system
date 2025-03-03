const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const systemAdministratorRoute = require("./routes/systemAdministrator.route");
const studentRoute = require("./routes/student.route");

dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/administrator", systemAdministratorRoute);
app.use("/api/student", studentRoute);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
