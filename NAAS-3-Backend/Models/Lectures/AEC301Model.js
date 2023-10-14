const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AEC301 = new Schema(
    {
   
        CourseCode: {
            type: String,
            default : "AEC 301",
        },
        CourseTitle: {
            type: String,
            default : "Statistics and Biometrics ",
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
            default : "AEC301",
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
module.exports = mongoose.model('AEC301', AEC301);