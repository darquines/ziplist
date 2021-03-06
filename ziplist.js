let test1 = ['b','a','c','d'];
let test2 = [1,2,3,4];

function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));