'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/**
 * Displays the movements of money in the UI.
 *
 * @param {Array<number>} movements - The array of financial transactions to be displayed.
 */
const displayMovements = function (movements) {
  // clear the container
  containerMovements.innerHTML = '';
  // for each movement, create a new div and insert it into the container
  const displayOne = function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  };
  movements.forEach(displayOne);
};

displayMovements(account1.movements);

const createUsernames = function (accs) {
  // for every account holder in the accounts array, compute the username attribute from the full name of the account owner

  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// --- USING MAP /////

const movementDescriptions = movements.map(
  (transact, index) =>
    `You ${transact > 0 ? 'deposited' : 'withdrew'} ${transact}`
);

console.log(movementDescriptions);

//  ----- USING FOR EACH ---------------------

// const moveMoney = function (movement, index) {
//   const msg =
//     movement > 0
//       ? `deposit of ${movement}`
//       : `you withdrew ${Math.abs(movement)}`;
//   console.log(`Transaction ${index}:` + msg);
// };

// //forEach loops over and calls the function once for every element in the array, passing in the element as that function's one arg.
// // if you give the callback func 2 args then the forEach function passes the current index as the second arg.
// movements.forEach(moveMoney);

/////////////////////////////////////////////////

const eurToUSD = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUSD);

console.log(movements);
console.log(movementsUSD);
