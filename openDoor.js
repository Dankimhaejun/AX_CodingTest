const openDoor = (doors, people) => {
  let doorsArr = new Array(doors + 1).fill(false);

  for (let i = 1; i <= people; i++) {
    for (let j = i; j <= doors; j = j + i) {
      if (doorsArr[j] === true) {
        doorsArr[j] = false;
      } else {
        doorsArr[j] = true;
      }
    }
  }
  console.log('doorsArr', doorsArr);
  return doorsArr.filter(ele => ele === true).length;
};
console.log(openDoor(50, 2));
// const openDoor = function(doors, people) {
//   let doorsArr = new Array(doors + 1).fill(false);
//   let person = 1;
//   let makeTrue = (doors, people, i) => {
//     if (i <= people) {
//       if (doorsArr[i] === true) {
//         doorsArr[i] = false;
//       } else {
//         doorsArr[i] = true;
//       }
//       person++;
//       makeTrue(doors, people, i + 1);
//       console.log('i', i);
//     }
//     while (i <= people) {
//       if (doorsArr[i] === true) {
//         doorsArr[i] = false;
//       } else {
//         doorsArr[i] = true;
//       }
//       i = i + person;
//     }
//   };
//   console.log('doorsArr', doorsArr);
//   makeTrue(doors, people, 1);
//   console.log('doorsArr', doorsArr);
// };
