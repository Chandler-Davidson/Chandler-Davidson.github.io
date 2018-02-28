const colorTime = ts => `${ts.replace(/:/g, '')}`;

const updateTime = () => {
	var date = new Date();
	var ts;
	var hex;

	// Assign locale on radio button
	if (document.getElementById('choice_1').checked) {
		ts = date.toLocaleTimeString('en-GB');
		hex = '#' + colorTime(ts);
	} else if (document.getElementById('choice_2').checked) {
		ts = date.toLocaleTimeString('en-US');
		hex = colorTime(ts);
		hex = '#0' + hex.substring(0, hex.length - 2);
	} else {
		ts = date.getSeconds();
		hex = ts.toString(16);
	}
		
	// Write to doc
	document.getElementById('#time').innerHTML='<h1>' + ts + '</h1>';
    document.getElementById('#hex').innerHTML='<h2>' + hex + '</h2>';
    document.body.style.backgroundColor = hex;
}

setInterval(updateTime, 500);