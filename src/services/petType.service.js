import CrudService from './crud.service.js';

class PetTypeService extends CrudService{

    constructor(){
        super(['petType', 'petType']);
    }
}

export default PetTypeService;