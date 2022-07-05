const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const jobsController = require("./controllers/job.controller");

app.use("/jobs", jobsController);



module.exports = app;