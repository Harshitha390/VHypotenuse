// Type Alias
type Employee={
    eid:number,
    ename:string,
    salary:number
};
let employee:Employee={
    eid:101,
    ename:"Jeevan",
    salary:45000
}
console.log(`Employee ID: ${employee.eid}, Employee Name: ${employee.ename}, Employee Salary: ${employee.salary}`)

// Interface
interface Product{
    id:number,
    name:string,
    price:number
}
const product:Product={
    id:11,
    name:"Mobile",
    price:22000
}
console.log(`Product ID: ${product.id}, Product Name: ${product.name}, Product Price: ${product.price}`);

// Enums
enum Direction{
    East,
    West,
    North,
    South
}
let direction:Direction=Direction.East;
console.log(direction);
console.log(Direction[2]);

// Union
interface Cat{
    meow():void;
}
interface Dog{
    bark():void;
}
type Pet = Cat | Dog ;
function makeSound(pet:Pet){
    if("meow" in pet){
        pet.meow();
    }
    else{
        pet.bark();
    }
} 

// Intersection
interface Person{
    name:string
}
interface Student{
    regNum:number
}
type candidate=Person & Student;
const c: candidate={
    name:"Ajay",
    regNum:12345
}
console.log(`Name: ${c.name}, Register Number: ${c.regNum}`)

// Generics
function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>("Hello")); 
console.log(identity<number>(100));     

console.log(identity(true)); 