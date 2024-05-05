{
    class Animal {
        // name: string;
        // species: string;
        // sound: string;

        constructor(public name: string,public species: string,public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound(){
            console.log(`the ${this.name} says ${this.sound}`);
        }

    }

    const dog = new Animal("German shepared", "dog", "shepaed gaw")
    const cat= new Animal ("partian","cat","maw")

    cat.makeSound()
    dog.makeSound()

    
}
