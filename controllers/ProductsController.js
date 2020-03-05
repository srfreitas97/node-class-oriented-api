

class ProductController{

    getProducts(req,res,next){

        res.send(['guitar','keyboard','bass'])
    
    }

}

module.exports = ProductController