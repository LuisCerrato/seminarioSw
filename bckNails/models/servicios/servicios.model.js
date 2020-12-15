var MongoDB = require('../dbm');
var ObjectID = require('mongodb').ObjectID;

class ServiciosModel{
    constructor(){
        this.collection = null
        MongoDB.getDb()
         .then (
           (db)=>{
             this.collection = db.collection("servicios");
           }
        )
         .catch((ex)=>{
          throw(ex);
        });
      }

      async getAll(){
        try {
            let rslts = await this.collection.find({}).toArray();
            return rslts;
            
        } catch (ex) {
        
            throw(ex);
        }
        
    }

    async getFacet(page, items, search){
      try{
        const searchExp = new RegExp(search);
        console.log(searchExp);
        const filter = (search == '')?{}: {"$or":[{"nombre": searchExp },{"precio": searchExp } ]};
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

    async removeById(id){

        try {
            const _id = new ObjectID(id);
            let rslt = await this.collection.deleteOne({_id});
            return rslt;
        } catch (ex) {
            throw(ex);
            
        }
    }

    async updateById(id, nombre,precio,duracion){
        try{
          const _id = new ObjectID(id);
          const updOps = {"$set":{"nombre":nombre, "precio":precio, "duracion":duracion}};
          let updDoc = await this.collection.findOneAndUpdate({ _id }, updOps, { returnOriginal:false});
          return updDoc;
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

      
      async addCategorySet(id, category){
        try {
          let _category = category.toLowerCase();
          const UpdOps = {"$addToSet": {categories: _category}};
          const _id = new ObjectID(id);
          let updDoc = await this.collection.findOneAndUpdate({ _id }, UpdOps, { returnOriginal: false});
          return updDoc;
        }catch(ex){
          throw(ex);
        }
      }


    

    

}

module.exports = ServiciosModel;