import CrudService from './crud.service.js';

class PetService extends CrudService{

    constructor(){
        super('pets');
    }

}

export default PetService;