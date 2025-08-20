module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/pubs', 
      handler: 'pub.find',

    },
    {
      method: 'GET',
      path: '/pubs/affordable', 
      handler: 'pub.findAffordable',

    }
  ]
};

    /*{
      method: 'GET',
      path: '/userv/passes/:userID/',
      handler: 'pass.getUserPasses',
      config: {
        policies: [],
        middlewares: [],
      },
    }*/