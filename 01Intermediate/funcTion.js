let myMultiplyer = function(num1, num2){
    // let multiply = num1 * num2
    // return multiply
    return num1 * num2
}

let guestUser = function(name = 'unName', courseCount = 0){
    return 'Hello ' + name + ' and your course count is ' + courseCount
}

console.log(guestUser('John', 1));
