var mongoose = require('mongoose');
var SelectionSchema = new mongoose.Schema({
    selectionId: String,
    authorId: String,
    selection: Array,
}, {
    timestamps: true
});
const Selection = mongoose.model('Selection', SelectionSchema);

module.exports = Selection;