//these methods are used to manipulate this keyword.

const Person  = {
    fName: 'harry',
    lName: 'potter',
    fullName: function (city,country){
        console.log(this.fName+ " " +this.lName+ " , "+city+" ,"+country);
    }
}
const Person1  = {
    fName: 'john',
    lName: 'doe',
}
const Person2  = {
    fName: 'henry',
    lName: 'brooke',
}
// Person.fullName.call(Person2,'newyork','United States');
// Person.fullName.apply(Person1,['newyork','United States'])
let f1 = Person.fullName.bind(Person2,'newyork','United States');
  f1();
//setTimeout(Person.fullName, 3000);//undef can be solved by using bind as shown above
setTimeout(f1, 3000);