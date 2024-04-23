

const db= require('../Services/db')

const getAllProducts = ()=>{
    return db.product.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode : 200,
                    products: result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"can't get products"
                }
            }
        }
    )
}


const getAnProduct = (id)=>{
    return db.product.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Can't find the particular product"
                }
            }
        }
    )
}


const deleteProduct = (id)=>{
    return db.product.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:"deleted successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"product not exists"
                }
            }
        }
    )
}

module.exports={
    getAllProducts,
    getAnProduct,
    deleteProduct
}