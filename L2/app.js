//array , obj , tuple , enum
// let student : {
//   name : string;
//   age : number;
//   add : {
//     vill : string;
//     pin : number;
//   },
//   hobby : string[]
// } = {
//   name : "sachin",
//   age : 20,
//   add : {
//     vill : "pratabgarh " , 
//     pin : 700103
//   },
//   hobby : ["cricket" , "football" , "coding"],
// }
// console.log(student);
//....................................!array.................................................................
// let arr1 : string[] = ["bitto" , "ash" , "nihal"];
// let arr2 : number[] = [1,2,3,4 , 34] ;
// let arr3 : any[] = ["bitto" , 87 , true , "ash"];
//....................................tuple .........................................................
//tuple is fixed length array with proper index value  as type 
// let arr : [string , number  , boolean] = ["bitto" , 87 , true ];
// console.log(arr);
//....................................enum..............................................................
//enum is collection of same type of value
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "sachin",
    age: 20,
    hobbies: ["cricket", "football", "coding"],
    role: Role.AUTHOR
};
console.log(person);
