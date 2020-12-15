var MongoDB = require('../dbm');
var ObjectID = require('mongodb').ObjectID;


class CitasModel{

    constructor(){
        this.collection = null
        MongoDB.getDb()
         .then (
           (db)=>{
             this.collection = db.collection("citas");
           }
        )
         .catch((ex)=>{
          throw(ex);
        });
      }

    async getAll(){
        try {
            
            let rslt = await this.collection.find().toArray();
            return rslt;
        } catch (ex) {
            throw(ex);
            
        }
    }

    async getFacetc(page, items, search){
      try{
        const searchExp = new RegExp(search);
        console.log(searchExp);
        const filter = (search == '')?{}: {"$or":[{"nombre": searchExp },{"telefono": searchExp } ,{"email": searchExp } ,{"fecha": searchExp } ,{"hora": searchExp } ]};
        let cursor = await this.collection.find(filter);
        let total = await cursor.count();
        cursor.skip((page-1) * items);
        cursor.limit(items);
        let rslt = await cursor.toArray();
        return {total, rslt};
      }catch(ex){
        throw (ex);
      }
    }
    async addOne(document){
        try {
            var result = await this.collection.insertOne(document);    
            return result;
        } catch (ex) {
            
            throw(ex);
        }
    }

    async updateById(id, nombre,telefono,correo,fecha,hora){
        try{
          const _id = new ObjectID(id);
          
          const updOps = {"$set":{"nombre":nombre, "telefono":telefono,"correo":correo, "fecha":fecha,"hora":hora}};
          let updDoc = await this.collection.findOneAndUpdate({ _id }, updOps, { returnOriginal:false});
          return updDoc;
        }catch(ex){
          throw(ex);
        }
      }

      async removeById(id) {
        try{
          const _id = new ObjectID(id);
          let rslt = await this.collection.deleteOne({_id});
          return rslt;
        }catch(ex){
          throw(ex);
        }
      }
      
      async getByAttibutes(attributes){
        try{
          let docs = await this.collection.find(attributes).toArray();
          return docs;
        }catch(ex){
          throw(ex);
        }
      }
}

module.exports = CitasModel;