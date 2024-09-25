// 1. Write a JavaScript function that returns a string that has letters in alphabetical
// order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

function alphabeticalString(str) {
  return str.split("").sort().join("");
}

console.log(alphabeticalString("webmaster"));
console.log(alphabeticalString("dskfjslsdkf;laaa"));

// 2. Write a JavaScript function that generates a string ID (specified length) of random
// characters.

function generateRandomId(length) {
  return Math.random()
    .toString(36)
    .slice(2, 2 + length);
}

console.log(generateRandomId(10));

// 3. Write a JavaScript function that checks whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer
// that is equal to the sum of its proper positive divisors, that is, the sum of its positive
// divisors excluding the number itself (also known as its aliquot sum). Equivalently, a
// perfect number is a number that is half the sum of all of its positive divisors
// (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive
// divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all
// its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7
// + 14. This is followed by the perfect numbers 496 and 8128.

function isPerfectNumber(num) {
  if (num <= 1) return false;
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(12));
console.log(isPerfectNumber(496));
console.log(isPerfectNumber(8128));

// 4. Here is a sample html file with a submit button. Now modify the style of the
// paragraph text through javascript code.

export function js_style() {
  const paragraph = document.getElementById("text");
  paragraph.style.textAlign = "center";
  paragraph.style.fontSize = "50px";
  paragraph.style.color = "orangered";
  paragraph.style.backgroundColor = "limegreen";
}

// 5.Write a JavaScript program to remove items from a drop-down list.

export function removecolor() {
  const select = document.getElementById("colorSelect");
  const selectedIndex = select.selectedIndex;
  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
    if (select.options.length === 0) {
      select.style.display = "none";
    }
  } else {
    alert("Its already empty!");
  }
}
