const Crp304Routes = require("./Routes/Crp304Routes")
const Crp405Routes = require("./Routes/Crp405Routes")
const Crp511Routes = require("./Routes/Crp511Routes")
const Crp305Routes = require("./Routes/Crp305Routes")
const Crp512Routes = require("./Routes/Crp512Routes")
const Cpt503Routes = require("./Routes/Cpt503Routes")





const express = require("express")
require("dotenv").config()
const mongoose = require('mongoose')
const bp = require('body-parser')
const cors =require("cors") 

const app = express()

app.use(bp.json({limit:'15mb'}))
app.use(bp.urlencoded({ extended: true, limit :'15mb' }))

app.use(cors());
 const PORT= 4000
app.use((req,res, next) => {
   console.log(req.path , req.body ,req.method , res.body, req.file)
   next()
})





mongoose.set('strictQuery', false);
const connectDB = async ()=> {
   try{
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`Mongodb connected :${conn.connection.host}`);

   } catch (error){
      console.log(error);
      process.exit(1);
   }
}

 
app.use("/api/crp304", Crp304Routes)
app.use("/api/crp405", Crp405Routes)
app.use("/api/crp511", Crp511Routes)
app.use("/api/crp512", Crp512Routes)
app.use("/api/crp305", Crp305Routes)
app.use("/api/cpt503", Cpt503Routes)





connectDB().then(()=> {
   app.listen(PORT, ()=> {
      console.log(`listening on port ${PORT}`)
   })
});