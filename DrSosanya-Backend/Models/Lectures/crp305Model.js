const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Crp305 = new Schema(
    {
   
        CourseCode: {
            type: String,
            default : "CRP 305",
        },
        CourseTitle: {
            type: String,
            default : " Pests and Microorganisms in Agriculture ",
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
            default : "crp305",
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
module.exports = mongoose.model('Crp305', Crp305);