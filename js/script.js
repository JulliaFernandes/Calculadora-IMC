function calculoIMC(event){
    event.preventDefault();
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if(peso  <= 0 | altura <= 0){
        alert("Digite valores acima de 0");
        return;
    }

    let imc = peso/(altura*altura);
    imc = imc.toFixed(2);

    document.getElementById("resultado").style.display = "block";
    if(imc<16){
        document.getElementById("valor").innerHTML = imc;
        document.getElementById("tipo").innerHTML =  "Magreza Grau III";
    }
    else if(imc>=16 & imc<=16.9){
        document.getElementById("valor").innerHTML = imc;
        document.getElementById("tipo").innerHTML =  "Magreza Grau II";
    }
    else if(imc>16.9 & imc<=18.4){
        document.getElementById("valor").innerHTML = imc;
        document.getElementById("tipo").innerHTML =  "Magreza Grau I";
    }
    else if(imc>18.5 & imc<=24.9){
        document.getElementById("valor").innerHTML = imc;
        document.getElementById("tipo").innerHTML =  "Eutrofia";
    }
    else if(imc>24.9 & imc<=29.9){
        document.getElementById("valor").innerHTML = imc;
        document.getElementById("tipo").innerHTML =  "Sobrepeso";
    }
    else if(imc>29.9 & imc<=34.9){
        document.getElementById("valor").innerHTML = imc;
        document.getElementById("tipo").innerHTML =  "Obesidade Grau I";
    }
    else if(imc>34.9 & imc<=40){
        document.getElementById("valor").innerHTML = imc;
        document.getElementById("tipo").innerHTML =  "Obesidade Grau II";
    }
    else if(imc>40){
        document.getElementById("valor").innerHTML = imc;
        document.getElementById("tipo").innerHTML =  "Obesidade Grau III";
    }
}

document.getElementById("resultado").style.display = "none";

document.getElementById("imc").addEventListener("submit", calculoIMC);