// fonction pour nettoyer la sortie quand on clique sur C => "0"

function forclear() {

    document.getElementById('output').innerHTML = "0";

}

// fonction pour enlever le zéro quand on commence un calcul 

function removeZero() {

    var value = document.getElementById('output').innerHTML;

    if (value == "0") {
        value = " "
        document.getElementById('output').innerHTML = value;
    }
}

// fonction pour afficher les chiffre taper dans la sortie

function forDisplay(value) {

    removeZero()

    document.getElementById("output").innerHTML += value;

}

// fonction por résoudre l'équation

function solve() {

    removeZero();
    var equation = document.getElementById('output').innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}