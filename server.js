const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
//ROUTES
const userRoute = require('./routes/user')
const postRoute = require('./routes/post')

const app = express()
app.use(bodyparser.json())
app.use('/api/user', userRoute)
app.use('/api/post', postRoute)

app.post('/', (req, res) => {
    res.json('ntm')
})

 

//If in production mode 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server connected on port' + port))