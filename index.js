
let a=10
console.log(typeof a)
const x="asoghomonyan"
console.log(typeof x)
let bool=false;
console.log(typeof bool)
var undef;
console.log(undef)
const arr=[1,5, 100];
console.log(typeof arr)
const sum=(num1, num2)=>{
    return num1+num2
}
console.log(sum(45,50))
const multiply=(num1,num2)=>{
    return num1*num2
    }
    console.log(multiply(12,30))
    const substraction=(num1,num2)=>{
        return num2-num1
    }
    console.log(substraction(10,40))
    const v=50;
    const j=25;
    const d=v/j;
    console.log(d)
    let z=(num1, num2)=>{
        return num1/num2
    }
console.log(z(50,2))
const person={
    firstName:"Karen",
    lastName:"Sargsyan",
    age:40,
    position:"driver",
}
console.log(person.lastName)
const car={
    Model:"Honda",
    color:"black"
   
}
console.log(car.color)
const city={
    population:1000000,
    building:30000,
}
console.log(city.population)
const range=(num1,num2)=>{
    let x=[];
    for(let i=num1; i<num2;++i){
x.push(i);
    }
    return x;
}
console.log(range(1,100))
carriedAdd2numbers=num1=>num2=>num1+num2;
console.log(carriedAdd2numbers(1)(10))
carriedmultyple2numbers=num1=>num2=>num1*num2;
console.log(carriedmultyple2numbers(25)(10))
constrange=(num1, num2, num3,num4)=>{
    x=[];
    x.push(i)
    
    for(let i=num1; i<num4;++i){
        return x;
    }
}
console.log(range(1,4))
console.log(["ruben", "karen", "artut"].map((name)=>name.toUpperCase()));
