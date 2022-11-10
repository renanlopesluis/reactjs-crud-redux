import CrudService from './crud.service.js';

class PetTypeService extends CrudService{

    constructor(){
        super('petType');
    }
}

export default PetTypeService;