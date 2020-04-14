// const num = [ 2, 3, 5, 9, 7, 8, 15, 10]
// let numWant = 15
// let counter;
// let flag = num.length;

// for(counter = 0; counter <= num.length; counter ++ ) {

//     if (numWant == num [counter]) {
//         console.log(`Number ${numWant} is present at ${counter}`);   
//         break;     
//     } 
// }

// if (flag < counter) {
//     console.log(`Number ${numWant} is not present in this list`);
// }

const newTodo = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Record youtube videos',
    isDone: true,
}]

// const index = newTodo.findIndex(function(todo, index) {
//     console.log(todo);
//     return todo.title === 'Go to Gym'
// })
// console.log(index);

// Method 1

// const findTodo = function (anyTodos, userTitle) {
//     const index = anyTodos.findIndex(function (todo, index) {
//         return todo.title.toLowerCase() === userTitle.toLowerCase()
//     })
//     return anyTodos[index]
// }

// let printMe = findTodo(newTodo, 'Go To gym')
// console.log(printMe);


// Methode 2

const findTodo = function (anyTodos, userTitle) {
    const titelReturned = anyTodos.find(function (todo, index) {
        return todo.title.toLowerCase() === userTitle.toLowerCase()
    })
    return titelReturned
}

let printMe = findTodo(newTodo, 'Record Youtube viDeos')
console.log(printMe);
