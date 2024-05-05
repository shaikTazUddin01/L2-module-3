"use strict";
{
    //oop - inheritence
    //parent
    class Parent {
        constructor(name, age, address) {
            this.namepro = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.namepro} will sleep for ${numOfHours}`);
        }
    }
    //for student
    class Student extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("mr. x", 20, "Uganda");
    student1.getSleep(8);
    //for teacher
    class Teacher extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.namepro} will sleep for ${numOfClass}`);
        }
    }
    const teacher = new Teacher("mr. y", 20, "Uganda", "X");
    teacher.takeClass(8);
}
