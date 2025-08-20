'use strict';

module.exports = ({ strapi }) => ({
  async getAffordablePubs({maxPrice, sortOrder}) {
    try {
      const affordablePubs = await strapi.entityService.findMany('api::pub.pub', {
        filters: {
          avgPrice: {
            $lte: maxPrice
          }
        },
        populate: ['picture'],
        sort: { avgPrice: sortOrder === 'asc' ? 'asc' : 'desc' }
      });
      return affordablePubs;
    } catch (err) {
      strapi.log.error('Error in getAffordablePubs service:', err);
      throw err;
    }
  },

  async find(params) {
    return strapi.entityService.findMany('api::pub.pub', params);
  }
});