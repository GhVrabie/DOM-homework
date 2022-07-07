// let one = document.querySelector(".one");

// one.style.width = "150px";
// one.style.paddingBottom = "40px";

// one.classList.add("two", "three");
// one.classList.remove("three");

// let toggle = document.querySelector(".toggle");

// toggle.onclick = function() {
//     this.classList.toggle("three");
// }

// // дата атрибуты - работают только если их вывести в console.log допустим

// console.log(one.getAttribute("data"));
// console.log(document.querySelectorAll("link")[1].getAttribute("href"));

// one.setAttribute("data-num", 8);


// const buttons = document.querySelectorAll(".gaz");

// buttons.forEach(item  => {
// item.onclick = function() {
//     let gallons = document.querySelector(".gallons").value;
//     let ammount = this.getAttribute("data");
//     console.log(gallons * ammount);
//     }
// })

// let a = document.createElement("div");
// a.classList.add("one");
// a.innerHTML = "Hello";
// a.onclick = function() {
//     alert("Hello");
// }

// document.querySelector(".test").appendChild(a);
// console.log(a);


// Exercise 1

let b1 = document.querySelector(".b-1");
let out1 = document.querySelector(".out-1");

b1.onclick = function() {
    out1.style.width = "200px";
    out1.style.height = "90px";
}


// Exercise 2

let b2 = document.querySelector(".b-2");
let out2 = document.querySelector(".out-2");

b2.onclick = function(f2) {
    out2.classList.add("bg-orange");
}


// Exercise 3

let b3 = document.querySelector(".b-3");
let out3 = document.querySelector(".out-3");

b3.onclick = function(f3) {
    out3.classList.remove("bg-orange");
}


// Exercise 4

let divToggle = document.querySelector(".toggle");

divToggle.onclick = function(f4) {
    this.classList.toggle("bg-orange");
}