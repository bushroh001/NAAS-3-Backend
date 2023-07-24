const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Crp511 = new Schema(
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
module.exports = mongoose.model('Crp511', Crp511);