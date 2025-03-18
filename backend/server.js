const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); 
const connectDB = require("./config/db");
const systemAdministratorRoute = require("./routes/systemAdministrator.route");
const AcademicOfficerRoute = require("./routes/academicOfficer.route");
const LecturerRoute = require("./routes/lecturer.route");
const AssignmentRoute = require("./routes/assignment.route");
const ResourcesRoute = require("./routes/resource.route");
const ResultsRoute = require("./routes/result.route");
const studentRoute = require("./routes/student.route");
const eventRoute = require("./routes/event.route");
const courseRoute = require("./routes/course.route");
const courseModuleRoute = require("./routes/courseModule.route");
const announcement = require("./routes/announcement.route");
const notification = require("./routes/notification.route");
const shedule = require("./routes/shedule.route");

dotenv.config();

const app = express();

const allowedOrigins = ["http://localhost:5173", "http://localhost:9000", "http://localhost:9001"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS:", origin); // Debugging
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/administrator", systemAdministratorRoute);
app.use("/api/student", studentRoute);
app.use("/api/event", eventRoute);
app.use("/api/course", courseRoute);
app.use("/api/courseModule", courseModuleRoute);
app.use("/api/announcement", announcement);
app.use("/api/notification", notification);
app.use("/api/shedule", shedule);
app.use("/api/academicOfficer", AcademicOfficerRoute);
app.use("/api/lecturer", LecturerRoute);
app.use("/api/assignment", AssignmentRoute);
app.use("/api/resources", ResourcesRoute);
app.use("/api/results", ResultsRoute);


app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});