const mongoose = require("mongoose");

const kategorieSchema = mongoose.Schema({
    id: { type: String, required: true },
    pozadi: { type: String, required: true },
    nazev: { type: String, required: true },
});


module.exports = mongoose.model("kategorie", kategorieSchema);