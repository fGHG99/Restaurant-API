const { Menu } = require('../models')

const findAllMenu = async (req, res) => {
    try {
        const data= await Menu.findAll()
        
        const result = {
            status: 'ok',
            data: data
        }

        res.json(result)
    } catch (error) {
        console.log(error, 'Error find all Menu')
    }
}

const createNewMenu = async (req, res) => {
    try {
        const{name, description, price} = req.body

        const newMenu = await Menu.create({
            name:name,
            description:description,
            price:price
        })

        res.status(201).json({
            status:'ok',
            data: {
                id: newMenu.id,
                name: newMenu.name,
                description: newMenu.description,
                price: newMenu.price
            }
        })
    } catch (error) {
        console.log(error, 'error cannot creat new book')
    }
    // //mendapatkan id baru
    // const lastItemMenuId = menu[menu.length - 1].id
    // const newIdMenu = lastItemMenuId + 1

    //menambahkan menu
    // const newMenuData = {id: newIdMenu, name:name, description:description, price:price}
    // menu.push(newMenuData)

    // res.status(201).json({ status: 'ok', message: 'berhasil menambahkan data menu baru', data: newMenuData})
}

module.exports = {findAllMenu, createNewMenu}