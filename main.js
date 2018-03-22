const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const database = require("./database.js")(mongoose);
const api = require("./api.js")(database);
const routes = require("./routes.js")(api, express, bodyParser, path, app);
