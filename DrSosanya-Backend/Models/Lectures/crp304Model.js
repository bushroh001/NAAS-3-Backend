const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Crp304 = new Schema(
    {
   
        CourseCode: {
            type: String,
            default : "CRP 304",
        },
        CourseTitle: {
            type: String,
            default : " Plant Pathology ",
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
            default : "crp304",
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
module.exports = mongoose.model('Crp304', Crp304);