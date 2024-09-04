"use strict";

// შექმენით მასივი სახელით ‘students’ და მოათავსეთ მასში 5 ელემენტი(მაგ:
// ‘Nino’,’Giorgi’....)
// -დაალაგეთ მასივში არსებული ელემენტები საპირისპირო მიმართებულით და შედეგი
// გამოიტანეთ კონსოლში.

const students = ["Nino", "Giorgi", "Levani", "Otari", "Nana"];

console.log(students.reverse());

// 2.სტუდენტების, მასივი გაფილტრეთ და ყველა სტუდენტი,რომლის სახელშიც არის A
// შეინახეთ ცვლადში studentsWithA.
// -კონსოლში გამოიტანეთ შედეგი, შემდეგი ფორმატით // Students with 'a' in their name:

const studentsWithA = students.filter((name) => name.includes("a"));

console.log(`Students with 'a' in their name: ${studentsWithA}`);

// 3.შექმენით მასივი persons=[’David’, ‘Elene’, ‘Teona’, ’Giorgi’];
// მასივის ერთ-ერთი მეთოდის გამოყენებით დაადგინეთ persons-ს მასივში არის თუ არა
// სახელი Elene და ნებისმიერი შედეგი შეინახეთ ცვლადში hasElene.

// გამოიყენეთ პირობითი ოპერატორი თუ’Elene’ არის მასივის ერთ-ერთი ელემენტი,
// კონსოლში დაბეჭდეთ ‘Elene is in the persons array’ სხვა შემთხვევაში დაბეჭდეთ ‘Elene
// is not in the persons array’.

const persons = ["David", "Elene", "Teona", "Giorgi"];

const hasElene = persons.includes("Elene");
console.log(hasElene);

if (hasElene) {
  console.log("Elene is in the persons array");
} else {
  console.log("Elene is not in the persons array");
}

// 4.მოცემული გაქვთ მასივი [1,7,35,15,30] დაალაგეთ ელემენტები ზრდადობით და
// დაბეჭდეთ შედეგი.

const sortedArray = [1, 7, 35, 15, 30].sort((a, b) => a - b);

console.log(sortedArray);

// 5.შექმენით ცვლადი user და შეინახეთ მნიშვნელობა ‘admin’ , შექმენით ცვლადი
// passCode და შეინახეთ მნიშვნელობა-12345.
// გამოიყენეთ prompt მეთოდი და მომხარებელსაც ჩააწერინეთ user და passCode.
// თუ მომხმარებლის მიერ ჩაწერილი user და passCode დაემთხვევა, წინასწარ შენახულ
// ინფორმაციას, კონსოლში დაბეჭდეთ"Login successful. Welcome!"
// თუ, რომელიმე არ დაემთხვევა დაბეჭდეთ შესაბამისი მესიჯი : Incorrect username ან
// Incorrect password
// სხვა შემთხვევაში, დაბეჭდეთ Login failed. Please try again.

const user = "admin";
const passCode = "12345";
const inputUser = prompt("Enter username:");
const inputPassCode = prompt("Enter password:");

if (user === inputUser && passCode === inputPassCode) {
  console.log("Login successful. Welcome!");
} else if (user === inputUser && passCode !== inputPassCode) {
  console.log("Incorrect password");
} else if (user !== inputUser && passCode === inputPassCode) {
  console.log("Incorrect username");
} else {
  console.log("Login failed. Please try again.");
}

// 6.შექმენით კითხვარი prompt-ის გამოყენებით ‘What is your favorite fruit? (apple, banana,
//     orange)’

// თუ მომხმარებელი ჩაწერს apple-ს, დაბეჭდეთ Apples are great for a quick snack!

// თუ მომხმარებელი ჩაწერს banana-ს, დაბეჭდეთ Bananas are full of potassium!
// თუ მომხმარებელი ჩაწერს orange-ს, დაბეჭდეთ Oranges are a great source of vitamin
// C!
// სხვა შემთხვევაში, დაბეჭდეთ ‘That's an interesting choice! I don't know much about
// that fruit.’

const inputMessage = prompt(
  "What is your favorite fruit? (apple, banana, orange"
);

if (inputMessage === "apple") {
  console.log("Apples are great for a quick snack!");
} else if (inputMessage === "banana") {
  console.log("Bananas are full of potassium!");
} else if (inputMessage === "orange") {
  console.log("Oranges are a great source of vitamin C!");
} else {
  console.log(
    "That's an interesting choice! I don't know much about that fruit."
  );
}
