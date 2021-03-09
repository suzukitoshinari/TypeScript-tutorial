import { TableSortLabel } from "@material-ui/core"

let arrString: string[] = ['a', 'b', 'c']
let arrBool: boolean[] = [true, false]
let arrMix: (string | number | boolean)[] = [1, "a", true]
let arrTup: [string, number] = ["a", 4]
arrTup = ["d", 7]

let person = {
    name: "lolo",
    age: 34
}
person.name = "tom"

type stringOrNum = string | number;
let year: stringOrNum;
year = 2020
year = '2020'

function calcSam(a: number, b: number): number {
    return a + b;
}
calcSam(2, 2)

let calcSum: (a: number, b: number) => number;
calcSum = (first: number, second: number) => {
    return first + second;
}

interface Person {
    name: string;
    age: number;
}

let mike: Person = { 
    name: 'mike',
    age: 89
}

class Person implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet() {
        return `Hi, my name is ${this.name} and ${this.age}`;
    }
}

let Tom = new Person("Tom", 44);

function doSomething<T>(arg: T): T {
    return arg
}

doSomething<string>('uuuu')

interface book<T> {
    id: number;
    name: string;
    data: T
}

const abook: book<string> = {
    id: 1,
    name: 'Title 1',
    data: 'kokokokok'
}

enum MannufactureMake { TableSortLabel, TOYOTA, VOLVO }

const myCar = {
    year: 2021,
    make: MannufactureMake.TOYOTA
}