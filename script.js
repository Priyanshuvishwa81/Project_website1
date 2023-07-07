


let showme = () => {
    let valu = document.getElementById("link_helper");
    valu.style.animationName = 'myanimation';
    setTimeout(() => {
        document.getElementById("link_helper").style.display = "block";
        valu.style.display = 'block';
    }, 350);
}


let crossme = () => {
    let valu = document.getElementById("link_helper");
    valu.style.animationName = 'myanimation2';
    setTimeout(() => {
        document.getElementById("link_helper").style.display = "none";
        valu.style.display = 'none';
    }, 350);

}