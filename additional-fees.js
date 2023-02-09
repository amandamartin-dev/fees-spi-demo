import * as ecomAdditionalFees from 'interfaces-ecommerce-v1-additional-fees-provider';

/**
 * Get additional fees from all providers (implementers)
 * @param {import('interfaces-ecommerce-v1-additional-fees-provider').CalculateAdditionalFeesOptions} options
 * @param {import('interfaces-ecommerce-v1-additional-fees-provider').Context} context
 * @returns {Promise<import('interfaces-ecommerce-v1-additional-fees-provider').CalculateAdditionalFeesResponse>}
 */
export const calculateAdditionalFees = async (options, context) => {
    const additionalFees = [];

    const hasFragileItem = options.lineItems.some(item => item.productName.toLowerCase().includes('tea pot') || item.productName.toLowerCase().includes('tea glass'))

    if(hasFragileItem){
        additionalFees.push({
            code:'special-packaging',
            name:'Special Packaging',
            price:'2'
        })
    }
    return{
        additionalFees,
        currency:'USD'
    }
};
