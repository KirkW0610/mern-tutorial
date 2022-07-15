const express = require('express');
const {errorHandler} = require('./middleware/errorMiddleware')
const port  = 5000;


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server listening on port ${port}`))