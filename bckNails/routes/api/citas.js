const express = require("express");
let router = express.Router();

const CitasModel = require('../../models/citas/citas.model');
const mdbCitasModel = new CitasModel();

router.get('/all', async (req, res)=>{
    try{
      const rslt = await mdbCitasModel.getAll()
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({"msg":"Algo Paso Mal."});
    }
  
  });
  router.get('/facetc/:page/:items', async (req, res) => {
    try {
      const {page, items} = req.params;
      const rslt = await mdbCitasModel.getFacetc(Number (page), Number(items), '');
      res.status(200).json(rslt);
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

  router.post('/nuevacita', async (req, res)=>{
    try{
      let { nombre,telefono,email,fecha,hora} = req.body;
      
      var rslt = await mdbCitasModel.addOne({ nombre,telefono,email,fecha,hora}); 
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
});

router.put('/upd/:id', async (req, res)=>{
    try{
      let {id} = req.params;
      let {nombre,telefono,email,fecha,hora} = req.body;

      let rslt = await mdbCitasModel.updateById(id,nombre,telefono,email,fecha,hora);
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

  router.delete('/del/:id',async (req, res)=>{
    let {id} = req.params;
    try{
      let rslt = await mdbCitasModel.removeById(id);
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
   
  });

module.exports = router;