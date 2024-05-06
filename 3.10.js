"use strict";
{
    class car {
        startEngine() {
            console.log('i am starting the engine');
        }
        stopEngine() {
            console.log('i am stoping the engine');
        }
        move() {
            console.log('i am moving the car');
        }
        test() {
            console.log('this is testing method');
        }
    }
    const toyta = new car();
    toyta.startEngine();
    toyta.stopEngine();
    //abstract
}
