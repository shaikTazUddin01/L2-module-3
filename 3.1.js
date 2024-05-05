{
    var Animal = /** @class */ (function () {
        function Animal(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        return Animal;
    }());
    var dog = new Animal("German shepared", "dog", "shepaed gaw");
    console.log(dog);
}
