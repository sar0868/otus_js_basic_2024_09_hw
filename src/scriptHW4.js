const { number } = require("yargs");

const user = {
  name: "John",
};

function inputAge() {
  return +prompt("Введите возраст: ");
}
let num = 56;
user.age = num;
const admin = Object.assign({}, user, { role: "admin" });
console.log(user);
console.log(admin);
let { name, age, role } = admin;
console.log(`name: ${name}`);
console.log(`age: ${age}`);
console.log(`role: ${role}`);

module.exports = { user, admin, name, age, role };