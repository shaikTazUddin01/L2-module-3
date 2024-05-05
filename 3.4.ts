{
    //instan of guard

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSOund() {
            console.log('i am making a sound');
        }
    }
    class Dog extends Animal {

        constructor(name: string, species: string) {
            super(name, species)
        }
        makeGhaw(){
            console.log('the bog is ghawing');
        }
    }

const isDOg=(animal:Animal): animal is Dog=>{
    return animal instanceof Dog;
}

    const getanimal=(animal:Animal)=>{
        
        if(isDOg(animal)){
            animal.makeGhaw()
        }
    }
    const dog=new Dog('dog vai',"dog")
    
    dog.makeGhaw()
    dog.makeSOund()

    // console.log(getanimal());
}