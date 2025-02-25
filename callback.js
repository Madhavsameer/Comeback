const person={
    name:"joh",
    age:30

}

let naam='{"name":"John", "age":"30"}';
let fd=JSON.parse(naam);
let data=JSON.stringify(person);
console.log(fd)


console.log(data);