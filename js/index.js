const colorTime = ts => `#${ts.replace(/:/g, '')}`;

const updateTime = () => {
	var date = new Date();
	var ts = date.toLocaleTimeString('en-GB');
	var hex;

	if (document.getElementById("choice_1"))
		hex = colorTime(ts);
	else if (document.getElementById("choice_1"))
		hex = colorTime(ts);
	else
		hex = none;

	document.getElementById("#time").innerHTML="<h1>" + ts + "</h1>";
    document.getElementById("#hex").innerHTML="<h2>" + hex + "</h2>";

    document.body.style.backgroundColor = hex;
}

updateTime();
setInterval(updateTime, 1000);