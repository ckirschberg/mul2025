const price = 250;

const studentName1 = 'Dayan';
const studentEmail1 = 'dayan@dayan.dk';

const studentName2 = 'Caroline';
const studentEmail2 = 'caroline@caroline.dk';

// js objekt
const student1 = {
    name: 'Dayan',
    email: 'dayan@dayan.dk',
    tlf: '12345678'
}

const student2 = {
    name: 'Pavla',
    email: 'pavla@pavla.dk',
    tlf: '87654321'
}

const names = ['Maria', 'Pavla', 'Caroline', 'Persian'];
names.push("Emil")


const students = [student1, student2];
// console.log(names);
// console.log(students);

// console.log(students[0]); // 0 indexed
// console.log(students[1].name); // 0 indexed

students.forEach((element) => {
    console.log(element);
    alert("Now calling " + element.tlf + " to speak with " + element.name)
})



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