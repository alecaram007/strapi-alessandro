'use strict';

module.exports = ({ strapi }) => ({
  async getAffordablePubs(params) {
    const maxPrice = params.maxPrice
    const sortOrder = params.sortOrder

    try {
        const pubs = await strapi.entityService.findMany('api::pub.pub', {
            filters: {
                avgPrice: {
                    $lte: maxPrice
                }
            },
            sort: {
                avgPrice: sortOrder === 'asc' ? 'asc' : 'desc'
                
            },
            populate: ['picture']
        })

        return pubs


    } catch (e) {
        strapi.log.error('error in getAffordablePubs service', e)
        throw e
    }

}


  
});