const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Cpt503 = new Schema(
    {
   
        CourseCode: {
            type: String,
            default : "CPT 503",
        },
        CourseTitle: {
            type: String,
            default : "Principles of Nematology ",
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
            default : "cpt503",
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
module.exports = mongoose.model('Cpt503', Cpt503);