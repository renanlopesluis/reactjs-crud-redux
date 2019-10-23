class PetTypeBuilder {

    static build(id, description=null){
        return {
            id: id,
            description: description
        }
    }

}

export default PetTypeBuilder;