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

//....................................!array........................................

// let arr1 : string[] = ["bitto" , "ash" , "nihal"];
// let arr2 : number[] = [1,2,3,4 , 34] ;
// let arr3 : any[] = ["bitto" , 87 , true , "ash"];


//....................................tuple .........................................................
// tuple is fixed length array with proper index value  as type 
let arr : [string , number  , boolean] = ["bitto" , 87 , true ];
console.log(arr);


//....................................enum..............................................................
//enum is collection of same type of value

// enum Role {
//   ADMIN = 1,
//   READ_ONLY,
//   AUTHOR,
// }
// //bedefault enum start from 0 but we can change it as per our need like check up 
// const person = {
//   name : "sachin",
//   age : 20,
//   hobbies : ["cricket" , "football" , "coding"],
//   role : Role.AUTHOR
// }

// console.log(person);
