function checkTime(i) {
    while (i < 10) { 
        i = "0" + i 
    };  // add zero in front of numbers < 10
    return i;
}

function carregar() {

    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours(data.setHours(-12));


    if (hora >= 0 && hora < 12) {
        img.src = "./images/mars1.png" // Good Morning, Commander!! Time to kill!!
        document.body.style.background = "#fde07b";

    } else if (hora >= 12 && hora <= 18) {
        img.src = "./images/mars2.png"; // Good Afternoon, Commander!! Time to stay alert!!
        document.body.style.background = "#dd7e69";

    } else {
        img.src = "./images/mars3.png";  // Good Night, Commander!! Time to withdraw!! */
        document.body.style.background = "#252338";
    }


    var m = data.getMinutes();
    var s = data.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    
    msg.innerHTML = `Now it's <strong> ${hora}:${m}:${s} </strong> on Mars`;
    var t = setTimeout(carregar, 500);

    

}




