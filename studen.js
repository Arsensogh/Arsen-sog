function student(firstName,lastName,age){
    this.firstname=firstName;
    this.lastName=lastName;
    this.age=age;
}

const y=new student("Arsen", "Soghomonyan", 37)
console.log(y.age)