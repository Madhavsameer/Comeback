function *nameprint(){
    yield "Gaurav";
    yield "Priyanshu";
    yield "Aditya";
}

let val=nameprint();

console.log(val.next().value);
console.log(val.next().value);
console.log(val.next().value);
