const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Cpt503 = new Schema(
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
            default : "crp503",
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
module.exports = mongoose.model('Cpt503', Cpt503);