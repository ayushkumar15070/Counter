let Increase = document.getElementById("increment")
let Decrease = document.getElementById("decrement")
let Reset = document.getElementById("reset")

let counter = 0;

Increase.addEventListener("click", function () {
      counter += 1;
      document.getElementById("counter").innerHTML = counter;
})

Decrease.addEventListener("click", function () {
      counter -= 1;
      document.getElementById("counter").innerHTML = counter;
})

Reset.addEventListener("click", function () {
      counter = 0;
      document.getElementById("counter").innerHTML = counter;
})

