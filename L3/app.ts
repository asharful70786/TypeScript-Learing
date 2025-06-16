//Union

// when you have multiple type of value in single variable
//  function sum(n1 : number | string , n2 : number | string) {
//    if(typeof n1 === "number" && typeof n2 === "number"){
//     return n1 + n2;
//    }else{
//     return `${n1}${n2}`;
//    }
// }

// console.log(sum(1,2));
// console.log(sum(1123,"2"));

//  the te union is jusrt like  or || . that also cause that ts dont understand type so we have write if()with union
// other wise we can see error like 
//      TS error on + | Because + means different things for numbers & strings |
// | Use typeof | To narrow down and help TS |

//LITERAL TYPE .....................................................................

//  function sum(n1 : number | string , n2 : number | string , convert : "as-num" | "as-str") {
//    if(typeof n1 === "number" && typeof n2 === "number" && convert === "as-num"){
//     return n1 + n2;
//    }else{
//     return `${n1}${n2}`;
//    }
// }

// console.log(sum(1,2  , "as-num"));
// console.log(sum("1123","2" ,"as-str"));

// type Alias / Custom Types ........................................................

type user = {
    name : string;
    age : number;
}

// let person : user = { //rather than just types here we can type alias(35) user and use here 
//     name : "bitto",
//     age : 20
// }

// // console.log(person)

// function printName (user : user){ //we can also use type alias here and get suggition 
//     console.log(user.name)
// }

// printName(person)
