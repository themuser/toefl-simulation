
// Initialize firebase
var config = {
	apiKey: "AIzaSyCUgmv4uQThNHznAkXroGiobZshjSutsHE",
	authDomain: "toefl-7cdb8.firebaseapp.com",
	databaseURL: "https://toefl-7cdb8.firebaseio.com",
	storageBucket: "toefl-7cdb8.appspot.com",
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();



// Date util
Date.prototype.format = function(f) {
	if (!this.valueOf()) return " ";

	var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
	var d = this;

	return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
		switch ($1) {
			case "yyyy": return d.getFullYear();
			case "yy": return (d.getFullYear() % 1000).zf(2);
			case "MM": return (d.getMonth() + 1).zf(2);
			case "dd": return d.getDate().zf(2);
			case "E": return weekName[d.getDay()];
			case "HH": return d.getHours().zf(2);
			case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
			case "mm": return d.getMinutes().zf(2);
			case "ss": return d.getSeconds().zf(2);
			case "a/p": return d.getHours() < 12 ? "오전" : "오후";
			default: return $1;
		}
	});
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

// Send http request
function searchDictionary(keyword, callback)
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200){			
			callback(xmlHttp.responseText);
		}
	}
    xmlHttp.open("GET", "https://wordsapiv1.p.mashape.com/words/" + keyword + "/synonyms", true); // true for asynchronous 
    xmlHttp.setRequestHeader('X-Mashape-Key', 'YWD14COAvemshlYrrjlbtPhxh8sAp1js4Z5jsnFilBPwsvXw25');
    xmlHttp.send(null);
}


// Shortcut key disable
function click() {
	if(event.oncontextmenu == true){
		alert('oncontextmenu');
		return false;
	}


	if(event.ondragstart == true){
		alert('ondragstart');
		return false;
	}


	if(event.onselectstart == true){
		alert('onselectstart');
		return false;
	}
	event.ondragstart = false;
}

function keypressed(){
	var key=event.keyCode;

	if (event.ctrlKey == true ){
		alert('Ctrl키는 사용불가능 합니다.');
		return false;
	}


	if (event.altKey == true ){
		alert('Alt키는 사용불가능 합니다.');
		return false;
	}


	if (key == 93){
		alert('메뉴키는 사용불가능 합니다.');
		return false;
	}
}

// Stack
function Stack(){
	this.stac=new Array();
	this.pop=function(){
		return this.stac.pop();
	}
	this.push=function(item){
		this.stac.push(item);
	}
}



// paste
function paste(e) {
	var clipboardData, pastedData;

    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();

    // Get pasted data via clipboard API
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text');

    // Do whatever with pasteddata
    alert(pastedData);
}
// document.getElementById('textarea').addEventListener('paste', paste);


