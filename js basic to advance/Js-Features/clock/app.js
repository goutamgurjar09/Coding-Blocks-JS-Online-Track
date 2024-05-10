let timer = document.getElementById("timer");
setInterval(() => {
    let date = new Date();
    timer.innerHTML = date.toLocaleTimeString();
}, 1000);