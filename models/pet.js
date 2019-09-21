const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema(
  // 1st argument -> SCHEMA STRUCTURE
  {
    name: { type: String },
    breed: { type: String },
    location: { type: String },
    type: { type: String },
    sex: { type: String },
    refId: { type: String },
    birthDate: { type: String },
    image: { type: String }
  },
    {
    // automatically add "createdAt" and "updateAt" Date fields
    timestamps: true
    }
);



const PetModel = mongoose.model("Pet", petSchema);

module.exports = PetModel;
