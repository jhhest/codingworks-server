const { Router } = require("express");
const CompanyAccount = require("../models/companyAccount");

const router = new Router();

router.post("/", async (request, response, next) => {
  try {
    console.log("\n---\nTest Companies Endpoint \n---\n");
    response.json(CompanyAccount.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
