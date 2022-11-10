export default class RestService {

    baseUrl = 'http://localhost:3010/petstore';
    url = '';
    constructor(url){
       this.url = url;
    }

    getUrl(){
        return `${this.baseUrl}/${this.url}`;
    }
    
    getBaseUrl(){
        return this.baseUrl;
    }

}