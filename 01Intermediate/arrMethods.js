const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

// numbers[1] = 'somthing'

// console.log(numbers);

//start

// console.log(numbers.shift());

// console.log(numbers);

// numbers.unshift('Somthing')
// console.log(numbers);

//end
// console.log("The element to be deleted is : " + numbers.pop());
// console.log(numbers);

// numbers.push('Seven')
// console.log(numbers);

console.log(numbers.fill(0, 1, 3));

//Middle
numbers.splice(2, 1, 'Somthing');
// console.log(numbers);

let sum = [1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
// console.log(sum);
