const { Router } = require("express");
const Company = require("../models/company");

const router = new Router();

router.post("/", async (request, response, next) => {
  try {
    console.log("\n---\nTest Companies Endpoint \n---\n");
    response.json(Company.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
