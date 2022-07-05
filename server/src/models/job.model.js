const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    role: { type: String, required: false },
    ctc: { type: Number, required: true },
    experience: { type: String, required: true },
    location: { type: Number, required: false },
    openings:{type:Number, required: false},
    process:{type:String, required: true},
    description:{type: String, required: true}
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Job = mongoose.model("job", jobSchema);

module.exports = Job;