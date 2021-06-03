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
    valorEmprestimo = parseFloat(valorEmprestimo);

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
    valorFinal = valorFinal.toFixed(2);
    
    valorParcelas = valorFinal / meses;
    valorParcelas = valorParcelas.toFixed(2);

    valorEmprestimo = valorEmprestimo.toFixed(2);
    console.log(valorEmprestimo);

    document.getElementById('vEmprestimo').innerHTML = valorEmprestimo;
    document.getElementById('jAplicado').innerHTML = juros;
    document.getElementById('qMeses').innerHTML = (meses + "x de");
    document.getElementById('vParcelas').innerHTML = valorParcelas;
    document.getElementById('vFinal').innerHTML = valorFinal;
}