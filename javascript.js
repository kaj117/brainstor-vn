function tigger() {
    var clientWidth = document.getElementById('main-container').clientWidth;
    var footerHeight = document.getElementById('footer-box').clientHeight;

    var borderWidth = clientWidth * 0.008;
    var footerFont = footerHeight * 0.5;

    document.getElementById("circle").style.borderWidth = borderWidth.toString() + "px";
    document.getElementById("footer-box").style.borderWidth = borderWidth.toString() + "px";
    document.getElementById("footer-box").style.fontSize = footerFont.toString() + "px";
    for (i = 1; i < 8; i++) {
        var value = "frame" + i.toString();
        document.getElementById(value).style.borderWidth = borderWidth.toString() + "px";
    }
}