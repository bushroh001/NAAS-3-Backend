const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AEC303 = new Schema(
    {
   
        CourseCode: {
            type: String,
            default : "AEC 303",
        },
        CourseTitle: {
            type: String,
            default : " Principles of Agricultural Economics [I] ",
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
            default : "AEC303",
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
module.exports = mongoose.model('AEC303', AEC303);