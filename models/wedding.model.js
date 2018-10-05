const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WeddingSchema = new Schema({
    name: { type: String },
    email: { type: String },
    number: { type: String },
    attendies: { type: String },
    guest: { type: String },
    message: { type: String }
});

module.exports = mongoose.model('Wedding', WeddingSchema);