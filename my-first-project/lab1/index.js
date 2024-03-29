
import chalk from 'chalk';
const arrayOfObjects = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 22 }
];

arrayOfObjects.forEach(obj => {
  console.log(chalk.blue(obj.name) + ' is ' + chalk.red(obj.age) + ' years old');
});



