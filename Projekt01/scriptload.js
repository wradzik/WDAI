window.onload = function() {
    setTimeout(function() {
        window.location.href = "mainpage.html";
    }, 3000);
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
};

