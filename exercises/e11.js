// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  let totalWith = [];
  for(let i = 0; i< array.length;  i++){
   let amount = 0;
   if(array[i].withdrawals){
      for(let j = 0; j< array[i].withdrawals.length; j++){
         amount += array[i].withdrawals[j];
      }
      totalWith.push(amount);
   } else {
      totalWith.push(0)
   }
   }
   return totalWith;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
