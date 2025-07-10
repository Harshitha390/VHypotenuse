var employee = {
    eid: 101,
    ename: "Jeevan",
    salary: 45000
};
console.log("Employee ID: ".concat(employee.eid, ", Employee Name: ").concat(employee.ename, ", Employee Salary: ").concat(employee.salary));
var product = {
    id: 11,
    name: "Mobile",
    price: 22000
};
console.log("Product ID: ".concat(product.id, ", Product Name: ").concat(product.name, ", Product Price: ").concat(product.price));
// Enums
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 0] = "East";
    Direction[Direction["West"] = 1] = "West";
    Direction[Direction["North"] = 2] = "North";
    Direction[Direction["South"] = 3] = "South";
})(Direction || (Direction = {}));
var direction = Direction.East;
console.log(direction);
console.log(Direction[2]);
function makeSound(pet) {
    if ("meow" in pet) {
        pet.meow();
    }
    else {
        pet.bark();
    }
}
var c = {
    name: "Ajay",
    regNum: 12345
};
console.log("Name: ".concat(c.name, ", Register Number: ").concat(c.regNum));
// Generics
function identity(value) {
    return value;
}
console.log(identity("Hello"));
console.log(identity(100));
console.log(identity(true));
