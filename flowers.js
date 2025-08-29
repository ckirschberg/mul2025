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
    // html template som hedder student, som definerer en studerende i html
    let studentHtml = document.getElementById("student"); 
    // console.log(studentHtml);
    
    // opretter en kopi fordi jeg skal have en templates indhold per student
    let clon = studentHtml.content.cloneNode(true);
    // console.log(clon);
    
    // udvælger navnet, email og phone
    let pName = clon.querySelector(".name");
    let pEmail = clon.querySelector(".email");
    let pPhone = clon.querySelector(".phone");

    // Sætter jeg den studerendes værdier ind i klonen af templaten
    pName.innerText = student.name;
    pEmail.innerText = student.email;
    pPhone.innerText = student.phone;

    // indsætter vi templaten i html dokumentet (så brugeren kan se den)
    document.getElementById("students").appendChild(clon);
    
    // console.log(element);
    // alert("Now calling " + element.tlf + " to speak with " + element.name)
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