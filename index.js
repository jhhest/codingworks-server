const express = require("express");
const cors = require("cors");
const models_and_relations = require("./models/models_relations");
/**
 * Routers
 */
const JobApplicantRouter = require("./routes/jobApplicant");
const JobOfferRouter = require("./routes/jobOffer");
const companyRouter = require("./routes/companies");
const jobApplicationRouter = require("./routes/jobApplication");
const authRouter = require("./routes/authentication")
// middleware
const app = express();
app.use(cors(), express.json());

/**
 * endpoints
 */
app.use("/company", companyRouter);
app.use("/jobapplicant", JobApplicantRouter);
app.use("/jobapplication", jobApplicationRouter);
app.use("/joboffer", JobOfferRouter);
app.use("/auth", authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`\n---\n Server is listening on:${port}\n---\n`)
);
