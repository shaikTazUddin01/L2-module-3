"use strict";
{
    //polymorphosom
    class Person {
        getSleep() {
            console.log(`I am sleeping for  8 houres per day`);
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping for 7 houres per day`);
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 6 houres per day`);
        }
    }
    const getSleepingHours = (params) => {
        params.getSleep();
    };
    const Person1 = new Person();
    const Person2 = new Student();
    const Person3 = new Developer();
    getSleepingHours(Person1);
    getSleepingHours(Person2);
    getSleepingHours(Person3);
    class shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends shape {
        constructor(redius) {
            super();
            this.redius = redius;
        }
        getArea() {
            return Math.PI * this.redius;
        }
    }
    class ReactAngle extends shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const getAreaCal = (params) => {
        return params.getArea();
    };
    const Shape = new shape();
    const circle = new Circle(10);
    const reactAngle = new ReactAngle(20, 30);
    console.log(getAreaCal(Shape));
    console.log(getAreaCal(circle));
    console.log(getAreaCal(reactAngle));
}
