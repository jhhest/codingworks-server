
const { Router } = require("express");
const JobApplicant = require("../routes/jobApplicant");

const router = new Router();

router.post("/test", async (request, response, next) => {
  try {
    console.log("\n---\ntest\n---\n");
    response.send("This is a test");
  } catch (error) {
    next(error);
  }
});

module.exports = router;