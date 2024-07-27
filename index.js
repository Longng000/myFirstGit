"use strict"; 
//  let use the word "hello" as an example for this arrow function 
function convUpperCaseDeclarative(value) {
    return value.toUpperCase();
}
console.log(convUpperCaseDeclarative('hello'));  

const convUpperCaseExpression = function(value) {
    return value.toUpperCase();
};
console.log(convUpperCaseExpression('hello'));  

const convUpperCaseArrow = value => value.toUpperCase();
console.log(convUpperCaseArrow('hello')); 