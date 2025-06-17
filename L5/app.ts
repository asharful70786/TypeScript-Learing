let userInput: unknown;
let userName: string;

userInput = 10;
userInput = "bitto";

// type check before assignment
if (typeof userInput === "string") {
  userName = userInput;
}

// never return type
function generateError(message: string, code: number): never {
  throw { message, statusCode: code };
}

const res = generateError("Internal server error", 500);
console.log(res); // this line won't execute (never)
