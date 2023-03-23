/////The challenge is to see if there are any duplicates in an array/////////


const exampleTrue = [1, 2, 3, 3, 4, 5, 6];
const exampleFalse = [1, 2, 3, 4, 5];

///// first attempt //////////
function hasDupes(arr) {
  let answer = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {            ///////This obviously answers the question "does this array have dupes?" but
      if (arr[i] === arr[j]){                             ///////it doesn't meet the time complexity leet code wants so...... try again
        answer = true;
      }
    }
  } return answer;
}



///// second attempt ////////
function dupeCheck(arr) {
  let dupeless = new Set();
  let answer = false;
  for (let i = 0; i < arr.length; i++) {
    dupeless.has(arr[i]) ? answer = true : dupeless.add(arr[i]);        ////////This one meets the time complexity requirements and gives
  }                                                                     ////////the correct output
  return answer;              
}



console.log(dupeCheck(exampleTrue));
console.log(dupeCheck(exampleFalse));