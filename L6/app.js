"use strict";
//basic Class 
// class Person {
// constructor(public name : string , public age : number){
//   this.name = name;
//   this.age = age;
// };
//  describe(){
//   console.log(`name is ${this.name} and age is ${this.age}`);
//  }
// }
// const p1 = new Person("bitto" , 20 )
// console.log(p1.describe());
//private & public access modifier 
// class department {
//    name: string;
//    age: number;
//    public readonly id : number
//   private salary: number;
//   //when we assign privater its only accessible within class 'department'. 
//    constructor(name: string, age: number, salary: number) {
//       this.name = name;
//       this.age = age;
//       this.salary = salary
//       this.id = 1
//    }
// }
// let p1 = new department("bitto", 20, 30000);
// console.log(p1) 
//! Inheritence
//! Override properties & protected access modifier
//! setter & getter method
class Department {
    constructor(id, n) {
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}), ${this.name}`);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInformation() {
        console.log('Number of emp: ', this.employees.length);
        console.log(this.employees);
    }
}
class AccountingDepartment extends Department {
    // reports : string[] = [];
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(emp) {
        if (emp === "Patel") {
            return;
        }
        this.employees.push(emp);
    }
    get getReports() {
        if (this.reports.length > 0) {
            return this.reports;
        }
        throw new Error("Report not found.");
    }
    set setReports(value) {
        if (!value) {
            throw new Error("Please pass valid value.");
        }
        this.reports.push(value);
    }
}
const accDep = new AccountingDepartment("d1", []);
accDep.addReports("Bugs");
// accDep.printReports();
// accDep.describe();
accDep.addEmployee("Patel");
accDep.addEmployee("Shivani");
// accDep.printEmployeeInformation();
// setter & getter
console.log("getter -> ", accDep.getReports);
accDep.setReports = "Code review error";
console.log("getter -> ", accDep.getReports);
