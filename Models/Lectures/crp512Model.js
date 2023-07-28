const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Crp512 = new Schema(
    {
   
   
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
            default : "crp512",
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
module.exports = mongoose.model('Crp512', Crp512);