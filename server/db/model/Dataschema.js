const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
       userid: {
        type: number,
        required: true
        },
       firstname: {
       type: String,
       required: true
       },
       Lastname: {
        type: String,
        required: true
       },
       role: {
       type: String,
       required: true
      },
      Email: {
        type: String,
        required: true
        }
});

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;