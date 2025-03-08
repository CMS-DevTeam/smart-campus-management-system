const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const systemAdministratorRoute = require("./routes/systemAdministrator.route");
const studentRoute = require("./routes/student.route");
const eventRoute = require("./routes/event.route");
const courseRoute = require("./routes/course.route");
const courseModuleRoute = require("./routes/courseModule.route");
const announcement = require("./routes/announcement.route");

dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/administrator", systemAdministratorRoute);
app.use("/api/student", studentRoute);
app.use("/api/event", eventRoute);
app.use("/api/course", courseRoute);
app.use("/api/courseModule", courseModuleRoute);
app.use("/api/announcement", announcement);


app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});

