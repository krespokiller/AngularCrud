//CRUD

const controller ={};


controller.GetSellers = (req,res) =>{
res.send('get all sellers')
}

controller.GetSeller = (req,res) =>{
    res.send('get a seller')
}

controller.CreateSeller = (req,res) =>{
    res.send('create a seller')
}

controller.UpdateSeller = (req,res) =>{
    res.send('update a seller')
}

controller.DeleteSeller = (req,res) =>{
    res.send('delete a seller')
}




module.exports=controller