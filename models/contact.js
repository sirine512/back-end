const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  sender: { type: String, require: true},
  email: { type: String, require: true},
  message: { type: String },
});
const contact = mongoose.model("contact", contactSchema);

module.exports = contact;
