import BathTypesList from '../models/BathTypesList.js';
import HairCareTypesList from '../models/HairCareTypesList.js';

export default class WorkListFactory{

    static instance(code){
        switch(code){
            case 1: return BathTypesList.getList();
            case 2: return HairCareTypesList.getList();
            default: return [];
          }
    }
 }