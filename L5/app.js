var userInput;
var userName;
userInput = 10;
userInput = "bitto";
// type check before assignment
if (typeof userInput === "string") {
    userName = userInput;
}
// never return type
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateError("Internal server error", 500);
console.log(res); // this line won't execute (never)
