"use strict";
{
    class counter {
        increment() {
            return counter.number = counter.number + 1;
        }
    }
    counter.number = 0;
    const instance1 = new counter();
    console.log(instance1.increment());
    console.log(instance1.increment());
    const instance2 = new counter();
    console.log(instance2.increment());
    console.log(instance2.increment());
}
