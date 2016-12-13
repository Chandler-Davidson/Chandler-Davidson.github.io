(function updateTime()
 {
    var date = new Date();
    var ts = date.toLocaleTimeString('en-GB');
    var hex = "#" + ts.replace(/:/g, '');
    
    document.getElementById("#time").innerHTML="<h1>" + ts + "</h1>";
    document.getElementById("#hex").innerHTML="<h2>" + hex + "</h2>";

    document.body.style.backgroundColor = hex;
    setTimeout(arguments.callee, 1000);
})();