const express = require ('express')
var cors = require('cors')
const path = require ('path')
const bodyParser = require ('body-parser')
// const user = require('./User')
const {resolveSoa} = require('dns')
const app = express();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended : true}))

app.listen(PORT,(req,res) => {
    console.log('serving is running at port', PORT )
})
app.use('/api/user', require('./Routes/api/user'))
