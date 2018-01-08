// close the div in 9 seconds

window.setTimeout("closeAnimationDiv();", 9000);

function closeAnimationDiv(){
    document.getElementById("text-animation").style.display="none";
}