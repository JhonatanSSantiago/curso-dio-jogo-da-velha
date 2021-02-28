let jogador = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencendorSelecionado = document.getElementById('vencendor-selecionado');

mudarJogador('X');


function quadradoSelecionado(id){
    let quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "black";

    if (jogador === 'X') {
        jogador = 'O'
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checarVencendor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function mudarCorQuadrado(q1, q2, q3){
    q1.style.background = "green";
    q2.style.background = "green";
    q3.style.background = "green";
}

function mudarVencendor(quadrado){
    vencendor = quadrado.innerHTML;
    vencendorSelecionado.innerHTML = vencendor;
}

function checarVencendor() {
    let q1 = document.getElementById(1);
    let q2 = document.getElementById(2);
    let q3 = document.getElementById(3);
    let q4 = document.getElementById(4);
    let q5 = document.getElementById(5);
    let q6 = document.getElementById(6);
    let q7 = document.getElementById(7);
    let q8 = document.getElementById(8);
    let q9 = document.getElementById(9);


    if ( checaSequencia(q1, q2, q3)) {
        mudarCorQuadrado(q1, q2, q3);
        mudarVencendor(q1);
        return;
    }

    if ( checaSequencia(q4, q5, q6)) {
        mudarCorQuadrado(q4, q5, q6);
        mudarVencendor(q4);
        return;
    }
    if ( checaSequencia(q7, q8, q9)) {
        mudarCorQuadrado(q7, q8, q9);
        mudarVencendor(q7);
        return;
    }
    if ( checaSequencia(q1, q4, q7)) {
        mudarCorQuadrado(q1, q4, q7);
        mudarVencendor(q1);
        return;
    }
    if ( checaSequencia(q2, q5, q8)) {
        mudarCorQuadrado(q2, q5, q8);
        mudarVencendor(q2);
        return;
    }
    if ( checaSequencia(q3, q6, q9)) {
        mudarCorQuadrado(q3, q6, q9);
        mudarVencendor(q3);
        return;
    }
    if ( checaSequencia(q1, q5, q9)) {
        mudarCorQuadrado(q1, q5, q9);
        mudarVencendor(q1);
        return;
    }
    if ( checaSequencia(q3, q5, q7)) {
        mudarCorQuadrado(q3, q5, q7);
        mudarVencendor(q3);
        return;
    }

}

function checaSequencia(q1, q2, q3){
    let e_igual = false;
    if ( q1.innerHTML !== '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML) {
        e_igual = true;
    }

    return e_igual;
}

function reiniciar(){
    vencendor = null;
    vencendorSelecionado.innerHTML = ' ';

    for (var i = 1; i <= 9; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background = 'aliceblue';
        quadrado.style.color = 'aliceblue';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}