'use strict';

/**
 *  order controller
 */

const midtransClient = require('midtrans-client')

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async generateMidtransToken(ctx) {
        try {
            let snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: 'SB-Mid-server-vabk_fkwLxXNfI6e47HoGbkK',
                clientKey: 'SB-Mid-client-K_-q_FnH1So2YVk8'
            });
            let errResponse = ''
            let snapDetail = await snap.createTransaction(ctx.request.body).catch((e) => {
                errResponse = e.ApiResponse.error_messages
                return null
            })
            if (snapDetail) {
                ctx.body = snapDetail
            } else {
                ctx.body = {
                    message: errResponse
                }
            }
        } catch (err) {
            ctx.body = err;
        }
    }
}));
