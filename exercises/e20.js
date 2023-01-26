
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let nameA = [];
  let nameB = [];
  let totalName = [];
  for(let i = 0; i< array.length; i++) {
     let nameWithA = false
     for(let j = 0; j< array[i].length; j++){
        if(array[i][j] === 'a'){
           nameWithA = true;
        } 
     }
     if(nameWithA) {
        nameA.push(array[i]);
     } else {
        nameB.push(array[i]);
     }
  }
  totalName.push(nameA);
  totalName.push(nameB);
  return totalName;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
