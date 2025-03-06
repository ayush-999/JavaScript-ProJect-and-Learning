const student = {
  marks: "94.5",
  printMarks() {
    console.log("marks in: " + this.marks);
  },
};

const details = {
    fullName: "Ayush"
}

details.__proto__ = student;

console.log(details.printMarks())