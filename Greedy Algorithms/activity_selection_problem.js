let activities = {
    1: { start: 1, finish: 3 },
    2: { start: 4, finish: 6 },
    3: { start: 2, finish: 5 },
    4: { start: 5, finish: 8 },
    5: { start: 6, finish: 7 },
    6: { start: 8, finish: 10 },
    7: { start: 9, finish: 11 },
    8: { start: 10, finish: 12 },
    9: { start: 13, finish: 15 },
    10: { start: 14, finish: 16 }
  };
  

let arr = Object.values(activities);

arr.sort((a, b) => a.finish - b.finish);

let prev = arr[0];
console.log(prev);
for (let activity of arr) {
  if (activity.start >= prev.finish) {
    console.log(activity);
    prev = activity;
  }
}


// Output: 
// [
//     { start: 1, finish: 3 },  // Activity 1
//     { start: 4, finish: 6 },  // Activity 2
//     { start: 6, finish: 7 },  // Activity 5
//     { start: 8, finish: 10 }, // Activity 6
//     { start: 10, finish: 12 }, // Activity 8
//     { start: 13, finish: 15 }  // Activity 9
//   ]
  