//Rutas a las que se accede de la api
const {Router}= require('express');
const router = Router();
//controlador (funciones que usan las rutas)
const controller = require('../controllers/controller')

router.post("/add",controller.CreateSeller)

router.get("/all",controller.GetSellers)

router.get("/get/:id",controller.GetSeller)

router.put("/update/:id",controller.UpdateSeller)

router.delete("/delete/:id",controller.DeleteSeller)

module.exports = router