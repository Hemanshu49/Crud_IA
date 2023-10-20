const express = require("express");
const users = require("../model/userSchema");
const router =express.Router();

 router.get("/" , (req, res) =>{
    res.send("hello wolrd fro m the server");     
});

router.post('/register', async(req, res) =>{
   // console.log(req.body);
   const {name , email , age, mobile ,work , add , desc} = req.body;

   if (!name || !email || !age || !mobile || !work || !add || !desc){
    res.status(422).json("plz filled the filed")
   }
   
   try{
    const userExist = await users.findOne({email:email});
    if (userExist){
        return res.status(422).json({error:"Email Exist"});
    }
    
    const adduser= new users({name , email ,age , mobile , work , add, desc});
    await adduser.save();
    res.status(201).json({message:"user resigter"});

}catch(err){
    console.log(err);
}

})

router.get("/getdata" , async(req , res ) =>{
    try{
         const userdata = await users.find();
         res.status(201).json(userdata)
         console.log(userdata);
    }catch (error) { 
        res.status(422).json(error);
    }
})

router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;