// controllers/tourController.js
const Tour = require('../models/tourModel');

exports.getTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json(tours);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addTour = async (req, res) => {
    const newTour = new Tour({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
    });

    try {
        const savedTour = await newTour.save();
        res.status(201).json(savedTour);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
