
var express = require("express")
var router = express.Router();
//let client= require("../dbConnect");
let controller = require("../controller")


//post api
router.post('/',(req,res) => {
    controller.projectController.createProjects(req,res)

    // console.log("New Project added", req.body)
    // var newproject = req.body;

    // insertProjects(newproject,(err,result)=> {
    //     if (err){
    //         res.json({statusCode: 400,message: err})
    //     }
    //     else{
    //         res.json({statusCode: 200, message:"project successfully added", data: result})
    //     }
    //     })
    
    })


router.get('/',(req,res) => {

    controller.projectController.retrieveProjects(req,res)
    //     getProjects((err, result)=> {
//     if (err){
//         res.json({statusCode: 400,message: err})
//     }
//     else{
//         res.json({statusCode: 200, message:"success", data: result})
//     }
//     })

})


    module.exports = router;
