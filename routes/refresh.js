const express = require("express");
const router = express.Router();
const refreshTokenController = require("../controllers/refreshTokenContreller");

router.get("/", refreshTokenController.handleRefreshToken);

module.exports = router;
