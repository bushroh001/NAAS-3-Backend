const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Form = new Schema(
    {
   
        Title: {
            type: String,
            required: true,
        },
      

        Description: {
            type: String,
        },

        date: {
            type: String,

            
            
        },

       
        Image: [
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
module.exports = mongoose.model('Form', Form);