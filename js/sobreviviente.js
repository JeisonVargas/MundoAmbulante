document.addEventListener('aos:in', ({ detail }) => {
	// console.log('detail', detail.id);
	if (detail.id === "trigger-sob2") {
  	let mexicano = document.getElementById("mexicano9");
  	mexicano.classList.add("hide");
  	let ventana = document.getElementById("ventana");
  	ventana.classList.add("hide");
  	let planta = document.getElementById("planta");
  	planta.classList.add("hide");
  	let fondo = document.getElementById("fondo");
  	fondo.classList.add("calle1");
  }
  if (detail.id === "trigger-sob3") {
		let mexicano = document.getElementById("mexicano11");
  	mexicano.classList.add("hide");
  	let fondo = document.getElementById("fondo");
  	fondo.classList.remove("calle1");
  	fondo.classList.add("video");
  	let carrito = document.getElementById("carro1");
  	carrito.classList.add("hide");
  }
});

document.addEventListener('aos:out', ({ detail }) => {
	// console.log('detail out', detail.id);
	if (detail.id === "trigger-sob2") {
  	let mexicano = document.getElementById("mexicano9");
  	mexicano.classList.remove("hide");
  	let ventana = document.getElementById("ventana");
  	ventana.classList.remove("hide");
  	let planta = document.getElementById("ventana");
  	planta.classList.remove("hide");
  	let fondo = document.getElementById("fondo");
  	fondo.classList.remove("calle1");
  }
  if (detail.id === "trigger-sob3") {
		let mexicano = document.getElementById("mexicano11");
  	mexicano.classList.remove("hide");
  	let fondo = document.getElementById("fondo");
  	fondo.classList.add("calle1");
  	fondo.classList.remove("video");
  	let carrito = document.getElementById("carro1");
  	carrito.classList.remove("hide");  }
});

