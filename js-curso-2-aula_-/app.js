/*para encontrar um elemento HTML em uma página da web usando JavaScript
let titulo = document.querySelector('h1');


A linha de código altera o conteúdo HTML dentro do elemento <h1> para "Jogo do número Secreto".
titulo.innerHTML = 'Jogo do número  Secreto';
*/


let listaNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(seletor,mensagen){
    let elemento = document.querySelector(seletor);
    elemento.innerHTML = mensagen;
   // responsiveVoice.speak(mensagem, 'Brazilian Portuguese Female', {rate: 1.2});
}

///////////////////////////
exibirMensagemInicial()

function verificarChute(){
    
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoTela('h1','Acertou!')

        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa'

        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`

        exibirTextoTela('p',mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else{

        let chute = document.querySelector('input').value;


        if(chute > numeroSecreto){
            exibirTextoTela('p',`Número secreto é menor do que ${chute}`);
        }
        else{
            exibirTextoTela('p',`Número secreto maior do que ${chute}`);
        }
        
    }
    limparCampo()
    tentativas++;

}





function gerarNumeroAleatorio(){
    let quantidadeDeElementoLista = listaNumeroSorteado.length
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);

    if(quantidadeDeElementoLista == numeroLimite){
        listaNumeroSorteado = [] // limpar lista
    }


    if(listaNumeroSorteado.includes(numeroEscolhido)){

        return gerarNumeroAleatorio()
    }
    else{
        listaNumeroSorteado.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';

}

function reniciarjogo(){

    numeroSecreto = gerarNumeroAleatorio();

    tentativas = 1;
    limparCampo();
    exibirMensagemInicial()
    
    document.getElementById('reiniciar').setAttribute('disabled',true)

  



}

function exibirMensagemInicial(){
    exibirTextoTela('h1','Jogo do número  Secreto');
    exibirTextoTela('p','Escolha um número entre 1 e 10');


}





