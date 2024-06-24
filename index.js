/* Destination City */

// find the destination city

function findDestinationCity(arr) {
  if (arr.length < 1) {
    return "Empty Path";
  }
  const lastCityIndex = arr.length - 1;
  const lastCity = arr[lastCityIndex];

  const destinationCityIndex = lastCity.length - 1;
  const destination = lastCity[destinationCityIndex];

  return destination;
}

let path = [
  ["Nairobi", "Nakuru"],
  ["Nakuru", "Eldoret"],
  ["Eldoret", "Kisumu"],
];

// console.log(findDestinationCity(path))
// console.log(findDestinationCity([]))

/* Write unit tests for the given function*/

// require jest library

function isPerfectSquare(n) {
  return n > 0 && Math.sqrt(n) % 1 === 0;
}

// console.log(isPerfectSquare(4)); /// 4, 16
// console.log(isPerfectSquare(16));

function isFibonacci(n) {
  if (n < 0) return false;
  const x1 = 5 * n * n + 4;
  const x2 = 5 * n * n - 4;
  return isPerfectSquare(x1) || isPerfectSquare(x2);
}

console.log(isFibonacci(2)); // true 24, 16
console.log(isFibonacci(4)); // false 84, 76
console.log(isFibonacci(3)); // true 49, 41

/* PerfectSquareTest */
describe("PerfectSquareTest", () => {
  it("TestIsPerfectSquareFunction", () => {
    expect(isPerfectSquare(4)).eq(true);
    expect(isPerfectSquare(3)).eq(false);
  });
});

/* isFibonacciTest */
describe("isFibonacciTest", () => {
  it("TestIsFibonacciFunction", () => {
    expect(isFibonacci(2)).eq(true);
    expect(isFibonacci(4)).eq(false);
  });
});

// run the jest test command

/* Debug the function */

function findLongestPalindrome(s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) { 
    for (let j = i + 1; j < s.length; j++) {
      const substr = s.slice(i, j + 1); // slice the string from i to j, j is not inclusive
      console.log(isPalindrome(substr), substr.length ,  longest.length)
      if (isPalindrome(substr) && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
}

function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}


console.log(findLongestPalindrome("babad"))


// optimize the function for better performance

function findLongestPalindrome(s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      const substr = s.slice(i, j);
      if (isPalindrome(substr) && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
}

console.log(findLongestPalindrome("babad"))