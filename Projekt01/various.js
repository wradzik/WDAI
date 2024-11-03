window.onload = function(){
    document.addEventListener("keydown", (event) => {
    if (event.keyCode === 82) {
        window.location.href = "index.html";
    }
});
    document.addEventListener("keydown", (event) => {
    if (event.keyCode === 66) {
        document.getElementById("bod").className = "blu";
        console.log("is blu");  
    }
});
    document.addEventListener("keydown", (event) => {
    if (event.keyCode === 80) {
        document.getElementById("bod").className = "pik";
        console.log("is pink");
    }
});
}
