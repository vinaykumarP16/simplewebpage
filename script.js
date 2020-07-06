alert("WELCOME to JUSTBOOKS.in");


const getData = () => {
		let genre = document.getElementById('genre').value
		let state= document.getElementById('State').value
		let city = document.getElementById('City').value
		let language = document.getElementById('Language').value
		
		let info = `<h3>You genre is ${genre}, state you live is ${state} , city you leave is ${city}
		 and language you want is ${language}.</h3>`
		
		let display = document.getElementById('display')
		display.innerHTML= info
	}
	let btn = document.getElementById("FIND");
	btn.addEventListener('click',getData)


function func1() {
   		var str=document.getElementById('text1').value;
   		alert("thanks for visiting our page: "+str);
}
