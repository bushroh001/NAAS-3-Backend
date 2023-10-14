const express = require('express')
const mongoose = require('mongoose')

const {
    createLesson,
    deleteLesson,
    getLessons,
    getLesson,
   
} = require ("../Controller/ANS301Controller")

const router = express.Router()




router.post('/add', createLesson)
router.get('/', getLessons)
router.get('/:id', getLesson)
router.delete('/:id', deleteLesson)


 

module.exports= router
