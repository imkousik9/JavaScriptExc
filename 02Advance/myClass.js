class User {
    constructor(firstName, lsatName, credit) {
      this.firstName = firstName;
      this.lsatName = lsatName;
      this.credits = credit;
    }

    getFullName = () => `${this.firstName} ${this.lsatName} is my full name`;
   
    editName(newname) {
        const myname = newname.split(' ')
        this.firstName = myname[0];
        this.lasttName = myname[1];
    }
  }

  class Teacher extends User {
    constructor(firstName, lsatName, credit, subject) {
      super(firstName, lsatName, credit);
      this.subject = subject;
    }

    getFullName = () => `${this.firstName} ${this.lsatName} is my full name and I teache ${this.subject}`;

  }


  const john = new Teacher('John', 'Doe', 34, 'C#');
  console.log(john.getFullName());
  john.editName("Johny Anderson")
  console.log(john.getFullName());
  