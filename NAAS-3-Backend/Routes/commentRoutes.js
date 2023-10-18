const express = require('express')
const mongoose = require('mongoose')

const {createComment,
    deleteComment,
    getComments,
   
   
} = require ('../Controller/commentController')

const router = express.Router()




router.post('/addcomment', createComment)
router.get('/', getComments)
router.delete('/:id', deleteComment)


 

module.exports= router
