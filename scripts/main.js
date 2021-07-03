let img = document.querySelector('img')
img.onclick = function(){
	let mysrc = img.getAttribute('src');
	if(mysrc === 'images/1.jpg'){
		img.setAttribute('src', 'images/4.jpg');
	} else {
		img.setAttribute('src', 'images/1.jpg');
	}
}


let b1 = document.getElementById('first');
let b2 = document.getElementById('second');
// let b = document.querySelector();
let h = document.querySelector('h1');

function setname(){
	let name = prompt('type your name:');
	if(name === null) {
		// h.textContent = 'Hello World!';
		return;
	}
	if(name === '') {
		setname();
	}
	localStorage.setItem('name', name);
	h.textContent = 'Hello ' + name;
}

b1.onclick = function() {
	setname();
}
b2.onclick = function(){
	h.textContent = 'Hello World!';
	img.setAttribute('src', 'images/1.jpg');
}

if(localStorage.getItem('name')) {
	h.textContent = 'Hello ' + localStorage.getItem('name');
}
//else {
//	let local_name = localStorage.getItem('name');
//	h.textContent = 'Hello ' + local_name;
//}
