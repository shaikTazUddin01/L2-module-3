"use strict";
{
    //instan of guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSOund() {
            console.log('i am making a sound');
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeGhaw() {
            console.log('the bog is ghawing');
        }
    }
    const dog = new Dog('dog vai', "dog");
    dog.makeGhaw();
    dog.makeSOund();
}
