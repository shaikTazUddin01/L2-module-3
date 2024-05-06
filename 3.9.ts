{
    class counter {
       static number: number = 0;

        increment() {
           return counter.number = counter.number + 1;
        }
    }
    const instance1 = new counter();

    console.log(instance1.increment());
    console.log(instance1.increment());

    const instance2 = new counter();
    console.log(instance2.increment());
    console.log(instance2.increment());
}

