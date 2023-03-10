const mongoose = require("mongoose")
const express = require('express')
const {model,Schema} = mongoose
const app = express()

const blogSchema = new Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

blogSchema.set('toJSON', {
	transform: (document, returnedObject) => {
	  returnedObject.id = returnedObject._id.toString()
	  delete returnedObject._id
	  delete returnedObject.__v
	}
})

module.exports = model('Blog', blogSchema)