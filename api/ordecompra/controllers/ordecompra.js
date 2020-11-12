'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */


const findOrden = async (idOrden) => {
    const {id}= idOrden.params;
    console.log(id);
   const result = await strapi.query('Ordecompra').find({'pagoid': id});
    
    return result;
  
  
  
    /*const result = await strapi.query('producto').model.query(cond => {
      cond.where('categoria', cat);
    }).fetch();
  
    return result.toJSON();
  */
  
  }

module.exports = {
    findOrden
};
