// class CarCl {
//     constructor (make,speed){
//         this.make = make;
//         this.speed = speed;
//     }
//     accelerate(){
//         this.speed += 10;
//         console.log(`${this.make} is going at ${this.speed} km/h`);
//     }
//     brake(){
//         this.speed -= 10;
//         console.log(`${this.make} is going at ${this.speed} km/h`);
//     }
//     get speedUS(){
//         console.log(this.speed);
//         return this.speed / 1.6;
//     }
//     set speedUS(speed){
//         console.log(speed);
//         this.speed = speed * 1.6;
//     }
// }

// const ford = new CarCl('ford',120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 10;
// console.log(ford);


// const Car = function (make,speed){
//     this.make = make;
//     this.speed = speed;
// }
// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);

// }
// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }
// const EV = function(make,speed,charge){
//     Car.call(this,make,speed);
//     this.charge = charge;
// }

// EV.prototype =  Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo){
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function(){
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`)
// }

// const telsa = new EV('Telsa',120,23);
// telsa.chargeBattery(90);
// console.log(telsa);
// telsa.brake();
// telsa.accelerate();

class PersonCl{
    constructor(fullName,birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear
    }
    calcAge(){
        console.log(`${2024-this.birthYear} parent calcage `);
    }
    greet(){
        console.log(`Hey ${this.fullName}`);
    }
    // get age(){
    //     return 2
    // }
    static hey(){
        console.log('Hey There')
    }
}
class StudentCl extends PersonCl{
    constructor(fullName,birthYear,course){
        super(fullName,birthYear);
        this.course = course;
    }
    introduce(){
        console.log(`My name is ${this.fullName} and study ${this.course}`)
    }
    calcAge(){
        console.log(`new calcage methond under student`)
    }
}

const ahgwah = new StudentCl('AH Gwah',2000,'Hehe');
const hehe = new PersonCl('AH Gwah',2000,'Hehe');
ahgwah.calcAge();
hehe.calcAge();