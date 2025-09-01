import { alertTest } from "./alert-test.js";

// alertTest();

document.getElementById("student-form").addEventListener("submit", (event) => {
    event.preventDefault() // stopper standard opførslen, hvor browseren reloader siden

    const name = document.getElementById("name").value
    //const name2 = event.target[0].value; // henter også name
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value

    console.log(name, email, phone)

    if (name === "") {
        alert("Der mangler et navn")
    }
    if (email === "") {
        alert("Der mangler email")
    }
    if (phone === "") {
        alert("Der mangler phone")
    }


    if (name !== "" && email !== "" && phone !== "") {
        addStudentToDOM(name, email, phone)
    }
    //console.log(event.target["name"].value);


})

function addStudentToDOM(name, email, phone) {
    let studentHtml = document.getElementById("student"); 
    console.log(name, email, phone);
    
    
    // opretter en kopi fordi jeg skal have en templates indhold per student
    let clon = studentHtml.content.cloneNode(true);
    console.log(clon);
    
    console.log(clon.querySelector(".name"));
    
    // Sætter jeg den studerendes værdier ind i klonen af templaten
    clon.querySelector(".name").innerText = name;
    clon.querySelector(".email").innerText = email;
    clon.querySelector(".phone").innerText = phone;

    // indsætter vi templaten i html dokumentet (så brugeren kan se den)
    document.getElementById("students").appendChild(clon);
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
const students = [student1, student2];
// console.log(names);
// console.log(students);

// console.log(students[0]); // 0 indexed
// console.log(students[1].name); // 0 indexed

students.forEach((student) => {
    addStudentToDOM(student.name, student.email, student.phone);
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