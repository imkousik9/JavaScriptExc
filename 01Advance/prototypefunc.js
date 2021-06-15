// The global variable
const s = [23, 65, 98, 5];

const User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstname = () => {
  console.log(`Your first name is :  ${this.firstName}`);
};

Array.prototype.myMap = (callback) => {
  const newArray = [];
  this.forEach((a) => newArray.push(callback(a)));
  return newArray;
};

let new_s = s.myMap((item) => {
  return item * 2;
});
console.log(new_s);

Array.prototype.myFilter = (callback) => {
  var newArray = [];
  this.forEach((x) => {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  return newArray;
};

let new_sB = s.myFilter((item) => {
  return item % 2 === 1;
});
console.log(new_sB);

const san = new User('Sam', 1);
san.getFirstname();
