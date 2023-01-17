const express = require("express")
const blogRouter = express.Router()

const Blog = require("../models/blog")

blogRouter.get('/bienvienida', (request, response) => {
    response.send("<h1>Hola :D</h1>")
})

blogRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
})
  
blogRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })

module.exports = blogRouter