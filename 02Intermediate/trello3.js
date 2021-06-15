let myTodos = {
  day: 'Monday',
  meetings: 0,
  meetDone: 0,

  addMeeting: function (num) {
    this.meetings = this.meetings + num;
    console.log('line 8', this);
  },

  meetingDone: function (num) {
    this.meetDone = this.meetDone - num;
  },
  // ok
  resetDay: function () {
    this.meetings = 0;
    this.meetDone = 0;
  },

  summary: function () {
    let meetLeft = this.meetings + this.meetDone;
    return `You have ${meetLeft} meetings today!`;
  }
};

const s = Object.create(myTodos);

myTodos.addMeeting(4);
myTodos.addMeeting(2);
myTodos.meetingDone(5);
console.log(myTodos.summary());
// console.log(s.summary());
