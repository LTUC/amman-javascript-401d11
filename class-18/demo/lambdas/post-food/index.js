const uuid = require('uuid').v4;
const FoodSchema = require('./food-schema');

exports.handler = async(event)=> {
   try {
        const {name, calories} = JSON.parse(event.body);
        const id = uuid();
        let obj = new FoodSchema({id, name, calories});
        let newObject = await obj.save();
       
        return {
            statusCode: 200,
            body: JSON.stringify(newObject)
        }
   } catch(e) {
        return {
            statusCode: 500,
            err: e.message
        }
   }
   
}