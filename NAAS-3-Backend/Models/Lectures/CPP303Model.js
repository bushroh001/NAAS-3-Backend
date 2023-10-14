const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let CPP303 = new Schema(
    {
   
   
        Topic: {
            type: String,
            required: true
        },
        CourseCode: {
            type: String,
            default : "CPP 303",
        },
        CourseTitle: {
            type: String,
            default : " Introductory Agricultural Entomology ",
        },
        Description : {
            type: String,
            required: true
        },
        Code: {
            type: String,
            default : "CPP303",
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
module.exports = mongoose.model('CPP303', CPP303);