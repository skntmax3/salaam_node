const { axios, dotenv } = require('../../configs/importModules');
const strapiApis = require('../../configs/strapiApis');

dotenv.config({ path: '../../../.env' });

// const apiFetcher = async (options = {}) => {
//     try {
//         const { url, method = 'GET', headers = {}, params = {}, data = {} } = options;

//         const endpoint = Object.keys(strapiApis).find(n =>
//             strapiApis[n]?.endpoint === url && strapiApis[n]?.method === method
//         );

//         let requestHeaders = { ...headers };

//         if (endpoint) {
//             if (strapiApis[endpoint]?.authorization) {
//                 const { key, value } = strapiApis[endpoint].authorization;
//                 requestHeaders[key] = value;
//             } else {
//                 requestHeaders['Authorization'] = `Bearer ${process.env.NODE_API_TOKEN}`;
//             }
//         }

//         console.log(url, params, data)
//         const response = await axios({
//             url,
//             method,
//             headers: requestHeaders,
//             params,
//             data,
//         });

//         return response?.data;
//     } catch (err) {
//         console.error("Strapi API Error:", err?.response?.data || err.message);
//         throw err?.response?.data?.error || err?.response || err.message;
//     }
// };

// module.exports = apiFetcher;


const apiFetcher = async (options = {}) => {
    try {
        const { url, method = 'GET', headers = {}, params = {}, data = {} } = options;

        const endpoint = Object.keys(strapiApis).find(n =>
            strapiApis[n]?.endpoint === url && strapiApis[n]?.method === method
        );

        let requestHeaders = { ...headers };

        if (endpoint && strapiApis[endpoint]?.authorization) {
            const { key, value } = strapiApis[endpoint].authorization;
            requestHeaders[key] = value;
        } else {
            delete requestHeaders['Authorization']; // Ensure no auth header is sent
        }

        console.log(url, params, data);
        const response = await axios({
            url,
            method,
            headers: requestHeaders,
            params,
            data,
        });

        return response?.data;
    } catch (err) {
        console.error("Strapi API Error:", err?.response?.data || err.message);
        throw err?.response?.data?.error || err?.response || err.message;
    }
};

module.exports = apiFetcher;