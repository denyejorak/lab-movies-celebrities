//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, default: "unknown" },
  catchPhrase: { type: String, default: "I'm a celebrity!" },
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;