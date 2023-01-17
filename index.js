const app = require('./app')
const config = require("./utils/config")
require('dotenv').config()

const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
