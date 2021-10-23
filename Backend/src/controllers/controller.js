//CRUD

const controller ={};

const Seller = require('../models/sellers')

controller.GetSellers = async(req,res) =>{
    const sellers = await Seller.find()
    res.json(sellers)
}

controller.GetSeller = async(req,res) =>{
    const seller = await Seller.findById(req.params.id)
    res.send(seller)
}

controller.CreateSeller = async(req,res) =>{
    const newseller = new Seller(req.body)
    await newseller.save()
    res.send({message: "Seller Created"})
}

controller.UpdateSeller = async(req,res) =>{
    await Seller.findByIdAndUpdate(req.params.id, req.body)
    res.send({message: "Seller Updated"})
}

controller.DeleteSeller = async(req,res) =>{
    await Seller.findByIdAndDelete(req.params.id)
    res.send({message: "Seller Deleted"})
}




module.exports=controller