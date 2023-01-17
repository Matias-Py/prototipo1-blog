const express = require ("express")
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(express.static('build'))
const cors = require('cors')
app.use(cors())
const blogRouter = require('./controller/rutas')
const mongoose = require("mongoose")
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')


const connectionString = process.env.MONGODB_URI
mongoose.connect(connectionString,{
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then( ()=> {
		logger.info("Devolviendo la base de datos")
	}).catch(err => {
		logger.error(err)
	})

//Aca estan los archivos de la carpeta untis
app.use('/api/blogs', blogRouter) // "/api/persons" => Vendria a ser como la ruta de inicio sobre la cual va a trabajar notesRouter por eso ahora en rutas la direccion esta acortada
app.use(middleware.errorHandler)
app.use(logger.info)
app.use(logger.error)
module.exports = app