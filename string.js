//let word = "JavaScript";  sözündə 3 nömrəli indeksin hansı hərf olduğunu tapın

// let word = "JavaScript";
// let index_word = word.charAt(3);
// console.log(index_word);

//let sentence = "This is a simple sentence."; “is ” sözünün indeksini tapın

// let sentence = "This is a simple sentence.";

// let indexWithWord = "is";

// let findWord = sentence.indexOf(indexWithWord);

// console.log(findWord);
//let sentence = "This is a sample sentence.";   sözü boşluqlardan ayıraraq array-ə çevirin .Output: ["This", "is", "a", "sample", "sentence."]

// let sentence = "This is a sample sentence.";
// const myArr = sentence.split(" ");
// console.log(myArr);

//let phrase = "Programming is fun!";  “Programming” sözünü ayırın cümlədən . // Output: Programming
// let phrase = "Programming is fun!";
// const array_phrase = phrase.split(" ")[0];
// console.log(array_phrase);

//let phrase = "Programming is fun!";  “fun” sözünü ayırın cümlədən .  // Output: fun
// let phrase = "Programming is fun!";
// const array_phrase = phrase.split(" ")[2];
// console.log(array_phrase);

//Verilmiş ifadəni tərsinə çevirən metod yazın
// let originalString = "Hello, World!";
// function reverseString(str) {
//   let originalString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     originalString += str[i];
//   }
//   return originalString;
// }
// console.log(reverseString("Hello, World!"));

// ==============================================================================================

// const numbers = [1, 2, 3, 4, 5]; Arrayın elementlərini yazdırın
// console.log(first);   // Output: 1
// console.log(second);  // Output: 2
// console.log(fourth);  // Output: 4

// const numbers = [1, 2, 3, 4, 5];
// let [a, b, c, d, e] = numbers;
// console.log(a);
// console.log(b);
// console.log(d);

// Objectin elementlərini yazdırın
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// };

// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe
// console.log(age);       // Output: 30

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };
// let firstName = person.firstName;
// let lastName = person.lastName;
// let age = person.age;
// console.log(firstName, lastName, age);

// printPerson Funksiyasını yazın.
// const person = {
//   firstName: 'Alice',
//   lastName: 'Johnson',
//   age: 25
// };

// printPerson(person); // Output: Alice Johnson is 25 years old.
// function printPerson({ firstName, lastName, age }) {
//   console.log(`${firstName} ${lastName} is ${age} years old.`);
// }

// const person = {
//   firstName: "Alice",
//   lastName: "Johnson",
//   age: 25,
// };
// printPerson(person);

// Ekrana yazdırın məlumatları aşağıdakı kimi
// const user = {
//   id: 1,
//   username: "john_doe",
//   email: "john@example.com",
//   details: {
//     firstName: "John",
//     lastName: "Doe",
//     address: {
//       city: "New York",
//       zipCode: "10001",
//     },
//   },
// };

// const { firstName } = user.details;
// console.log(firstName);
// const { username } = user;
// console.log(username);
// const { city } = user.details.address;
// console.log(city);

// console.log(user.username);
// console.log(user.details.firstName);
// console.log(user.details.address.city);

// console.log(username);   // Output: john_doe
// console.log(firstName);  // Output: John
// console.log(city);       // Output: New York

// const numbers = [1, 2, 3, 4, 5];  rest parametrdən istifadə edərək ilk ədədi və qalan ədədləri ekrana yazdırın
// console.log(first);         // Output: 1
// console.log(restOfNumbers); // Output: [2, 3, 4, 5]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const fullArr = [...arr1, ...arr2];
// const [firstElement, ...restOfArray] = fullArr;
// console.log(firstElement);
// console.log(restOfArray);

// const numbers = [1, 2, 3, 4, 5];
// array-i iki qatı olan array yaradın — c // [2, 4, 6, 8, 10]
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map(function (n) {
//   return n * 2;
// });
// console.log(doubleNumbers);

// const numbers = [1, 2, 3, 4, 5];
// array-in cüt ədədərdən ibarət arrayı yaradın —  // [2, 4]
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(function (x) {
//   return x % 2 === 0;
// });

// console.log(evenNumbers);

// const users = [
//   { id: 1, name: "Alice", age: 28 },
//   { id: 2, name: "Bob", age: 32 },
//   { id: 3, name: "Charlie", age: 25 },
//   { id: 4, name: "David", age: 40 },
// ];

// arrayın-dən yaşı 30-da yuxarı olanların adlarından ibarət array yaradın — console.log(namesOver30); // ['Bob', 'David']

// const users = [
//   { id: 1, name: "Alice", age: 28 },
//   { id: 2, name: "Bob", age: 32 },
//   { id: 3, name: "Charlie", age: 25 },
//   { id: 4, name: "David", age: 40 },
// ];
// const ageOver = users.filter(function (x) {
//   return x.age > 30;
// });
// .map((i) => {
//   return i.name;
// });
// console.log(ageOver);

// const defaultSettings = { theme: 'light', fontSize: 16 };
// const userSettings = { fontSize: 18, showSidebar: true };
// mergedSettings  iki obyektin dəyərlərini birəşdirin bir obyekt yaradın
// const defaultSettings = { theme: "light", fontSize: 16 };
// const userSettings = { fontSize: 18, showSidebar: true };
// const mergedSettings = { ...defaultSettings, ...userSettings };

// console.log(mergedSettings);

// const numbers = [1, 2, 3, 4, 5, 6]; arrayınin cüt ədədlərinin iki qatını cəmini tap
// —console.log(result); // 24 (2*2 + 4*2 + 6*2)
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers
//   .filter(function (x) {
//     return x % 2 === 0;
//   })
//   .map((x) => x * 2);
// let sum = 0;
// evenNumbers.forEach((x) => {
//   sum += x;
// });

// console.log(sum);

// const person = {
//   name: 'Alice',
//   address: {
//     city: 'New York',
//     zip: '10001',
//   },
// };
// obyektinin
// console.log(name); // 'Alice'
// console.log(city); // 'New York'
// console.log(zip); // '10001'  dəyərlərinin ayrı ayrı dəyişən kimi yaz

// const person = {
//   name: "Alice",
//   address: {
//     city: "New York",
//     zip: "10001",
//   },
// };
// let personName = person.name;
// let personCity = person.address.city;
// let personZip = person.address.zip;
// console.log(personName);
// console.log(personZip);
// console.log(personCity);
