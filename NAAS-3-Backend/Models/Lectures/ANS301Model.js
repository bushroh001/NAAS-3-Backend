const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ANS301 = new Schema(
    {
   
        CourseCode: {
            type: String,
            default : " ANS 301",
        },
        CourseTitle: {
            type: String,
            default : " Non-ruminant Animal Production ",
        },
        Topic: {
            type: String,
            required: true
        },
        Description : {
            type: String,
            required: true
        },
        Code: {
            type: String,
            default : "ANS301",
        },
        document: [
            {
        public_id:{
         type: String,
         required: true
         
        },
        url: {
          type:String,
          required:true
         
        }
         
         },
    ],    
   
 },

{ timestamps: true }

);
module.exports = mongoose.model('ANS301',ANS301);