{
    //oop - inheritence

    //parent
    class Parent {
        namepro: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.namepro = name;
            this.age = age;
            this.address = address;

        }
        getSleep(numOfHours: number) {
            console.log(`${this.namepro} will sleep for ${numOfHours}`)
        }
    }

    //for student
    class Student extends Parent {

        constructor(name: string, age: number, address: string) {
            super(name, age, address)

        }

    }
    const student1 = new Student("mr. x", 20, "Uganda")
    student1.getSleep(8)

    //for teacher
    class Teacher extends Parent{
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name,age,address)
            this.designation = designation

        }
       
        takeClass(numOfClass: number) {
            console.log(`${this.namepro} will sleep for ${numOfClass}`)

        }
    }
    
    const teacher = new Teacher("mr. y", 20, "Uganda", "X")
    teacher.takeClass(8)
}