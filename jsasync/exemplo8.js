setInterval(myFunction, 500);

function myFunction() {
  let d = new Date();
  console.log(
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds()
  )
}

for(let i = 1; i < 2000 ; i++) console.log("fim...?:" + i)