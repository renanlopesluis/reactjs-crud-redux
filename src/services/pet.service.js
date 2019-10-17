import CrudService from './crud.service.js';

class PetService extends CrudService{

    constructor(){
        super(['pet', 'pets']);
    }
}

export default PetService;