const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
//ROUTES
const userRoute = require('./routes/user')
const postRoute = require('./routes/post')

const app = express()
app.use(bodyparser.json())
app.use(cors())
app.use('/api/user', userRoute)
app.use('/api/post', postRoute)


 

//If in production mode 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const port = process.env.PORT || 8080;
app.listen(port, () =>  {
    mongoose.connect('mongodb+srv://admin:admin@cluster0-bcoum.gcp.mongodb.net/dockerBlog?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Server connected on port' + port)
})