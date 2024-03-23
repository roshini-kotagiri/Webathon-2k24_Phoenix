const exp=require('express')
const adminApp=exp.Router()
// const bcryptjs=require("bcryptjs")
const expressAsyncHandler=require('express-async-handler')

let admincollectionobj;
adminApp.use((req,res,next)=>{
    admincollectionobj=req.app.get('admincollection')
    next()
})
adminApp.use(exp.json());
    
    adminApp.get('/user',expressAsyncHandler(async(req,res)=>{
        const artclesList=await admincollectionobj.find().toArray()
        res.send({message:"List of atricles",payload:artclesList})
    
    }))

adminApp.post('/new-user',expressAsyncHandler(
    async(req,res)=>{
        const newuser=req.body;
        const dbuser=await admincollectionobj.findOne({username:newuser.username})
        if(dbuser!==null){
            res.send({message:"username already taken"})
        }else{
            // const hashedpassword=await bcryptjs.hash(newuser.password,6)
            // newuser.password=hashedpassword;
            await admincollectionobj.insertOne(newuser)
            res.send({message:"user created"})
        }
    }
));
adminApp.put("/user",async(req,res)=>{
    let modifiesuser=req.body;
    let dbres=await admincollectionobj.updateOne({name:modifiesuser.name},{$set:{...modifieduser}}
        )
        res.send("user modified")
})
module.exports= adminApp;