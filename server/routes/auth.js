const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const verifyToken = require("../middleware/auth");

const { loggedIn, register, login } = require("../controllers/auth");

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get("/", verifyToken, async (req, res) => {
  await loggedIn(req, res);
});

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
