document.title = 'I got changed';
// console.log(document.getElementById('idOne'));
// console.log(document.getElementsByClassName('classOne'));
// const myElement = document.querySelectorAll('p');
// console.log(myElement[2]);
// const myElement = document.querySelector('#idOne');
// console.log(myElement);

// const myPElements = document.querySelector('p');
// myPElements.textContent = 'I am being changed using JS';

// const myPElements = document.querySelectorAll('p');
// myPElements.forEach(function(p) {
//   //   p.textContent = 'I am being changed using JS';
//   p.remove();
// });
// myPElements.forEach(p => (p.textContent = 'I am being changed using JS'));

//creating element in DOM
// const myNewPara = document.createElement('p');
// myNewPara.textContent = 'I was added via JS';
// document.querySelector('body').appendChild(myNewPara);

// const h = document.createElement('h1');
// var myValue = document.createTextNode('Hello World!');
// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h);

// Event listener
// document.querySelector('button').addEventListener('click', event => {
//   event.target.textContent = 'I was clicked';
// });

//track input form
//change
document.querySelector('#myFrom').addEventListener('input', event => {
  console.log(event.target.value);
});
