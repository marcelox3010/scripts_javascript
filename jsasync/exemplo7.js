setTimeout(myFunction, 3000);

console.log("oi...")

function myFunction() {
  console.log("I love You !!");
}

setTimeout(function() { myFunction2("I love You 2!!!"); }, 6000);

function myFunction2(value) {
  console.log(value);
}