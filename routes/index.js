const { findAllMenu, createNewMenu } = require('../controller/menuController')
const router = require('express').Router()

router.get('/menu', findAllMenu)
router.post('/menu', createNewMenu)
module.exports = router