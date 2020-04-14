 // const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']
// //console.log(days[0]);

// // days.forEach(function (day, index){
// //     console.log(`starts with ${index+1} -- ${day}`);    
// // })

// // for (let index = 0; index < days.length; index++) {
// //     console.log(days[index]);    
// // }

// for (let index = days.length; index > 0 ; index--) {
//          console.log(days[index]);  
// }  
    
const myTodos = []
myTodos.push('Boy Bread')
myTodos.push('Go to gym')
myTodos.push("It's cool!")

myTodos.forEach(function(todo, index){
    console.log(`Your task no.  ${index + 1} is: ${todo}`);
    
})