
a = [1,2,3,4,5,6,7,8,9,10]

/*
function maiorQue5(x){ 
    return  x >= 5
}

console.log(a.map(maiorQue5))
*/


console.log(maiorQue5(a, (x)=>x>=5))

function maiorQue5(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
      if (callback(x)) {
        myArray.push(x);
      }
    }
    return myArray;
  }
