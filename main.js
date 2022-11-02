
class Person{
  constructor(name,age,dob){
    this.name=name
    this.age=age
    this.dob=dob
    this.eat()

  }
  eat(){
  console.log("eating");
  }
}
let person1=new Person("name","67", "blaa")
console.log(person1);