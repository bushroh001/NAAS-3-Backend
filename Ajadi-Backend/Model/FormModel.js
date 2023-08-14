const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Form = new Schema(
    {
   
        Name: {
            type: String,
            required: true,
        },
        Occupation: {
            type: String,
            required: true,
        },

        School: {
            type: String,
        },

        Class: {
            type: String,
        },

        Status: {
            type: String,
            required: true,
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
    Address: {
        type: String,
        required: true,
    },
    
    Location: {
        type: String,
        required: true,
    },

    Email: {
        type: String,
        required: true,
    },

    PhoneNo: {
        type: String,
        required: true,
    },

    Age: {
        type: String,
         },


    Qualification: {
        type: String,
        required: true,
    },
   
 },

{ timestamps: true }

);
module.exports = mongoose.model('Form', Form);