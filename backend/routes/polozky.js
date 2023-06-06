const express = require("express");
const router = express.Router();
const polozkyController = require("../controllers/polozky");

router.get("/", polozkyController.getPolozky);
router.get("/kategorie/:kategorie", polozkyController.getPolozkyFromKategorie);
router.get("/podkategorie/:podkategorie", polozkyController.getPolozkyFromPodKategorie);
router.get("/polozka/:id", polozkyController.getPolozkaById);

module.exports = router;
