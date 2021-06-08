var filtroTeclas = function(event) {
    return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
}
var valorEmprestimo = "";
var meses = "";
var select = "";
var valorFinal = "";
var valorParcelas = "";

function calcularSoma(){
    var valorEmprestimo = document.getElementById('valorEmprestimo').value;
    valorEmprestimo = valorEmprestimo.replace(/[^\d]+/g,'');
    valorEmprestimo = parseFloat(valorEmprestimo);
    valorEmprestimo = valorEmprestimo / 100;

    var meses = document.getElementById('quantMeses').value;
    meses = parseFloat(meses);

    var select = document.getElementById('garantia');
    var juros = select.options[select.selectedIndex].value;
    select = parseFloat(select);
    
    valorFinal = valorEmprestimo;

    juros = juros / 100

    var cont = 1;

    for (;cont <= meses; cont++){
        valorFinal = (valorFinal * juros) + valorFinal;
    }
  
    valorParcelas = valorFinal / meses;


    document.getElementById('vEmprestimo').innerHTML = valorEmprestimo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('jAplicado').innerHTML = juros * 100;
    document.getElementById('qMeses').innerHTML = (meses + "x de");
    document.getElementById('vParcelas').innerHTML = valorParcelas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('vFinal').innerHTML = valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

}
function mascaraMoeda(event) {
  const onlyDigits = event.target.value.split("").filter(s => /\d/.test(s)).join("").padStart(3, "0");
  const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);
  event.target.value = maskCurrency(digitsFloat);
  return digitsFloat;
}

function maskCurrency(valor, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, {style: 'currency', currency }).format(valor);
}

