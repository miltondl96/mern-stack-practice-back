const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        default: Date.now,
        type: Date
    }
}, {
    timestamps: true
})

module.exports = model('Note', noteSchema);