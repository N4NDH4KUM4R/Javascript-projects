// Accessing DOM elements
const form = document.querySelector('form'); //form container
const expensesList = document.querySelector('#expenses'); //expenses Ul container
const totalExpenses = document.querySelector('#total-expenses');  //result Element

// Initializing state variables
let expenses = [];
let id = 0;

// add expense to the list
const addExpense = (e) => {
  e.preventDefault();             //default events overcome with using preventDefault

  // Get form values
  const description = document.querySelector('#description').value;
  const amount = parseFloat(document.querySelector('#amount').value);     //return firstNumber of the String 

  // Validation (empty values not allowed)
  if (description.trim() === '' || isNaN(amount)) {
    alert('Please enter a valid description and amount');
    return;
  }

  // Create new expense object for show output in DOM
  const expense = {
    id: id,
    description: description,
    amount: amount
  };

  // Add expense to expenses array and increment id
  expenses.push(expense);
  id++;

  // Add expense to the DOM
  const expenseEl = document.createElement('li');
  expenseEl.innerHTML =                                        /*object output showing via innerHtml */
    `<span>${expense.description}</span>          
    <span>${expense.amount.toFixed(2)}</span>
    <button class="delete-btn" data-id="${expense.id}">x</button>`;
  expensesList.appendChild(expenseEl);

  // Update total expenses
  const total = expenses.reduce((previousvalue, currentvalue) => previousvalue + currentvalue.amount, 0);
  totalExpenses.textContent = `${total.toFixed(2)}`;

  // Clear form inputs
  document.querySelector('#description').value = '';
  document.querySelector('#amount').value = '';
}

// delete(X btn) expense from the list
const deleteExpense = (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const id = parseInt(e.target.dataset.id);
    expenses = expenses.filter(expense => expense.id !== id);
    e.target.parentElement.remove();

    // Update total expenses
    const total = expenses.reduce((previousvalue, currentvalue) => previousvalue + currentvalue.amount, 0);
    totalExpenses.textContent = `${total.toFixed(2)}`;
  }
}

// Event listeners
form.addEventListener('submit', addExpense);
expensesList.addEventListener('click', deleteExpense);
