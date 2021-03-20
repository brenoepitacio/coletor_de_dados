function coletar() {
    //Primeira Tabela
    var Base_Rgps = document.getElementById('Base_Rgps')
    var Base_Rgps = Number(Base_Rgps.value)
    var vsl_base_rgps = window.document.getElementById('vsl_base_rgps')
    vsl_base_rgps.innerHTML = Base_Rgps

    var Patronal_Rgps = document.getElementById('Patronal_Rgps')
    var Patronal_Rgps = Number(Patronal_Rgps.value)
    var vsl_patronal_rgps = window.document.getElementById('vsl_patronal_rgps')
    vsl_patronal_rgps.innerHTML = Patronal_Rgps

    var Funcional_Rgps = document.getElementById('Funcional_Rgps')
    var Funcional_Rgps = Number(Funcional_Rgps.value)
    var vsl_funcional_rgps = window.document.getElementById('vsl_funcional_rgps')
    vsl_funcional_rgps.innerHTML = Funcional_Rgps

    var Benefício_Rgps = document.getElementById('Benefício_Rgps')
    var Benefício_Rgps = Number(Benefício_Rgps.value)
    var vsl_benefício_rgps = window.document.getElementById('vsl_benefício_rgps')
    vsl_benefício_rgps.innerHTML = Benefício_Rgps
    
    window.alert('Dados coletados com sucesso')
}

function printDiv(tabelas) {
    var printContents = document.getElementById(tabelas).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

/*
Levar os dados capturados em uma página para a outra, usando uma key e o valor a ser passado
exemplo: localStorage('key', 'valor')

function setLocalStorage(){
    localStorage.setItem('res','Base_Rgps')
    localStorage.setItem('mostrar','res')
  }

function getLocalStorage(){
    localStorage.setItem('res','Base_Rgps')
}

setLocalStorage(); getLocalStorage();*/