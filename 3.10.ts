{
    //interface
    interface Vehicale1 {
        startEngine(): void
        stopEngine(): void
        move(): void
    }

    class car implements Vehicale1 {

        startEngine(): void {
            console.log('i am starting the engine');
        }
        stopEngine(): void {
            console.log('i am stoping the engine');
        }
        move(): void {
            console.log('i am moving the car');
        }
        test() {
            console.log('this is testing method');
        }
    }
    const toyta = new car();

    toyta.startEngine()
    toyta.stopEngine()

    //abstract class
    abstract class Car2 {

        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void

    }


    class ToytoCar extends Car2 {
        startEngine(): void {
            console.log('start enging');
        }
        stopEngine(): void {
            console.log('moving');
        }
        move(): void {
            console.log('moving');
        }
    }
    const honda = new ToytoCar()
    console.log(honda.startEngine);
}