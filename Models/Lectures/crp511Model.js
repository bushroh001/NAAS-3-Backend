const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Crp511 = new Schema(
    {
   
   
        CourseCode: {
            type: String,
            default : "CRP 511",
        },
        CourseTitle: {
            type: String,
            default : " Soil Borne and Root Diseases ",
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
            default : "crp511",
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
module.exports = mongoose.model('Crp511', Crp511);