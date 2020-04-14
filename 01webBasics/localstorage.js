// localStorage.setItem('hero', 'thor');
//localStorage.setItem('todo', 'buy milk');
var myHero = localStorage.getItem('hero');
console.log(myHero);
console.log(localStorage.getItem('todo'));

// update local storage
localStorage.setItem('todo', 'Disco');
//console.log(localStorage.getItem('todo'));
localStorage.removeItem('hero')
localStorage.clear();