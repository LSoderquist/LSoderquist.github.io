var i = 0;
var txt = 'Hi, I\'m Luke Soderquist';

function typewriter() {
    if (i < txt.length) {
        document.getElementById("name").innerHTML += txt.charAt(i);
        if (txt.charAt(i) == 'm') {
            document.getElementById("name").innerHTML += '</br>'
        }
        i++;
        setTimeout(typewriter, 100);
    }
}