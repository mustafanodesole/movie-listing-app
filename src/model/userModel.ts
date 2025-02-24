import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullname: {
    type: "string",
    required: [true, "Provide Fullname"],
  },
  email: {
    type: "string",
    required: [true, "Please Provide a Email"],
    unique: true,
  },

 

  password: {
    type: "string",
    required: [false, "Please Provide a Password"],
  },



  
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;