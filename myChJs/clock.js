const colockdiv = document.querySelector(".clock")


function clock() {
    const time = new Date();
    const h = String(time.getHours()).padStart(2,"0")
    const m = String(time.getMinutes()).padStart(2,"0");
    
    colockdiv.innerText = `${h}:${m}`



}

clock();

setInterval(clock, 1000);


