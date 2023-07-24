const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Crp405 = new Schema(
    {
   
   
        Topic: {
            type: String,
            required: true
        },
        Description : {
            type: String,
            required: true
        },
        document: [
            {
        public_id:{
         type: String,
         
        },
        url: {
          type:String,
         
        }
         
         },
    ],    
   
 },

{ timestamps: true }

);
module.exports = mongoose.model('Crp405', Crp405);