import axios from 'axios'
export default class CrudService {
    urls = [];
    
    constructor(urls){
        this.urls = urls;
    }
    
    baseUrl = 'http://localhost:8080/petstore/';

    list(){
        return fetch(this.baseUrl.concat(this.urls[1]));
    }

    save(pet){
        return axios.post(this.baseUrl.concat(this.urls[0]), pet);
    }

    remove(id){
        return axios.delete(this.baseUrl.concat(this.urls[0]), {params:{id: id }});
    }

}