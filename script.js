function checkTime(i) {
    while (i < 10) {
        i = "0" + i
    };  // add zero in front of numbers < 10
    return i;
}

function loading() {

    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("image");
    var date = new Date();
    var hour = date.getHours(date.setHours(-12));

    msg.innerHTML = `Now it's <strong> ${hour}h </strong> on Mars`;

    if (hour >= 0 && hour < 12) {
        img.src = "./images/mars1.png" // Good Morning!! 
        document.body.style.background = "#fde07b";

    } else if (hour >= 12 && hour <= 18) {
        img.src = "./images/mars2.png"; // Good Afternoon!! 
        document.body.style.background = "#dd7e69";

    } else {
        img.src = "./images/mars3.png";  // Good Night!!
        document.body.style.background = "#252338";
    }
    
}







