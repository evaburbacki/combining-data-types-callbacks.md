// // Write a ~1 sentence summary for each one
// DRY: Don’t repeat yourself - This is probably the single most fundamental tenet in programming is to avoid repetition. 

// KISS: (Keep it simple, stupid!) Simple code takes less time to write, has fewer bugs, and is easier to modify.

// YAGNI: (You aren’t going to need it) - You should try not to add functionality until you need it. 

// Do the simplest thing that could possibly work.

// Don't make me think: The point is that code should be easily read and understood with a minimum of effort required. 

// Write code for the maintainer: A memorable way to remember this is “Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.”

// Single responsibility principle: A component of code (e.g. class or function) should perform a single well defined task.

// Avoid premature optimization: Don’t even think about optimization unless your code is working, but slower than you want.

// Separation of concerns: Different areas of functionality should be managed by distinct and minimally overlapping modules of code. 

// Which ones surprise you (if any)?
// The one that surprises me most is "Don't make me think". I feel like I use alot of effort to read the code and still have some difficulties understanding what I'm reading or supposed to do.

// Which one is currently giving you the most struggle?
// I would have to say it's a tie between "DRY" and "KISS". That sounds ironic but I find that I get so much anxiety in writing a code that even if it seems simple, I tend to ovethink it and start repeating the same codes or functions, in turn causing a big mess and then don't know how to resolve the issue.

// Comment each line of this code and describe what it is doing. 
const f = l => {
    // this function f takes l as a parameter
      let es = 0, p = 0, c = 1, n = 0
      // there are four variables being initialized
      while (c <= l) {
      // while c is less than or equal to l 
        n = c + p;
        // set n to the sum of c+p
        [c, p] = [n, c]
        // reassign c to be n and p to be c
        es += (c % 2 === 0) ? c : 0
        // es is equivalent to c modulus 2 equaling 0, returning the value of c equaling 0.
      }
      return es
      // return es
    }
    
    console.log(f(55))
    // print the code