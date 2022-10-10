const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

var api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3"
});

export default async function handler(req, res){
    const responseData = {
        success: false,
        products: [],
        number: 0
    }
    const { slug } = req?.query ?? {} 
    try{
        const idBySlug = await api.get('products/categories', { slug })
        
        const { data } = await api.get(
            'products',
            {
                category: idBySlug.data[0].id
            }
        );
        responseData.success = true;
        responseData.products= data;
        responseData.number = data.length
        res.json(responseData);
    }catch(error){
        responseData.error = error.message;
        res.status(500).json(responseData)
    }
}