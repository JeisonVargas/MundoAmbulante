document.addEventListener('aos:in', ({ detail }) => {
	// console.log('detail', detail.id);
	if (detail.id === "trigger-tor2") {
  	let mexicano = document.getElementById("mexicano6");
  	mexicano.classList.add("hide");
  }
  if (detail.id === "trigger-tor3") {
		let mexicano = document.getElementById("mexicano7");
  	mexicano.classList.add("hide");
 		let sillon = document.getElementById("sillon");
  	sillon.classList.add("hide");
  	let deudas = document.getElementById("deudas");
  	deudas.classList.add("hide");	
  	let fondo = document.getElementById("fondo");
  	fondo.classList.remove("calle2");
  }
});

document.addEventListener('aos:out', ({ detail }) => {
	// console.log('detail out', detail.id);
	if (detail.id === "trigger-tor2") {
  	let mexicano = document.getElementById("mexicano6");
  	mexicano.classList.remove("hide");
  }
  if (detail.id === "trigger-tor3") {
  	let mexicano = document.getElementById("mexicano7");
  	mexicano.classList.remove("hide");
  	let sillon = document.getElementById("sillon");
  	sillon.classList.remove("hide");
  	let deudas = document.getElementById("deudas");
  	deudas.classList.remove("hide");
  	let fondo = document.getElementById("fondo");
  	fondo.classList.add("calle2");
  }
});

