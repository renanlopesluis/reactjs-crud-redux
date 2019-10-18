import axios from 'axios'

export default class CrudService {

    baseUrl = 'http://localhost:8080/petstore/';
    urls = [];
    
    constructor(urls){
        this.urls = urls;
    }

    list(){
        return fetch(this.baseUrl.concat(this.urls[1]));
    }

    get(id){
        return axios.get(this.baseUrl.concat(this.urls[0]), {params:{id: id }});
    }

    save(entity){
        if(entity.id)
            return this.update(entity);
        else
            return this.insert(entity);
    }

    insert(entity){
        return axios.post(this.baseUrl.concat(this.urls[0]), entity);
    }

    update(entity){
        return axios.put(this.baseUrl.concat(this.urls[0]), entity);
    }

    remove(id){
        return axios.delete(this.baseUrl.concat(this.urls[0]), {params:{id: id }});
    }

}