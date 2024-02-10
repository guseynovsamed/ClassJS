"use strict";

let stu1 = {
  id: 1,
  fullName: "Tunzale Memmedova",
  age: 25,
  address: "Azadlıq",
};

let stu2 = {
  id: 2,
  fullName: "Semed Huseynov",
  age: 27,
  address: "Ehmedli",
};

let stu3 = {
  id: 3,
  fullName: "Oruc Mehrabli",
  age: 26,
  address: "Yasamal",
};

let stu4 = {
  id: 4,
  fullName: "Arzu Kerimli",
  age: 26,
  address: "Yasamal",
};

let stu5 = {
  id: 5,
  fullName: "İlham Abasli",
  age: 20,
  address: "Lokbatan",
};

let group = {
  name: "P418",
  capacity: 3,
  students: [],
  addStudent: function (stu) {
    if (stu == undefined) {
      alert("Input cant be empty");
      return;
    }

    if (this.students.length >= this.capacity) {
      alert("Group already filled");
      return;
    }

    this.students.push(stu);
  },

  getAllstudent: function () {
    return this.students;
  },
};

group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
group.addStudent(stu4);

console.log(group.getAllstudent());

// function test(a, b) {
//   this.c = a;
//   this.d = b;
// }

// let res = new Test("salam", "sagol");

// class Test {
//   constructor(a, b) {
//     this.c = a;
//     this.d = b;
//     let name = "Tofiq";
//     this.salam = name;
//   }

//   getFullData = function () {
//     console.log("test");
//   };
// }

// let res = new Test(100, 500);

// console.log(res.salam);

// console.log(res.c);

// res.getFullData();

// class Test {
//   constructor() {
//     this.x = "Salam";
//   }
// }

// class Test2 extends Test {
//   constructor() {
//     super();
//     this.d = "Sagol";
//   }
// }

// let result = new Test2();

// console.log(result.x);

// class Person {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }

//   getFullName = function () {
//     return this.name + " - " + this.surname;
//   };
// }

// Person.prototype.getFullDatas = function () {
//   return this.name + " " + this.surname + " " + this.age;
// };

// let person = new Person("Tofiq", "Nesibli", 19);

// let person2 = new Person("Semed", "Huseynov", 27);

// console.log(person.getFullName());
// console.log(person2.getFullName());

// console.log(person.getFullDatas());

// let name = "Tunzale";

// let surname = "Abasli";

// String.prototype.checkLetter = function (letter) {
//   return this.includes(letter);
// };

// let res = name.checkLetter("n");
// let res2 = surname.checkLetter("t");

// console.log(res2);

// console.log(res);

let ages = [22, 33, 44, 55];

Array.prototype.getAverage = function () {
  return (
    this.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    this.length
  );
};

console.log(ages.getAverage());
