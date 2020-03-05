const { Router } = require("express");
const bcrypt = require("bcrypt");
const { toJWT } = require("../authentication/jwt");

const JobApplicant = require("../models/jobApplicant");

const router = new Router();

router.post("/login", async (request, response, next) => {
  try {
    const { mail, password } = request.body; // FIXME: request.body || request.query
    console.log("mail and password are", mail, " ", password);

    if (!mail || !password) {
      response.status(400).send({
        message: "Not a valid email and password combination"
      });
    }
    const jobApplicant = await JobApplicant.findOne({ where: { mail } });
    console.log("value of jobApplicant", jobApplicant);
    if (!jobApplicant) {
      response.status(404).send("User is not found");
    } else {
      const isValidPassword = bcrypt.compareSync(
        password,
        jobApplicant.password
      );
      if (isValidPassword) {
        response.send({
          fullName: jobApplicant.fullName,
          mail: jobApplicant.mail,
          jwt: toJWT({ jobApplicantId: jobApplicant.id }),
          jobApplicantId: jobApplicant.id
        });
      } else {
        response.status(400).send({
          message: "Password is not correct. "
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
