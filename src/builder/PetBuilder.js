class PetBuilder {

    static build(id, name, type, age){
        return  {
            id: id,
            name: name,
            type: type,
            age: age
        }
    }

}

export default PetBuilder;