import { alertTest } from "./alert-test.js";
import { getData, createCat } from "./api.js";
// alertTest();


const cats = await getData(); // her kalder jeg php serveren gennem funktionen fra api.js filen.
console.log(cats);


document.getElementById("color").addEventListener("input", (e) => {
    const value = e.target.value;
    // console.log(value);
    document.getElementById("counter").innerText = value.length;

    // console.log(value.length);
    if (value.length > 10) {
        alert("Max 10 tegn")
        document.getElementById("color").value = value.substr(0,10);
    }  
})


document.getElementById("cat-form").addEventListener("submit", (event) => {
    event.preventDefault() // stopper standard opførslen, hvor browseren reloader siden

    const name = document.getElementById("name").value
    //const name2 = event.target[0].value; // henter også name
    const color = document.getElementById("color").value
    // const phone = document.getElementById("phone").value

    // console.log(name, email, phone)

    if (name === "") {
        alert("Der mangler et navn")
    } else if (color === "") {
        alert("Der mangler color")
    } else {
        createCat(name, color);
    }
    // if (phone === "") {
    //     alert("Der mangler phone")
    // }

    addCatToDOM(name, color)    

    //console.log(event.target["name"].value);


})

function addCatToDOM(name, color) {
    let catHtml = document.getElementById("cat"); 
    let clon = catHtml.content.cloneNode(true);
    
    // Sætter jeg den studerendes værdier ind i klonen af templaten
    clon.querySelector(".name").innerText = name;
    clon.querySelector(".color").innerText = color;
    // clon.querySelector(".phone").innerText = phone;

    // indsætter vi templaten i html dokumentet (så brugeren kan se den)
    document.getElementById("cats").appendChild(clon);
}

const price = 250;

const studentName1 = 'Dayan';
const studentEmail1 = 'dayan@dayan.dk';

const studentName2 = 'Caroline';
const studentEmail2 = 'caroline@caroline.dk';

// js objekt
const student1 = {
    name: 'Dayan',
    email: 'dayan@dayan.dk',
    phone: '12345678'
}


let myName = "Christian";
myName = "Maria";


//js objekt
const student2 = {
    name: 'Pavla',
    email: 'pavla@pavla.dk',
    phone: '87654321'
}

student2.name = 'Emil';

// js array med strings
const names = ['Maria', 'Pavla', 'Caroline', 'Persian'];
names.push("Emil")

// js array med objekter
// const students = [student1, student2];
// console.log(names);
// console.log(students);

// console.log(students[0]); // 0 indexed
// console.log(students[1].name); // 0 indexed

cats.forEach((cat) => {
        addCatToDOM(cat.name, cat.primarycolor)
})

// 1: Lægge flower objekter i array
// 2: Loop igennem array og console.log() hvert objekt

document.getElementById("add").addEventListener("click", () => {
    
    let count = Number(document.getElementById("count").innerText);
    count++;
    document.getElementById("count").innerText = count;

    document.getElementById("total").innerText = count * price + " kr"
});

document.getElementById("remove").addEventListener("click", () => {
    let count = Number(document.getElementById("count").innerText);
    if (count > 0) {
        count--;
        document.getElementById("count").innerText = count;
        document.getElementById("total").innerText = count * price + " kr"
    }
});