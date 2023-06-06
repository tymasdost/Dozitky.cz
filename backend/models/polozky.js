const mongoose = require("mongoose");

const polozkySchema = mongoose.Schema({
    nazev: { type: String, required: true },
    kategorie: { type: String, required: true },
    podkategorie: { type: String, required: true },
    cena: { type: String, required: true },
    popisek: { type: String, required: false },
    obrazek: { type: String, required: true },
    hodnoceni: { type: String, required: true },
    sleva: { type: String, required: false },
});


module.exports = mongoose.model("polozky", polozkySchema);