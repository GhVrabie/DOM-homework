
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

let b4 = document.querySelector(".b-4");
let out4 = document.querySelector(".bg4-orange");

b4.onclick = function(f4) {
    out4.classList.toggle("orange");
}


// Exercise 5

let b5 = document.querySelector(".b-5");
let out5 = document.querySelector(".out-5");

b5.onclick = function(f5) {
    out5.innerHTML = out4.classList.contains("bg4-orange");
}


// Exercise 6

let b6 = document.querySelector(".b-6");
let out6 = document.querySelector(".out-6");
let paragraphs = document.querySelectorAll(".p-6");

b6.onclick = function(f6) {
    out6.innerHTML = document.getElementsByClassName("p-6").length;
}


// Exercise 7

let b7 = document.querySelector(".b-7");
let out7 = document.querySelectorAll(".out-7");

b7.onclick = function(f7) {
    for(let i = 0; i < out7.length; i++) {
        out7[i].classList.add("bg-orange");
    }
}


// Exercise 8

let b8 = document.querySelector(".b-8");
let out8 = document.querySelectorAll(".out-8");

b8.onclick = function(f8) {
    for(let i = 0; i < out8.length; i++) {
        out8[i].classList.toggle("orange");
    }
}



// Exercise 9

let divs = document.querySelectorAll(".out-9")

for(let i = 0; i < divs.length; i++) {
    divs[i].onclick = function f9(e) {
        e.target.classList.add("bg-orange");
    }
}



// Exercise 10

let divsToggle = document.querySelectorAll(".bg-orange10")

for(let i = 0; i < divsToggle.length; i++) {
    divsToggle[i].onclick = function f10(e) {
        e.target.classList.toggle("orange");
    }
}



// Exercise 11

let div11 = document.createElement("div");
let b11 = document.querySelector(".b-11");

b11.onclick = function(f11) {
    div11 = "25";
    document.querySelector(".out-11").append(div11);
}


// Exercise 12

let div12 = document.createElement("div");
let b12 = document.querySelector(".b-12");
let out12 = document.querySelector(".out-12");

b12.onclick = function(f12) {
    div12.classList.add("bg-12");
    div12.innerHTML = "12";
    document.querySelector(".out-12").appendChild(div12);
}


// Exercise 13

let div13 = document.createElement("div");
let b13 = document.querySelector(".b-13");
let out13 = document.querySelector(".out-13");

b13.onclick = function(f13) {
    div13.classList.add("bg-orange");
    div13.innerHTML = "pushMe";
    document.body.append(div13);
}

div13.onclick = function(f13_1) {
    document.querySelector(".out-13").appendChild(div13);
}


// Exercise 14

let div14 = document.createElement("div");
let b14 = document.querySelector(".b-14");
let out14 = document.querySelector(".out-14");

b14.onclick = function(f14) {
    div14.classList.add(".bg-orange");
    div14.innerHTML = "14";
    document.querySelector(".out-14").append(div14);
}


// Exercise 15

let div15 = document.createElement("div");
let b15 = document.querySelector(".b-15");
let out15 = document.querySelector(".out-15");

b15.onclick = function(f15) {
    div15.classList.add(".bg-orange");
    div15.innerHTML = "15";
    out15.parentNode.insertBefore(div15, out15);
}


// Exercise 16

let div16 = document.createElement("div");
let b16 = document.querySelector(".b-16");
let out16 = document.querySelector(".out-16");

b16.onclick = function(f16) {
    div16.classList.add(".bg-orange");
    div16.innerHTML = "16";
    out16.parentNode.insertBefore(div16, out16.nextSibling);
}


// Exercise 17

let div17 = document.createElement("div");
let b17 = document.querySelector(".b-17");
let out17 = document.querySelector(".out-17");

b17.onclick = function(f17) {
    div17.classList.add(".bg-orange");
    div17.innerHTML = "17";
    out17.replaceWith(div17);
}


// Exercise 18

let b18 = document.querySelector(".b-18");
let out18 = document.querySelector(".out-18");

b18.onclick = function(f18) {
    let getAtt = document.querySelector(".p-18").getAttribute("data");
    out18.innerHTML = getAtt;
}



// Exercise 19

let b19 = document.querySelector(".b-19");

b19.onclick = function(f19) {
    let out19 = document.querySelector(".out-19");
    let p19 = document.querySelectorAll(".p-19");
    let data = "";
    for (let i = 0; i < p19.length; i++) {
        data += p19[i].getAttribute("data") + " ";
    }
        out19.innerHTML = data;
}



// Exercise 20

let b20 = document.querySelector(".b-20");
let out20 = document.querySelector(".out-20");

b20.onclick = function(f20) {
    out20.setAttribute("title", "go");
    console.log(out20);
}



// CLASSWORK EXAMPLES

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