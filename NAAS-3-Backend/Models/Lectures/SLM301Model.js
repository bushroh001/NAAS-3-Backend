const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let SLM301 = new Schema(
    {
   
   
        Topic: {
            type: String,
            required: true
        },
        CourseCode: {
            type: String,
            default : "SLM 301",
        },
        CourseTitle: {
            type: String,
            default : " Introductory Pedology and Soil Physics ",
        },
        Description : {
            type: String,
            required: true
        },
        Code: {
            type: String,
            default : "SLM301",
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
module.exports = mongoose.model('SLM301', SLM301);