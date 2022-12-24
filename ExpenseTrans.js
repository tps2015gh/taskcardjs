// ExpenseTrans.js
import CardObject from "./CardObject.js";

class ExpenseTrans extends CardObject {
    constructor(left, top, container, expenseType, amount, title) {
      super(left, top, container);
      this.expenseType = expenseType;
      this.amount = amount;
      this.title = title;
    }
  
    getExpenseType() {
      return this.expenseType;
    }
}

// ===============================
console.log('OK1 ExpenseTrans');

//test with  
const expenseTrans = new ExpenseTrans(50, 50, 'body', 'Food', 100, 'My Expense');
console.log(expenseTrans.expenseType); // prints 'Food'
console.log(expenseTrans.amount); // prints 100
console.log(expenseTrans.title); // prints 'My Expense'
console.log(expenseTrans.getExpenseType()); // prints 'Food'

let body = document.querySelector("body");
let div1 = document.createElement("div");
div1.innerHTML = " OK ";
body.appendChild(div1);
alert("OK");

// ==================================
export default ExpenseTrans;