document.addEventListener('aos:in', ({ detail }) => {
	// console.log('detail', detail.id);
	if (detail.id === "trigger-tra2") {
  	let mexicano = document.getElementById("mexicano9");
  	mexicano.classList.add("hide");
  	let letrero = document.getElementById("letrero");
  	letrero.classList.add("hide");
  }
  if (detail.id === "trigger-tra3") {
		let mexicano = document.getElementById("mexicano10");
  	mexicano.classList.add("hide");
  }
});

document.addEventListener('aos:out', ({ detail }) => {
	// console.log('detail out', detail.id);
	if (detail.id === "trigger-tra2") {
  	let mexicano = document.getElementById("mexicano9");
  	mexicano.classList.remove("hide");
  	let letrero = document.getElementById("letrero");
  	letrero.classList.remove("hide");
  }
  if (detail.id === "trigger-tra3") {
  	let mexicano = document.getElementById("mexicano10");
  	mexicano.classList.remove("hide");
  }
});

