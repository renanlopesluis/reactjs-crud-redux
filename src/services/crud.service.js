import axios from 'axios'
import RestService from './rest.service.js';

export default class CrudService extends RestService{
    
    constructor(url){
        super(url);
    }

    list(){
        return fetch(super.getUrl());
    }

    get(id){
        return axios.get(`${super.getUrl()}/${id}`);
    }

    search(name){
        return axios.get(super.getUrl(), {params:{name: name }});
    }

    save(entity){
        if(entity.id)
            return this.update(entity);
        else
            return this.insert(entity);
    }

    insert(entity){
        return axios.post(super.getUrl(), entity);
    }

    update(entity){
        return axios.put(super.getUrl(), entity);
    }

    remove(id){
        return axios.delete(`${super.getUrl()}/${id}`);
    }

}