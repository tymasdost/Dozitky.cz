const express = require("express");
const router = express.Router();
const kategorieController = require("../controllers/kategorie");

router.get("/kategorieDetaily/:id", kategorieController.getKategorie);

module.exports = router;
