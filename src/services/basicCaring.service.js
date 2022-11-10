import axios from 'axios'
import WorkListFactory from '../factories/WorkListFactory';
import WorkOptionsList from '../models/WorkOptionsList.js';

export default class BasicCaringService {

  baseUrl = 'http://localhost:3010/petstore/pets';
  bathUrl = "bath"
  hairCareUrl = "hair";
  workOptions = [];
  hairCareTypes = [];
  bathTypes = [];
 
  constructor() { 
    this.loadWorkOptions();
  }

  getWorkOptions(){
    return this.workOptions;
  }

  getWorks(serviceCode){
    return WorkListFactory.instance(serviceCode);
  }

  executeWork(basicServiceCode, petId, serviceCode){
    if(basicServiceCode === 1){
      return this.doBath(petId, serviceCode);
    }else if(basicServiceCode === 2){
      return this.doHairCare(petId,serviceCode);
    }
  }

  doBath(petId, serviceCode){
    return axios.put(`${this.baseUrl}/${this.bathUrl}`, {petId: petId, serviceCode: serviceCode });
  }

  doHairCare(petId, serviceCode){
    return axios.put(`${this.baseUrl}/${this.hairCareUrl}`, {petId: petId, serviceCode: serviceCode });
  }

  loadWorkOptions(){
    this.workOptions = WorkOptionsList.getList();
  }
}
