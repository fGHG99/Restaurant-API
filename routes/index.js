const { findAllMenu, createNewMenu } = require('../controller/menuController')
const router = require('express').Router()

router.get('/menus', findAllMenu)
router.post('/createmenu', createNewMenu)
module.exports = router