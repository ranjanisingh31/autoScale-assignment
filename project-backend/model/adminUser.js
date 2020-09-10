const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adminSchema = new Schema({
    name: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model(
    "admin",
    adminSchema,
    "admin"
);