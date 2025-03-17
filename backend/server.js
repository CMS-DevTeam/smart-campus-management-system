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

dotenv.config();

const app = express();

const allowedOrigins = ["http://localhost:5173", "http://localhost:9000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
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


app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});

