import axios from "axios";

function NewsRest(params) {
    var apiKey = 'ee181d0048dd4102aea2540348936904';
    var ApiURL = 'https://newsapi.org/v2/top-headlines';
    return axios.get(ApiURL, {
        params: {
            ...params,
            apiKey: apiKey,
        },
    });

}

export default NewsRest;