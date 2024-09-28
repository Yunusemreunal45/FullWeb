let sonuc;

sonuc = document.all;
sonuc = document.all[6];
sonuc = document.documentElement;

sonuc = document.body;
sonuc = document.doctype;
sonuc = document.URL;

sonuc = document.forms;

// Tekli element seçimi

sonuc = document.getElementById("Title");
sonuc = document.getElementById("Title").id;
sonuc = document.getElementById("Title").classList;

document.getElementById("Title").style.fontSize = "40px";
document.getElementById("Title").style.color = "blue";

document.getElementById("Title").innerText = "Alışveriş Listesi";
document.getElementById("Title").innerHTML = "<p>Hepsi Burada</p>";

sonuc = document.querySelector(".container2");

sonuc = document.querySelector("#Title").id;
sonuc = document.querySelector("input[type='text']");

sonuc = document.querySelector("li:nth-child(2)").innerText = "eleman 2";
sonuc = document.querySelector("li:nth-child(2)").style.color = "red";
console.log(sonuc);

const parentElement = document.querySelector("ul");
firstElement = parentElement.querySelector("li");
firstElement.style.color = "pink";

console.log(firstElement);

// coklu item seçimi
// let sonuc1;
// sonuc1 = document.getElementsByClassName("potter");
// items = document.getElementsByClassName("potter");

// for (let i = 0; i < items.lenght; i++) {
//   console.log(items[i]);
// }

const items = document.querySelectorAll("#potter");

for (let item of items) {
  item.style.color = "blue";
  item.style.fontSize = "20px";
}
