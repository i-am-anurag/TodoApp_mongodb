const mongoose = require('mongoose');
const { Schema } = mongoose;

const otpSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
  OTP: { type: String, required: true },
  expireAt: { 
    type: Date, 
    default: Date.now, 
    index: { expires: '10m' } }
});

module.exports = mongoose.model('Otp', otpSchema,'otp');
