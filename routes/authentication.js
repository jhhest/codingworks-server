const { Router } = require("express");
const bcrypt = require("bcrypt");

const { toJWT } = require("../authentication/jwt");

const User = require("../models/user")

const router = new Router();

router.post("/login", async (request, response, next) => {
  try {
    const { email, password } = request.body; // FIXME: request.body || request.query
    console.log("mail and password are", email, " ", password);

    if (!email || !password) {
      response.status(400).send({
        message: "Not a valid email and password combination"
      });
    }
    const user = await User.findOne({ where: { email } });
    console.log("value of user", user);
    if (!user) {
      response.status(404).send("User is not found");
    } else {
      const isValidPassword = bcrypt.compareSync(
        password,
        user.password
      );
      if (isValidPassword) {
        response.send({
          firstName: user.firstName,
          lastName: user.lastName,
          telephoneNumber: user.telephoneNumber,
          email: user.email,
          dateOfBirth: user.dateOfBirth,
          city: user.city,
          jwt: toJWT({ userId: user.id }),
          userId: user.id
        });
      } else {
        response.status(400).send({
          message: "Password is not correct."
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
