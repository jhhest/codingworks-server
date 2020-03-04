const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors(), express.json());

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`\n---\n Server is listening on:${port}\n---\n`)
);
