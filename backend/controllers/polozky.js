const Polozka = require("../models/polozky");

exports.getPolozkaById = async (req, res) => {
    try {
        const result = await Polozka.findById(req.params.id).select("nazev cena hodnoceni obrazek sleva popisek kategorie");
        if (result) {
            return res.status(200).json({
                polozka: {
                    ...result.toObject(),
                    request: {
                        type: "GET",
                        url: `http://localhost:3000/polozky/polozka/${req.params.id}`,
                    },
                },
            });
        }
        res.status(404).json({ msg: "Polozka nenalezena" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
};

exports.getPolozky = async (req, res) => {
    try {
        const result = await Polozka.find().select("__v");
        if (result && result.length !== 0) {
            return res.status(200).json({
                count: result.length,
                polozky: result.map((polozka) => {
                    return {
                        ...polozka.toObject(),
                        request: {
                            type: "GET",
                            url: `http://localhost:3000/polozky`,
                        },
                    };
                }),
            });
        }
        res.status(404).json({ msg: "Polozky nenelazeny" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
};

exports.getPolozkyFromKategorie = async (req, res) => {
    try {
        const result = await Polozka.find({ kategorie: req.params.kategorie }).select("nazev cena hodnoceni obrazek sleva");
        if (result && result.length !== 0) {
            return res.status(200).json({
                count: result.length,
                polozky: result.map((polozka) => {
                    return {
                        ...polozka.toObject(),
                        request: {
                            type: "GET",
                            url: `http://localhost:3000/polozky/kategorie`,
                        },
                    };
                }),
            });
        }
        res.status(404).json({ msg: "Polozka nenelazena" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
};
exports.getPolozkyFromPodKategorie = async (req, res) => {
    try {
        const result = await Polozka.find({ podkategorie: req.params.podkategorie }).select("nazev cena hodnoceni obrazek sleva");
        if (result && result.length !== 0) {
            return res.status(200).json({
                count: result.length,
                polozky: result.map((polozka) => {
                    return {
                        ...polozka.toObject(),
                        request: {
                            type: "GET",
                            url: `http://localhost:3000/polozky/podkategorie`,
                        },
                    };
                }),
            });
        }
        res.status(404).json({ msg: "Polozka nenelazena" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
};

