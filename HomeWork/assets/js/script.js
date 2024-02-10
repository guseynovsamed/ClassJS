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
      return;
    }

    if (this.students.length >= this.capacity) {
      return;
    }

    this.students.push(stu);
  },
  getAllstudent: function () {
    return this.students;
  },

  searchStudent: function (searchtext) {
    if (searchtext == undefined || searchtext == "") {
      return "Data notfound";
    }

    return this.students.filter((students) =>
      students.fullName
        .toLowerCase()
        .toUpperCase()
        .trim()
        .includes(searchtext.toLowerCase().toUpperCase().trim())
    );
  },

  getByIdStudent: function (id) {
    if (id == undefined || id == "") {
      return "Data notfound";
    }
    return this.students.find((students) => students.id == id);
  },

  deleteStudent: function (id) {
    if (id == undefined || id == "") {
      return "Data notfound";
    }
    this.students = this.students.filter((students) => students.id != id);
    console.log(this.students);
  },

  editStudent: function (id, fullName, age, address) {
    let updStu = this.students.findIndex((students) => students.id == id);

    console.log(
      "Before: ",
      this.students[updStu].fullName +
        "-" +
        this.students[updStu].age +
        "-" +
        this.students[updStu].address
    );
    if (fullName != undefined) {
      this.students[updStu].fullName = fullName;
    }

    if (age != undefined) {
      this.students[updStu].age = age;
    }

    if (address != undefined) {
      this.students[updStu].address = address;
    }
    console.log(
      "After: ",
      this.students[updStu].fullName +
        "-" +
        this.students[updStu].age +
        "-" +
        this.students[updStu].address
    );
  },
};

group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
group.addStudent(stu4);
// group.addStudent(stu5);
// console.log(group.searchStudent(""));
//console.log(group.getByIdStudent(2));
//group.deleteStudent(1);
group.editStudent(1);
