const express = require("express");
let router = express.Router();


const ServiciosModel = require('../../models/servicios/servicios.model');
const mdbServiciosModel = new ServiciosModel();


router.get('/all', async (req, res)=>{
    try{
      const rslt = await mdbServiciosModel.getAll()
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({"msg":"Algo Paso Mal."});
    }
  
  });

  router.post('/nuevo', async (req, res)=>{
    try{
      let { nombre,precio,duracion} = req.body;
      
      duracion = duracion.toLowerCase();
      var rslt = await mdbServiciosModel.addOne({ nombre,precio,duracion}); 
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
});

router.delete('/delete/:id',async (req, res)=>{
    let {id} = req.params;
    try{
      let rslt = await mdbServiciosModel.removeById(id);
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

  router.get('/facet/:page/:items', async (req, res) => {
    try {
      const {page, items} = req.params;
      const rslt = await mdbServiciosModel.getFacet(Number (page), Number(items), '');
      res.status(200).json(rslt);
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });
  router.get('/facetc/:page/:items', async (req, res) => {
    try {
      const {page, items} = req.params;
      const rslt = await mdbServiciosModel.getFacetc(Number (page), Number(items), '');
      res.status(200).json(rslt);
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

  

  router.get('/facet/:page/:items/:search', async (req, res) => {
    try {
      const { page, items, search } = req.params;
      const rslt = await mdbServiciosModel.getFacet(Number(page), Number(items), search);
      res.status(200).json(rslt);
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });
  
  router.put('/update/:id', async (req, res)=>{
    try{
      let {id} = req.params;
      let {nombre,precio,duracion} = req.body;
      let rslt = await mdbServiciosModel.updateById(id,nombre,precio,duracion);
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

  router.get('/nombre/:nombreid', async(req, res)=>{
    try{
      const { nombreid } = req.params;
      let rsltset = await mdbServiciosModel.getByAttibutes({nombre: nombreid});
      res.status(200).json(rsltset);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

  router.put('/category/add/:id', async (req, res) => {
    try {
      let { id } = req.params;
      let { category } = req.body;
      let rslt = await mdbServiciosModel.addCategorySet(id, category);
      res.status(200).json(rslt);
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

  module.exports = router;