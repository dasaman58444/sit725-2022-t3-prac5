

var express = require("express")
var app = express()
var cors = require ('cors')
let projectCollection; 
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/projects', projectRoutes)


// //mongo db connection..

// const Mongoclient = require ('mongodb').MongoClient;

// //database conn
// const uri = 'mongodb+srv://aman:aman@cluster0.kqd3owj.mongodb.net/?retryWrites=true&w=majority'
// const client = new Mongoclient (uri, {useNewUrlParser: true})


// //insert project
// const insertProjects = (project,callback) => {
//     projectCollection.insert(project,callback);
// }
// // get projects
// const getProjects =(callback) =>{
//     projectCollection.find({}).toArray(callback);
// }



// // const createCollection = (collectionName) => {
// //     client.connect((err,db) => {
// //       projectCollection = client.db().collection(collectionName);
// //        if (!err){
      
// //         console.log('MongoDb Connected')
// //        }
// //        else {
// //         console.log("DB Error: ", err);
// //         process.getMaxListeners(1);

// //        }

    
        
// //     } )
// // }





// app.get('/api/projects',(req,res) => {
//     getProjects((err, result)=> {
//     if (err){
//         res.json({statusCode: 400,message: err})
//     }
//     else{
//         res.json({statusCode: 200, message:"success", data: result})
//     }
//     })

// })
// //post api
// app.post('/api/projects',(req,res) => {
//     console.log("New Project added", req.body)
//     var newproject = req.body;

//     insertProjects(newproject,(err,result)=> {
//         if (err){
//             res.json({statusCode: 400,message: err})
//         }
//         else{
//             res.json({statusCode: 200, message:"project successfully added", data: result})
//         }
//         })
    
//     })


var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: http://localhost: "+port)
    // createCollection ("vit")
}
)
