const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const { register, login } = require("../controllers/auth");

// @route PORT api/auth/register
// @desc Register user
// @access Public

router.post("/register", async (req, res) => {
  await register(req, res);
});

// @route PORT api/auth/login
// @desc Login user
// @access Public

router.post("/login", async (req, res) => {
  await login(req, res);
});

module.exports = router;
