const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let CPP301 = new Schema(
    {
   
   
        CourseCode: {
            type: String,
            default : "CPP 301",
        },
        CourseTitle: {
            type: String,
            default : "Agronomy of Arable Crops & Agro-climatology ",
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
            default : "CPP301",
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
module.exports = mongoose.model('CPP301', CPP301);