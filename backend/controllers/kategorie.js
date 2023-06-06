const Kategorie = require("../models/kategorie");

exports.getKategorie = async (req, res) => {
  try {
    const result = await Kategorie.findOne({ id: req.params.id }).select("_id id pozadi nazev");
    if (result) {
      return res.status(200).json({
        kategorie: {
          ...result.toObject(),
          request: {
            type: "GET",
            url: `http://localhost:3000/kategorie/kategorie`,
          },
        },
      });
    }
    res.status(404).json({ msg: "Kategorie nenalezena" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};