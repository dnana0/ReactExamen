let boton = document.querySelector(".boton-parque");
let contenedor = document.querySelector(".tarjetas-container");
let cCasa = document.querySelector(".contador-casa");
let cParque = document.querySelector(".contador-parque");
let dataU = null;

fetch("http://localhost:3000/api/girasoles")
  .then((response) => response.json())
  .then((data) => {
    console.log("Usuarios:", data);
    console.log(data[0]);
    dataU = JSON.stringify(data);
    dataU = JSON.parse(dataU);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
boton.addEventListener("click", function () {
  let info = document.createElement("div");
  cCasa.textContent = dataU.length;
  cParque.textContent = 5 - dataU.length;
  dataU.a;
  info.innerHTML = `<div class="tarjeta"></div> 
            <p>${dataU[0].nombre}</p>
            <img src="${dataU[0].img}"></img>
        </div>`;
  contenedor.appendChild(info);
});
