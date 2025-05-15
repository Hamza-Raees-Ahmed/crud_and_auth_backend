import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    required : true,
    ref: "User"
  },
  name: {
    type: String,
    required: [true, "Please enter the contact name"]
  },
  email: {
    type: String,
    required: [true, "Please enter the email address"]
  },
contactNo: {
    type: String,
    required: [true, "Please enter the phone number"]
  }
}, {
  timestamps: true
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
