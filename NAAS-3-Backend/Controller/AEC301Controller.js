const AEC301 = require("../Models/Lectures/AEC301Model")
const mongoose = require('mongoose')
const cloudinary = require('../Cloudinary/cloudinary')








// create new lesson
const createLesson = async (req, res,next) =>  {
  const { Topic, Description , document } = req.body
      try{
        
      
         let doc = [...req.body.document];
         let docBuffer = [];
         for(let i=0; i< doc.length; i++){
          const uploaddoc = await cloudinary.uploader.upload(doc[i],
            { resource_type: "auto" }
           )
            docBuffer.push({
              public_id: uploaddoc.public_id,
              url: uploaddoc.secure_url
            })
         }
           
         req.body.document= docBuffer

        const lesson = await AEC301.create(req.body)
        res.status(201).json({
          success: true,
          lesson
        })
      }
      catch (error) {
          console.log(error);
          next(error);
      }
  }



 
 // get all lessons

 const getLessons = async (req,res) => {
   const lesson = await AEC301.find({}).sort({createdAt:-1})
   res.status(200).json(lesson)
 }

 // get a single lesson 

 const getLesson = async (req,res) => { 
   const {id} = req.params

   if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: "Not found"})
   }
   
   const lesson = await AEC301.findById(id)
  if (!lesson) {
   return res.status(404).json({error: "Not found"})
 }
  res.status(200).json(lesson)
 }

 //delete lesson

 const deleteLesson = async (req, res) => {
   const {id} = req.params
   if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: "Not found"})
   }
   
   const lesson = await AEC301.findOneAndDelete({_id:id})
  if (!lesson) {
   return res.status(400).json({error: "Not found"})
 }
  res.status(200).json(lesson)
 }







module.exports = {
  getLesson,
  getLessons,
  deleteLesson,
  createLesson,  
}



















     

    