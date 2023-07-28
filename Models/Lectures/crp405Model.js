const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Crp405 = new Schema(
    {
   
        CourseCode: {
            type: String,
            default : "CRP 405",
        },
        CourseTitle: {
            type: String,
            default : " Crop Protection and Disease Control ",
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
            default : "crp405",
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
module.exports = mongoose.model('Crp405', Crp405);