function handleHome() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleOnClick() {
	let element = document.getElementById("toScroll");
	element.scrollIntoView({ block: "start", behavior: "smooth"});
}

function handleCap2() {
  window.scrollTo({ top: 1200, behavior: 'smooth' });
}

document.addEventListener('aos:in', ({ detail }) => {
	// console.log('detail', detail.id);
	if (detail.id === "trigger-carrito") {
  	let carrito = document.getElementById("carro1");
  	carrito.classList.remove("aos-animate");
  }
  if (detail.id === "trigger-mexicano") {
  	let mexicano = document.getElementById("mexicano1");
  	mexicano.classList.add("hide");
  }
  if (detail.id === "trigger-text3") {
  	document.getElementById("cap_text").innerHTML = "CAP. #2";
  	let carrito = document.getElementById("carro1");
  	carrito.classList.add("hide");
  	let mexicano = document.getElementById("mexicano2");
  	mexicano.classList.add("hide");
  }
  if (detail.id === "trigger-text4") {
  	let mexicano = document.getElementById("mexicano3");
  	mexicano.classList.add("hide");
  	let fondo = document.getElementById("fondo");
  	fondo.classList.remove("calle1");
  	fondo.classList.add("calle2");
  	fondo.classList.add("init");
  }
  if (detail.id === "trigger-text5") {
  	let mexicano = document.getElementById("mexicano4");
  	mexicano.classList.add("hide");
  }
  if (detail.id === "trigger-text6") {
  	let tv = document.getElementById("tv");
  	tv.classList.add("hide");
  	let fondo = document.getElementById("fondo");
  	fondo.classList.add("move");
  	fondo.classList.remove("init");
  	let sillon = document.getElementById("sillon");
  	sillon.classList.add("move");
  	sillon.classList.remove("init");
  	let mexicano = document.getElementById("mexicano5");
  	mexicano.classList.add("move");
  	mexicano.classList.remove("init");
  }
});

document.addEventListener('aos:out', ({ detail }) => {
	// console.log('detail out', detail.id);
	if (detail.id === "trigger-carrito") {
  	let carrito = document.getElementById("carro1");
  	carrito.classList.add("aos-animate");
  }
  if (detail.id === "trigger-mexicano") {
  	let mexicano = document.getElementById("mexicano1");
  	mexicano.classList.remove("hide");
  }
  if (detail.id === "trigger-text3") {
  	document.getElementById("cap_text").innerHTML = "CAP. #1";
  	let carrito = document.getElementById("carro1");
  	carrito.classList.remove("hide");
  	let mexicano = document.getElementById("mexicano2");
  	mexicano.classList.remove("hide");
  }
  if (detail.id === "trigger-text4") {
  	let mexicano = document.getElementById("mexicano3");
  	mexicano.classList.remove("hide");
  	let fondo = document.getElementById("fondo");
  	fondo.classList.add("calle1");
  	fondo.classList.remove("calle2");
  	fondo.classList.remove("init");
  }
  if (detail.id === "trigger-text5") {
  	let mexicano = document.getElementById("mexicano4");
  	mexicano.classList.remove("hide");
  }
  if (detail.id === "trigger-text6") {
  	let tv = document.getElementById("tv");
  	tv.classList.remove("hide");
  	let fondo = document.getElementById("fondo");
  	fondo.classList.remove("move");
  	fondo.classList.add("init");
  	let sillon = document.getElementById("sillon");
  	sillon.classList.remove("move");
  	sillon.classList.add("init");
  	let mexicano = document.getElementById("mexicano5");
  	mexicano.classList.remove("move");
  	mexicano.classList.add("init");
  }
});

