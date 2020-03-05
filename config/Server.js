const express = require('express')
const ProductsController = require('../controllers/ProductsController')

class Server{

    constructor(){
        this.express = express()
        this.setMiddlewares()
        this.productsController = new ProductsController()
        this.setRouters()
        this.setRoutes()
        this.routers = []
    }



    setMiddlewares(){
        this.express.use(express.json())
        this.express.use(express.urlencoded({extended:true}))
    }

    setRouters(){
        this.productsRouter = express.Router()
        this.productsRouter.get('/',this.productsController.getProducts)
    }

    setRoutes(){
        this.express.use('/',this.productsRouter)
    }

    listen(port){
        this.express.listen(port)
        console.log(`Node server running on port ${port}`)
    }

}

module.exports = Server