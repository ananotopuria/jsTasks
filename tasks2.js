// Task 1
// შეამოწმეთ სტრიქონი არის თუ არა პალინდრომი. ( პალინდრომი არის ისეთი ტიპის მონაცემი,
// რომელიც ერთნაირად იკითხება მარცხნიდან და მარჯვნიდან, მაგ LEVEL, ANNA, ALLO)
// შექმენით ცვლადი და მიანიჭეთ სტრიქონი, რომლის შემოწმებაც გსურთ.
// სტრიქონზე იმოქმედეთ ToLowerCase() მაგ: str. ToLowerCase()
// გამოიყენეთ for ციკლი და შეადარეთ ერთმანეთს სიმბოლოები ინდექსის ნომრის მიხედვით,
// სტრიქონის თავში და ბოლოში. თუ თანმიმდევრულად ყველა მათგანი დაემთხვევა გამოიტანეთ
// მესიჯი კონსოლში, რომ ინფუთი არის პალიდრომი. თუ არ დაემთხვევა, გამოიტანეთ, რომ ინფუთი
// არ არის პალინდრომი.

const palindromeText = "leveL";
const palindromeText1 = "ANNA";

function isPalindrome(str) {
  const lowerString = str.toLowerCase();
  for (let i = 0; i < lowerString.length / 2; i++) {
    if (lowerString[i] !== lowerString[lowerString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(palindromeText));
console.log(isPalindrome(palindromeText1));

// Task 2
// გამოიყენეთ მეთოდი splice(), რომ ამოჭრათ მასივიდან "Orange" და "Apple"

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
console.log(fruits.splice(1, 2));
console.log(fruits);

// Task 3
// გამოიყენეთ მასივის მეთოდი, რომელეც მოცემულ მასივის ანბანის ასოების
// თანმიმდევრობით დააწყობს:

const fruits2 = ["Banana", "Orange", "Apple", "Kiwi"];

console.log(fruits2.sort());

// Task 4
// არის ტანვარჯიშის ორი გუნდი: დელფინები და კოალები
// თითოეული გუნდი სამჯერ ასპარეზობს და მათი შედეგი გამოითვლება საშუალო არითმეტიკულით.
// გუნდი მოიგებს მხოლოდ იმ შემთხვევაში, თუ ორჯერ მეტი საშუალო ქულა ექნება მეორე გუნდთან
// შედარებით, სხვა შემთხვევაში არცერთი გუნდი არ იქნება მოგებული!

// 1.1 შექმენი arrow ფუნქცია სახელად calcAverage და გამოითვალე 3 ასპარეზობის საშუალო
// არითმეტიკული . ამ ფუნქციას უნდა ჰქონდეს სამი პარამეტრი და უნდა დააბრუნოს ერთი
// რიცხვი(საშუალო
// არითმეტიკული).

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

// 1.2 შექმენი ორი ცვლადი scoreDolphins და scoreKoalas, ამ ცვლადებს მიანიჭე მნიშვნელობად
// ფუნქცია
// calcAverage() , შენ უნდა გამოიძახო ეს ფუნქცია და არგუმენტად გადასცე შეჯიბრების ქულები,
// რომელიც
// დაბლა data-ში წერია.

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
const scoreDolphins1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);

console.log(scoreDolphins);
console.log(scoreKoalas);

// 1.3 შექმენი ფუნქცია checkWinner, რომელიც იღებს ორ პარამეტრს avgDolphins და avgKoalas ამ
// ფუნქციაში უნდა გაწეროთ ლოგიკა, თუ ერთი გუნდის საშუალო ართმეთმეტიკული ორჯერ მეტია,
// მეორე
// გუნდის საშუალო არითმეტიკულზე , გუნდი მოგებულია, თუ არცერთი არ აკმაყოფილებს ამ პირობას,
// ვერცერთი გუნდი ვერ მოიგებს. თუ რომელიმე გუნდმა მოიგო, დაბეჭდეთ ეს ტექსტი:
// Koalas win (30 vs. 13), თუ ვერცერთმა მოიგო No team wins...

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}

// 1.4 გამოიყენე checkWinner ფუნქცია, რომ გამოავლინო გამარჯვებული

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins1, scoreKoalas1);
