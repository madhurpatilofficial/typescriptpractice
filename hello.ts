console.log("This is my first typescript code");

let age: any[] = [1, 2, 3, 4, 5];

for (let num of age) {
    console.log(num);
}

class Test {
    public a: number;
    public b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    add() {
        console.log("Addition: " , this.a + this.b);
    }
    substract(a:number, b:number){
        console.log("Substraction: " , a - b);

    }
}

let obj: Test = new Test(5, 7);

obj.add();
obj.substract(5,6);