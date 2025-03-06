let person = { name: "Alice", age: 25, city: "New York" };
size = 0;
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
  size++;
}

console.log("size: " + size);