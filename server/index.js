require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const cloudinary = require("./cloundinary").default;

app.use(cors());
app.use(express.json());
