const express = require('express')
const router = express.Router()
const {getAllData, addData,singleData,delData,updateData}  = require('../controller/user')


router.get('/', getAllData)
router.post('/',addData)
router.get('/:id',singleData)
router.delete('/:id',delData)
// put for update method
router.put('/:id',updateData)


module.exports = router
