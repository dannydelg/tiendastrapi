'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */



const findCategory = async (categoria) => {
  const {cat}= categoria.params;
  console.log(cat);
 const result = await strapi.query('producto').find({'categoria': cat});
  
  return result;



  /*const result = await strapi.query('producto').model.query(cond => {
    cond.where('categoria', cat);
  }).fetch();

  return result.toJSON();
*/

}






module.exports = {  
    
    findCategory
   

};
