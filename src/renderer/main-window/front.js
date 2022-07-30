


let indicadores = [];
let user = "CA3793862";
const url =
  "https://systemservices.emergiacc.com/ApiRestWebReport/api/Indicadores";

const colores = {
  V: "text-green-800",
  A: "text-amber-400",
  R: "text-red-700",
};

window.addEventListener("load", async () => {
  //await getIndicadores();
  //renderIndicadores();


  buttonEvent('btn-refresh')
  
  let user=window.versions.usuario

  console.log(user)

});



function buttonEvent(id){
  const button=document.getElementById(id)
  button.addEventListener('click',async ()=>{
    const user=await window.peticionesApi.getUser()
    console.log(user)
  })
}



async function getIndicadores() {
  const d = await fetch(`${url}/${user}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJKVUFOIEFMVkFSTyBHVUVSUkEgU0FOQ0hFWiIsInVzdWFyaW8iOiJqYWd1ZXJyYSIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTY1OTA3MzEyOCwiZXhwIjoxNjU5MTAxOTI4LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMwMiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzAyIn0.S1LMRTAaGL_MoXEBYo21hU6gZFTD59E_DFBz2UMntew", //Agregado
    },
  });
  const data = await d.json();
  indicadores = data;
}

function renderIndicadores() {
  let usuario = document.getElementById("usuario");
  let list_indicadores = document.getElementById("list-indicadores");
  list_indicadores.innerHTML = "";
  usuario.innerHTML = indicadores[0]["nombre"];

  let template = `<div class="grid grid-cols-4 pb-2">
  <div class="col-span-2"> Nombre </div>
  <div class="text-center">Valor</div>
  <div class="text-center">Objetivo</div>
    </div>`;

  indicadores.forEach((el) => {
    template += `
    <div class="grid grid-cols-4 ${colores[el.color]} items-center">
    <div class="col-span-2" id="nombre_kpi">${el.nombre_kpi}</div>
    <div id="nota" class="text-center">${el.nota}</div>
    <div id="objetivo" class="text-center">${el.objetivo}</div>
  </div>
    `;
  });
  template += `  <div class="grid grid-cols-4 text-green-800 items-center">
  <div class="col-span-2">KPI 4</div>
  <div class="text-center">0</div>
  <div class="text-center">1</div>
</div>`;

  list_indicadores.innerHTML = template;
}
