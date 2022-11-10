class PetBuilder {

    static build(id, name, petType, age){
        return  {
            id: id,
            name: name,
            petType: petType,
            age: age
        }
    }

}

export default PetBuilder;