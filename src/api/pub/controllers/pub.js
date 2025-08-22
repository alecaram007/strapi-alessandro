
'use strict';

const { filter } = require('../../../../config/middlewares');

const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::pub.pub', ({ strapi }) => ({

    async find(ctx) {
        let result  = await strapi.entityService.findMany('api::pub.pub', {populate: '*'});
        return result
    },
        


    async findAffordable(ctx) {
    try {


        const maxPrice = ctx.query.maxPrice ? parseFloat(ctx.query.maxPrice) : 1
        const sortOrder = ctx.query.sort ? ctx.query.sort : 'asc'

        const pubs = await strapi.service('api::pub.pub').getAffordablePubs({
            maxPrice: maxPrice,

            sortOrder: sortOrder
        })

        ctx.body = pubs
        
    } catch (e) {
        ctx.status = 500
        ctx.body = {
            error: "Internal Server Error",
            message: e.message
        }
    }
}

}
)
);
