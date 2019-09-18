/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global / Window Binding -When in the Global Scope, the value of *this* will be the window/console object.  

* 2. Implicit Binding - *this* is pointing to the object it is placed in.  Pointing to the left of the dot when the function is invoked.  

* 3. New Binding - In JS, when a constructor function is used, the *new* keyword creates a new object, *this* refers to that object. 


* 4. Explicit Binding - When the JS’s call or apply method is used, *this* is explicitly defined. *this* tells the JS engine to point to a certain value.



*
* write out a code example of each explanation above
*/

// Principle 1
//GLobal / Window Binding
console.log(this);
// code example for Window Binding

// Principle 2
const book = {
name:'The Hobbit',
protagonist:'Bilbo Baggins',
antagonist:'Smaug the Dragon',
blurb: function(){
    console.log(`In the story of, ${this.name}, ${this.protagonist} overcomes the evil of ${this.antagonist}.`)
}
}
console.log(book.blurb());
// code example for Implicit Binding

// Principle 3
function Spirit(ferments){
    this.activity = ferments;
}
let ale = new Spirit('An original gravity reading of 1.055, and a final gravity of 1.010, a 5.8% abv ale should be produced.');

console.log(ale.activity)


// Principle 4

// code example for Explicit Binding