setInterval(updateClock, 1000);	

function updateClock() {
	
	var myDate = new Date();
	var myHours = myDate.getHours();
	var myMinutes = myDate.getMinutes();
	var mySeconds = myDate.getSeconds();

	if(myHours < 10)   { myHours = "0" +  myHours; }
	if(myMinutes < 10) { myMinutes = "0" + myMinutes; }
	if(mySeconds < 10) { mySeconds = "0" + mySeconds; }

	var myClock = myHours + ":" + myMinutes + ":" + mySeconds;

	document.getElementById("clock").innerText = myClock;
}