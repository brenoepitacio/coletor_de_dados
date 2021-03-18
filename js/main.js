function coletar() {
    var Base_Rgps = document.getElementById('Base_Rgps')
    var Base_Rgps = Number(Base_Rgps.value)
    console.log(Base_Rgps);
    var res = window.document.getElementById('res')
    res.innerHTML = Base_Rgps
}

function setLocalStorage(){
    localStorage.setItem('res','Base_Rgps')
    localStorage.setItem('mostrar','res')
  }

function getLocalStorage(){
    localStorage.setItem('res','Base_Rgps')
}


setLocalStorage();
getLocalStorage();