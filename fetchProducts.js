require("dotenv").config()
const convertToUniverse = require('./convertPlaceToUniverse');

const fetchProducts = async (placeId) => {
    try {
        const universeId = await convertToUniverse(process.env.placeId);

        let finalData = [];
        let doing = true;
        let page = 1;
        
        while (doing) {
            const foundData = await fetch(
                `https://apis.roblox.com/developer-products/v1/developer-products/list?universeId=${universeId}&page=${page}`, 
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            const idk = await foundData.json()

            if (idk.errorMessage) {
                console.error(`Error while fetching developer products: ${JSON.stringify(idk.errorMessage)}`)
            }

            const json = idk.DeveloperProducts

            if (!json) continue;
            if (json.length === 0) {
                doing = false;
                break;
            }

            finalData.push(...json);

            page++;
        }

        return finalData.map(product => ({...product, placeId}));
    } catch (error) {
        console.log(`error: ${error}`)
    }
};

module.exports = fetchProducts;