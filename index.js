const express = require("express");
const cors = require("cors");

const app = express();
const JobApplicantRouter = require("./routes/jobApplicant");

app.use(cors(), express.json());
app.use("/jobapplicant", JobApplicantRouter)

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`\n---\n Server is listening on:${port}\n---\n`)
);
