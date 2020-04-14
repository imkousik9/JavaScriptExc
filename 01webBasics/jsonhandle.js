const student = {
    name: 'John',
    age: 23,
    isActive: true
}

//Convert this object into a string to be  stored in local storage

const studentObjToString = JSON.stringify(student);

// localStorage.setItem('student', studentObjToString);


const toJSONStudent = JSON.parse(studentObjToString);

console.log(toJSONStudent.age);
