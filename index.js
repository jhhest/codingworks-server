const express = require("express");
const cors = require("cors");

const app = express();
const JobApplicantRouter = require("./routes/jobApplicant");
const JobOfferRouter = require("./routes/jobOffer");
const companyRouter = require("./models/company");
const jobApplicationRouter = require("./models/jobApplication");

app.use(cors(), express.json());
app.use("/company", companyRouter);
app.use("/jobapplicant", JobApplicantRouter);
app.use("/jobapplication", jobApplicationRouter);
app.use("/joboffer", JobOfferRouter);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`\n---\n Server is listening on:${port}\n---\n`)
);
