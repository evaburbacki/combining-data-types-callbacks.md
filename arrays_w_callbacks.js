const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// Determine if every number is greater than or equal // to 0
nums.every(num => num >= 0) 
//answer true

// Determine if every word is shorter than 
// 8 characters
panagram.every(word => word.length < 8) 
//answer true

// filter the array for numbers less than 4
nums.filter(num => num < 4) 
// answer [1, 2, 3, 0]

// filter words that have an even length
panagram.filter(word => word.length % 2 === 0) 
// answer [over, lazy]

// Find the first value divisible by 5
nums.find(num => num % 5 === 0) 
// answer 5

// find the first word that is longer 
// than 5 characters
panagram.find(word => word.length > 5) 
// didn't get anything (because there is no word longer than 5 letters)

// find the index of the first number that is divisible by 3
nums.findIndex(num => num % 3 === 0) 
// answer is 2

// find the index of the first word that is less than 2 characters long
panagram.findIndex(word => word.length < 2)
// answer is -1 (because there is no word that is less than 2 characters long

//console.log each value of the nums array multiplied by 3
nums.forEach(num => 
console.log(num * 3))
// answer 3,6,9,12,15,18,21,24,27,30,0

// console.log each word with an exclamation point at the end of it
panagram.forEach(word => 
console.log(word + "!"))
// answer The!, quick!, brown!, fox!, jumps!, over!, the!, lazy!, dog!

// make a new array of each number multiplied by 100
const newNumsArr= nums.map(num => num * 100)
console.log(newNumsArr)
// answer [100,200,300,400,500,600,700,800,900,1000,0]

//make a new array of all the words in all uppercase
const newWordsArr= panagram.map(word => word.toUpperCase());
console.log(newWordsArr)
// answer ['THE', 'BROWN', 'JUMPS', 'THE', 'DOG', 'QUICK', 'FOX', 'OVER', 'LAZY']

// Find out if some numbers are divisible by 7
nums.some(num => num % 7 === 0)
// answer true

// Find out if some words have the letter a in them
panagram.some(word => word.includes('a')) 
// answer true

// Add all the numbers in the array together using the reduce method
nums.reduce((accumulator, currentValue) => accumulator + currentValue);
// answer 55

// concatenate all the words using reduce
panagram.reduce((accumulator, words) => accumulator + words);
// answer Thequickbrownfoxjumpsoverthelazydog

// Try to sort without any arguments
num.sort()
panagram.sort()
//neither one works because it has first has to be converted into a string
// Sort the numbers in ascending order
nums.sort((a, b) => a - b)
// answer [0,1,2,3,4,5,6,7,8,9,10]

// Sort the numbers in descending order
nums.sort((a, b) => b - a)
// answer [10,9,8,7,6,5,4,3,2,1,0]

// Sort the words in ascending order
panagram.sort();
//  answer ['The', 'brown',
//           'dog', 'fox',
//           'jumps', 'lazy',
//           'over', 'quick',
//           'the']

// Sort the words in descending order
panagram.sort();
panagram.reverse();
// answer [ 'the', 'quick'
//             'over', 'lazy',
//             'jumps', 'fox',
//             'dog', 'brown',
//             'The']

// test whether each letter a-z (case insensitive) is used at least once
// FOUND THIS ON STACK OVERFLOW BUT DON'T KNOW WHAT EVERYTHING IN PARENTHESIS OF REPLACE MEAN
new Set("The quick brown fox jumps over the lazy dog"
.toLowerCase()
.replace(/[^a-z]/gi, "")
.split("")
).size === 26
// answer true

const products = [
   {
     "name": "allen wrench",
     "price": 2.99,
     "description": "handy tool"
   },
   {
     "name": "cornucopia",
     "price": 5.99,
     "description": "festive holiday decoration"
   },
   {
     "name": "banana",
     "price": 0.99,
     "description": "full of potassium"
   },
   {
     "name": "guillotine (cigar)",
     "price": 10.59,
     "description": "behead your stub"
   },
   {
     "name": "jack-o-lantern",
     "price": 3.99,
     "description": "spooky seasonal fun"
   },
   {
     "name": "doggie treat (box)",
     "price": 5.99,
     "description": "fido loves 'em"
   },
   {
     "name": "egg separator",
     "price": 3.99,
     "description": "it separates yolks from whites"
   },
   {
     "name": "LED lightbulb",
     "price": 6.55,
     "description": "It's super-efficient!"
   },
   {
     "name": "owl pellets",
     "price": 3.99,
     "description": "Don't ask what they used to be."
   },
   {
     "name": "flag",
     "price": 5.99,
     "description": "catches the breeze"
   },
   {
     "name": "hair brush",
     "price": 6.99,
     "description": "fine boar bristles"
   },
   {
     "name": "iridium (one gram)",
     "price": 19.36,
     "description": "corrosion-resistant metal"
   },
   {
     "name": "quark",
     "price": 0.01,
     "description": "Very small"
   },
   {
     "name": "turtleneck",
     "price": 19.99,
     "description": "available in black and slightly-darker black"
   },
   {
     "name": "kaleidoscope",
     "price": 8.25,
     "description": "tube with moving plastic pieces inside"
   },
   {
     "name": "mitt (leather)",
     "price": 15,
     "description": "regulation sized"
   },
   {
     "name": "nothing",
     "price": 10,
     "description": "Hey, if you pay us, we won't ask any questions."
   },
   {
     "name": "violin",
     "price": 2000,
     "description": "Talk about a JS fiddle..."
   },
   {
     "name": "yoyo",
     "price": 1,
     "description": "We had to pull some strings to get this one in."
   },
   {
     "name": "pincushion",
     "price": 1.99,
     "description": "You'll get 'stuck' on it"
   },
 ]
// filter for products with a price that is less than 10
products.filter(product=>product.price<10);
// worked!

// sort alphabetically by product name
// DIDN'T GET THE CORRECT ANSWER. COPIED FROM STACK OVERFLOW AN HONESTLY HAVE NO IDEA WHAT I WAS DOING.
products.sort(function(a, b){
 if(a.firstname < b.firstname) { return -1; }
 if(a.firstname > b.firstname) { return 1; }
 return 0;
})

