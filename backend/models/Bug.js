const mongoose = require("mongoose");

const bugSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    priority: { type: String, required: true, enum: ["Low", "Medium", "High"] },
    status: { type: String, default: "Open" },
});

module.exports = mongoose.model("Bug", bugSchema);
