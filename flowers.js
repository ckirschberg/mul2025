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