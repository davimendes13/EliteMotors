function selecionarBola(bola, classeFundo) {
  
  document.querySelectorAll(".bolaAmarela").forEach(b => {
    b.classList.remove("bolaAmarela");
    b.classList.add("bolaNormal");
  }); 
  
  
  
  bola.classList.remove("bolaNormal");
  bola.classList.add("bolaAmarela");



  const btnVerMais = document.querySelector(".btnVerMais")
  if(classeFundo == "landing2" || classeFundo == "landing4") {
    btnVerMais.classList.add("vermelho")
  }
  else {
    btnVerMais.classList.remove("vermelho")
  }



  const nomeCarro = document.querySelector(".cian")
  if(classeFundo == "landing2" || classeFundo == "landing4"){
    nomeCarro.classList.add("colorRed")    
  }
  else {
    nomeCarro.classList.remove("colorRed")    
  }

  
  const landing = document.querySelector(".landing, .landing2, .landing3, .landing4");
  landing.classList.remove("landing","landing2","landing3","landing4");
  landing.classList.add(classeFundo);

  
  
  const divCarName = document.querySelector(".divCarName, .divCarName2");
  const carName = document.querySelector(".carName");
  const spanCian = carName.querySelector(".cian"); 

  if (classeFundo == "landing" || classeFundo == "landing2") {
    divCarName.classList.remove("divCarName2");
    divCarName.classList.add("divCarName");
  } else {
    divCarName.classList.remove("divCarName");
    divCarName.classList.add("divCarName2");
  }

  if (classeFundo == "landing") {
    carName.childNodes[0].textContent = "PORSCHE ";
    spanCian.textContent = "911 GT3";
  }else if ( classeFundo == "landing2") {
    carName.childNodes[0].textContent = "FERRARI ";
    spanCian.textContent = "SF90";
  }else if ( classeFundo == "landing3") {
    carName.childNodes[0].textContent = "LAMBORGHINI ";
    spanCian.textContent = "HURACAN";
  }else if ( classeFundo == "landing4") {
    carName.childNodes[0].textContent = "BMW ";
    spanCian.textContent = "M4 COMPETITION";
    
  }

  
     
   

}