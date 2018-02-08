import { orderBy } from "lodash";
import {
    _api_key,
    language,
    category, 
    articles_url
} from '../config/rest_config';

export async function getArticles() {
    try {
        return fetch(`https://newsapi.org/v2/top-headlines
        ?api-key=bd08d8d50f834c65b2667d7d733ef50f&language=en`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            return orderBy(result.articles, 'publishedAt', 'desc')
        })
        //let articles = await fetch(`https://newsapi.org/v2/top-headlines
        //?api-key=bd08d8d50f834c65b2667d7d733ef50f&language=en`, {
        
        //let articles = await fetch(`${articles_url}?language=${language}&api-key=${_api_key}`, {
            //header: {
              //  'X-API-KEY': _api_key
            //}
        //});
        let result = await articles.json();
        articles = null;

        return orderBy(result.articles, 'publishedAt', 'desc');

    } catch (error) {
        Alert.alert(JSON.stringify("Something happened, please try again"))
        throw error
    }
}