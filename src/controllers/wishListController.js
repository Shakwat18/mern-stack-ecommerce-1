const { createWishlistService, findWishListService, deleteWishListService } = require("../services/wishListServices")

const createWishList=async(req,res)=>{
    const result = await createWishlistService(req)
    res.status(200).json(result)
}

const findWishList=async(req,res)=>{
    const result = await findWishListService(req)
    res.status(200).json(result)
}
const deleteWishList=async(req,res)=>{
    const result = await deleteWishListService(req)
    res.status(200).json(result)
}



module.exports= {createWishList,findWishList,deleteWishList}