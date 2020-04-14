const sayHello = (name) => `Hey there ${name} !`;

//console.log(sayHello('John'));

const myTodo = [
  {
    title: 'Buy Bread',
    isDone: true
  },
  {
    title: 'Go to Gym',
    isDone: true
  },
  {
    title: 'Record youtube videos',
    isDone: false
  },
  {
    title: 'On mu Way !',
    isDone: false
  }
];

const thingsDone = myTodo.filter((todo) => todo.isDone === true);
const thingsNotDone = myTodo.filter((todo) => {
  todo.isDone === false;
});

console.log(thingsNotDone);
