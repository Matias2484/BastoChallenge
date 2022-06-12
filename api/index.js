require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

//Connection with Mongo DB
const { dbConnection } = require("./src/configDB/config");
dbConnection();
const routes = require("./src/routes/index");

app.use(cors());

//Create Express Server
app.use(express.json());

app.use("/", routes);

//Listen Requests
const server = app.listen(4000, () => {
  console.log("Server running in port 4000");
});

module.exports = {app, server};