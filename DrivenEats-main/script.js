let vistoSelecao = 0;
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let valorTotal = 0;
let nomePrato;
let nomeBebida;
let nomeSobremesa;
let mensagem;

//cria e remove a marcação dos itens
function adicionaMarca(classeDeSelecao, itemSelecionado) {
    let encontraSelecao = document.querySelector(`.${classeDeSelecao}`);
    if(encontraSelecao !== null) {
        let iconSelecionado = encontraSelecao.querySelector('ion-icon');
        iconSelecionado.classList.add('escondido');
        encontraSelecao.classList.remove(classeDeSelecao);      
    }
    vistoSelecao = itemSelecionado.querySelector('ion-icon');
    itemSelecionado.classList.add(classeDeSelecao);
    vistoSelecao.classList.remove("escondido");
}

//pega o valor do item escolhido
function funcaoValor(produto) {
    let valor = produto.querySelector(".valor").innerHTML;
    return Number(valor);
}
function funcaoNome(produto) {
    let nome = produto.querySelector("strong").innerHTML;
    return nome;
}

//funções disparadas ao clicar
function selecionaPrato(itemSelecionado) {
    adicionaMarca('prato-selecionado', itemSelecionado);
    valorPrato = funcaoValor(itemSelecionado);
    nomePrato = funcaoNome(itemSelecionado);
}
function selecionaBebida(itemSelecionado) {
    adicionaMarca('bebida-selecionada', itemSelecionado); 
    valorBebida = funcaoValor(itemSelecionado);
    nomeBebida = funcaoNome(itemSelecionado);
}
function selecionaSobremesa(itemSelecionado) {
    adicionaMarca('sobremesa-selecionada', itemSelecionado);
    valorSobremesa = funcaoValor(itemSelecionado);
    nomeSobremesa = funcaoNome(itemSelecionado);
}

//verifica se todos os itens foram esconlhidos para liberar a confirmação
function verificaSelecao() {
    const pratoSelecionado = document.querySelector(".prato-selecionado");
    const bebidaSelecionada = document.querySelector(".bebida-selecionada");
    const sobremesaSelecionada = document.querySelector(".sobremesa-selecionada");
    const botao = document.querySelector(".botao-confirmar"); 
    const textoBotao = document.querySelector(".botao-confirmar p");

    if(pratoSelecionado !== null && bebidaSelecionada !== null  && sobremesaSelecionada !== null) {
        botao.classList.add("liberar-confirmacao");
        textoBotao.innerHTML = "Fechar pedido";
    }
}

//disparada ao clicar em Fechar Pedido
function confirmarPedido() {
    valorTotal = valorPrato + valorBebida + valorSobremesa;
    const botao = document.querySelector(".botao-confirmar");
    if(botao.classList.contains("liberar-confirmacao")) {
        nomeUsuario = prompt("Qual é o seu nome?");
        enderecoUsuario = prompt("Qual é o seu endereço?");
        mensagem = encodeURIComponent( `Olá, gostaria de fazer o pedido:
         - Prato: ${nomePrato}
         - Bebida: ${nomeBebida}
         - Sobremesa: ${nomeSobremesa}
         Total: R$ ${valorTotal.toFixed(2)}
         
         Nome: ${nomeUsuario}
         Endereço: ${enderecoUsuario}`);
        janelaConfirmacao();
    }
}


const telaConfirma = document.querySelector(".tela-de-confirmacao");

function janelaConfirmacao() {
    completaTela('prato', nomePrato, valorPrato);
    completaTela('bebida', nomeBebida, valorBebida);
    completaTela('sobremesa', nomeSobremesa, valorSobremesa);
    document.querySelector(`.confirma-total`).children[1].innerHTML = `R$ ${valorTotal.toFixed(2)}`;
    telaConfirma.style.display = "flex";
}

//alterar valores da tela de confirmacao 
function completaTela(nome, pedido, preco) {
    const selecionaOpcao = document.querySelector(`.confirma-${nome}`);
    selecionaOpcao.children[0].innerHTML = pedido;
    selecionaOpcao.children[1].innerHTML = preco.toFixed(2);
}
function enviaWhats() {
    window.open(`https://wa.me/5533988418125?text=${mensagem}`);
}
function cancelaPedido() {
    telaConfirma.style.display = "none";
}