// models/tourModel.js
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
