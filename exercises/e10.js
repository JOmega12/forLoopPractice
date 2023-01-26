// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let nameWithLetter = [];
  for(let i =0; i < array.length; i++){
     // console.log(array[i].name.length)
     for(let j =0; j< array[i].name.length; j++){
        // console.log(array[i].name[j].toLowerCase())
        if(array[i].name[j].toLowerCase() === letter){
           nameWithLetter.push(array[i].name)
        }
        
     }

  }
  return nameWithLetter;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
