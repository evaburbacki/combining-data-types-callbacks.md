// // // Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    crayons: ['carnation pink', 'blue violet', 'dandelion']
  }
    console.log(crayonBox.crayons[1])
  
  // // // Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
  const bottle = {
      cap: {
        material: 'plastic',
        color: 'white'
      } 
    }
    console.log(bottle.cap.color)
  
  // // // Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
  const receipt = [
      {name: 'lipstick', price: 20}, 
      'mascara 30', 'gloss 15']
    console.log(receipt[0].name)
  
  // // // Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
  const apartmentBuilding =['123 Main Street'
    ['Sam', 'Ethan', 'Yoni', 'Zarina', 'George']
  ];
  console.log(apartmentBuilding[2]);
  
  // // Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
  const knit = () => {
    return {
      item: 'scarf',
      size: '10 sq ft'
    }
  };
  console.log(knit().size);
  
  // // Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
  const crayonSelector = () => {
    return {
      crayons: ['carnation pink', 'blue violet', 'dandelion']
    }
  };
  console.log(crayonSelector().crayons[1]); 
  
  // // Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
  const powerButton = () => {
    return options = () => {
      console.log("select a song");
    }
  // // a vending machine is an object
  // // it has an array of snacks (make 3 snacks)
  // // snacks are objects that have a name and a price
  // // a vending machine has a function vend that allows // user to enter the array position (a number) of 
  // // the  snack and then that snack will be returned
  // // Be able to call vendingMachine.vend() with a 
  // // valid integer to return a snack
  // // I DON'T THINK I DID THIS CORRECTLY!
  const vendingMachine = {
    snacks : [{name:'Doritos', price: 2},
              {name: 'Cheetos', price: 1},
              {name: 'Snickers', price: 1} ],
    ven: function(num){
      return vendingMachine.snacks[num]
    }
  };
  vendingMachine.vend(2)
  
  // // Callbacks
  // // Make a function add that takes two arguments (numbers) and sums them together
  const add = (num1, num2) => {
      return num1 + num2;
    }
  
  // // Make a function subtract that takes two arguments (numbers) and subtracts them
  const subtract = (num1, num2) => {
    return num1 - num2;
  }
  
  // // Make a function multiply that takes two arguments and multiplies them
  const multiply = (num1, num2) => {
    return num1 * num2;
  }
  // // Make a function divide that takes two arguments and divides them
  const divide = (num1, num2) => {
    return num1 % num2;
  }
  // // Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
  const calculate = (num1, num2, operates) => {
    return (operates(num1, num2))
  }
  // // Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
  // // Call calculate 4 times, each time using one of the operation functions you wrote
  // // DON'T KNOW ABOUT THIS EITHER..?!
  calculate(1, 2, add);  
  calculate(4, 3, subtract);  
  calculate(5, 6, multiply); 
  calculate(19, 8, divide); 
  };
  
  // // Clean up this code, so that it works and has function definitions in the correct place
  // // bar();
  // // const bar = () => {
  // //     console.log('bar here');
  // // }
  // // foo();
  // // const foo = () => {
  // //     console.log('foo here');
  // // }
  const bar = () => {
    console.log('bar here');
  }
  bar();
  
  const foo = () => {
    console.log('foo here');
  }
  foo();
  
  // What is meant by the error(s) this produces?
  // I am getting a syntax error because there is a missing initializer.
  // foo();
  // const foo ()=>{
  //     console.log('hi');
  // }
  // /home/runner/combiningdatatypes/index.js:122
  // const foo ()=>{
  //       ^^^
  // SyntaxError: Missing initializer in const declaration
  
  // The correct code needs to be like this:
  const foo = () => {
    console.log('hi');
  }
  foo();