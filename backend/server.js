const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const systemAdministratorRoute = require("./routes/systemAdministrator.route");
const AcademicOfficerRoute = require("./routes/academicOfficer.route");
const LecturerRoute = require("./routes/lecturer.route");
const AssignmentRoute = require("./routes/assignment.route");

dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/administrator", systemAdministratorRoute);
app.use("/api/academicOfficer", AcademicOfficerRoute);
app.use("/api/lecturer", LecturerRoute);
app.use("/api/assignment", AssignmentRoute);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
