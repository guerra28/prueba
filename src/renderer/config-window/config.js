

window.addEventListener('load',()=>{

  clickTab()
})






const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Kpi 1",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [ 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById("myChart"), config);



function clickTab(){
  let tabs=document.querySelectorAll('div button')


  tabs.forEach((tab)=>{
    
    tab.addEventListener('click',()=>{
      
      ocultarContenido()
      document.getElementById(tab.value).classList.remove('hidden')
      
    })
  })




}

function ocultarContenido(){
  const contenido=document.querySelectorAll('div#contenido >div')

  contenido.forEach((el)=>{
    el.classList.add('hidden')
  })
}
