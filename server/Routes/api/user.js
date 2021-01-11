const express = require ('express');
const router = express.Router()
const user = require ('../../User');

//Get all user
router.get('/', (req,res) => {
    res.json(user)
})

//Get single user
router.get('/:id', (req,res) => {
    let id = parseInt(req.params.id)
    console.log(id)
    let result = user.filter((item) => item.id == id)
    res.json(result[0])
})
module.exports = router