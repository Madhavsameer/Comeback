const person={
    name:"Aditya",
    age:22,
    occupation:"Software Engineer",


    introduce:function (){
        console.log(`Hey my name is ${this.name} my age is ${this.age} and i am a ${this.occupation}` );
    }

    

}
person.introduce();