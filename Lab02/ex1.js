function timesetter(place){
    if(document.getElementById("textwrapper").getAttribute("data-run")!="True"){
        return;
    }
    rn = parseInt(document.getElementById("textwrapper").getAttribute("data-time"));
    if (rn < 60){
        place.innerHTML = rn + "s";
        rn++;
        document.getElementById("textwrapper").setAttribute("data-time", rn);
        setTimeout(function(){timesetter(place)}, 1000);
    }
    else{
        place.innerHTML = (rn-rn%60)/60 +"min"+ (rn%60) + "s";
        rn++;
        document.getElementById("textwrapper").setAttribute("data-time", rn);
        setTimeout(function(){timesetter(place)}, 1000);
    }
}


document.getElementById("startbutton").onclick = function(){
    document.getElementById("textwrapper").setAttribute("data-run", "True");
    timesetter(document.getElementById("textwrapper"))
};

document.getElementById("stopbutton").onclick = function(){document.getElementById("textwrapper").setAttribute("data-run", "False")};

document.getElementById("resetbutton").onclick = function(){
    document.getElementById("textwrapper").setAttribute("data-run", "False");
    document.getElementById("textwrapper").setAttribute("data-time", 0);
    document.getElementById("textwrapper").innerHTML = 0 + "s";
};