const { Router } = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/user");

const router = new Router();

router.post("/new", async (request, response, next) => {
  try {
    console.log("\n---\nEndpoint /user/new\n---\n");
    const { password, ...userParamaters } = request.body;
    const newUser = {
      ...userParamaters,
      password: bcrypt.hashSync(password, 10)
    };
    console.log(`\n Creating User * ${newUser.userFullName}\n`);
    const newUserAccount = await User.create(newUser);
    response.json(newUserAccount);
  } catch (error) {
    next(error);
  }
});

module.exports = router;