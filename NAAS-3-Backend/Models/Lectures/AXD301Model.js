const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AXD301 = new Schema(
    {
   
        CourseCode: {
            type: String,
            default : "AXD 301",
        },
        CourseTitle: {
            type: String,
            default : "Extension Teaching and Learning Process and Methods ",
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
            default : "AXD301",
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
module.exports = mongoose.model('AxS301', AXD301);