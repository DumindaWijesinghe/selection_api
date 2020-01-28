var mongoose = require('mongoose');

/**
 * Since all the image meta data is stored in another service 
 * we will store selectionId, authorId and a selection array
 * array indices will represent the order of the images and 
 * we will only store image ids to avoid redundancy. 
 */
var SelectionSchema = new mongoose.Schema({
    selectionId: String,
    authorId: String,
    selection: Array,
}, {
    timestamps: true
});
const Selection = mongoose.model('Selection', SelectionSchema);

module.exports = Selection;