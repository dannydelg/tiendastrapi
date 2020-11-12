'use strict';

const { default: createStrapi } = require("strapi");
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */


const sendEmail = async (ctx) => {
    const {mail}= ctx.params;
    console.log('llego al sende function ' + mail);
   
    await strapi.plugins['email'].services.email.send({
      to: "danny_gdo@hotmail.com",
      from: "danny_gdo@hotmail.com",
      replyTo: "danny_gdo@hotmail.com",
      subject: "Prueba",
      text: "enviado desde estrapi"
    });
    ctx.send("Email enviado!");
  }


module.exports = {
    sendEmail
};
