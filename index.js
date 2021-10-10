const express = require("express");
const cors = require("cors");
require('dotenv').config()
const { name, version } = require("./package.json")
const router = require("./api/routes/route.js")
const port = process.env.PORT ? Number(process.env.PORT) : 3333;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router)

app.listen(
  port,
  () => console.log(
      `The server is running at the port http://localhost:${port} \nProject Name: ${name}, Version: ${version}`
    )
);