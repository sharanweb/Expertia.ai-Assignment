const express = require("express");

const Product = require("../models/job.model");

const router = express.Router();



// router.get("/", async(req, res) => {
//     try {
//         let page = req.query.page || 1
//         let pagesize = req.query.pagesize || 5
//         let role = req.query.role
//         let experience = req.query.experience
//         let location = req.query.location
        
//         const skip = (page-1) * pagesize;

//         if(role !== "all" && tag !== "all"){

//             const product=await Product.find({$and: [{brand:{$eq:brand}}, {tag: {$eq: tag}}]}).skip(skip).limit(pagesize).sort({price:price}).lean().exec()
//             const total_pages=Math.ceil((await Product.find({brand:{$eq:brand}}).countDocuments())/pagesize)
//             return res.send({product, total_pages})
//         }
//         else if(tag !== "all" && brand == "all"){
//             const product=await Product.find({tag: {$eq: tag}}).skip(skip).limit(pagesize).sort({price:price}).lean().exec()
//             const total_pages=Math.ceil((await Product.find({tag:{$eq:tag}}).countDocuments())/pagesize)
//             return res.send({product, total_pages})
//         }
//         else if(tag == "all" && brand !== "all"){
//             const product=await Product.find({brand: {$eq: brand}}).skip(skip).limit(pagesize).sort({price:price}).lean().exec()
//             const total_pages=Math.ceil((await Product.find({brand:{$eq:brand}}).countDocuments())/pagesize)
//             return res.send({product, total_pages})
//         }
//         else{
//             const product = await Product.find().skip(skip).limit(pagesize).lean().exec()
//             const total_pages = Math.ceil((await Product.find().sort({price:price}).countDocuments())/pagesize)
          
//             return res.send({product, total_pages})
//         }
//     } 
//     catch (error) {
//         res.send(error)
//     }
// })




module.exports = router;