const express = require("express");
const router = express.Router();
const Selection = require("./Selection");

/**
 * Create a new selection or update an existing one.
 */
router.post("/", async function(req, res) {
  try {
    const { selectionId, authorId, selection } = req.body;

    const selectionDoc = await Selection.findOneAndUpdate(
      { selectionId, authorId },
      { $set: { selection } },
      {
        new: true,
        upsert: true
      }
    );

    res.status(200).json({
      success: true,
      data: selectionDoc
    });
  } catch (e) {
    res.status(500).json({
        success: false,
        message: e.message
    });
  }
});

/**
 * Fetch selection for a specific selectionId
 */
router.get("/:id", async function(req, res) {
  try {

    const selectionId = req.params.id;

    const selection = await Selection.findOne({selectionId});

    if(!selection){
        throw new Error(`No selection found for selectionId - ${selectionId}`)
    }

    res.status(200).json({
      success: true,
      data: selection
    });
  } catch (e) {
    res.status(500).json({
        success: false,
        message: e.message
    });
  }
});

module.exports = router;
