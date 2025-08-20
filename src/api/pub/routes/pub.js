
const { createCoreRouter } = require('@strapi/strapi').factories;
module.exports = {
  routes: [
    {
      method: 'GET',
      path: 'api/pubs', 
      handler: 'pub.find',
    }
  ]
};
