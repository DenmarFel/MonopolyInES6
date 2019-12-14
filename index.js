function rotate(){
    
    if (document.getElementById("board").style.transform == "") {
        document.getElementById("board").style.transform = "rotate(90deg)";
    } else if (document.getElementById("board").style.transform == "rotate(90deg)") {
        document.getElementById("board").style.transform = "rotate(180deg)";
    } else if (document.getElementById("board").style.transform == "rotate(180deg)") {
        document.getElementById("board").style.transform = "rotate(270deg)";
    } else {
        document.getElementById("board").style.transform = "";
    }
};

document.getElementById("rotate").addEventListener("click", rotate);