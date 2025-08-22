


document.getElementById("btnCalculate").addEventListener("click", () => {
    const km = document.getElementById("km").value // vi opretter en konstant
    const minutes = document.getElementById("minutes").value // vi opretter en konstant

    const speed = km / (minutes/60);

    document.getElementById("output").innerHTML = speed + " km/t"
})