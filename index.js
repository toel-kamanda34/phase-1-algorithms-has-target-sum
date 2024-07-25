
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}
/* 
   Big O time complexity: O(n^2)
  n - length of the input array
*/

/* 
1. Start with the first number in the list.
2. Add it to every other number that comes after it, one by one.
3. If any of these pairs add up to our target number, we've found what we're looking for! We can stop and say "Yes, we found it!"
4. If we didn't find a match, move to the second number and repeat steps 2-3.
5. Keep doing this until we've tried all possible pairs.
6. If we go through everything and don't find a match, we have to say "Nope, couldn't find it."

*/

/*
I'm picking up each card, one at a time, and adding it to every other card on the table.
If I find two cards that add up to our target number, great! I stop there and say "found a match."
If I go through all the cards and can't find a pair that adds up to my target, then I have to say there isn't a match.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

   // Additional test cases
   console.log("");
   console.log("Expecting: true");
   console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  
   console.log("");
   console.log("Expecting: false");
   console.log("=>", hasTargetSum([4], 5));
}

module.exports = hasTargetSum;
