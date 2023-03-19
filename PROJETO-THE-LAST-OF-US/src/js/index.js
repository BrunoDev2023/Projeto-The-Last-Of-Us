/*comentário*/ //comentário 1 linha
/*Sempre pense na solução primeiro
Objetivo do job: Ao clicar no botão do carrossel a imagem de fundo 
mude.
Passo 1: dar um jeito de pegar o elemento HTML dos botões

Passo 2: dar um jeito de identificar o clique do usuário no botão

Passo 3: desmarcar o botão selecionado anterior

Passo 4: marcar o botão clicando como se estivesse selecionado

Passo 5: esconder a imagem de fundo anterior

Passo 6: fazer aparecer a imagem correspondente com o botão clicado*/

//Passo 1: dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagem = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botão selecionado anterior      
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrosel(botao);

        // passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
          MostrarImagem(indice);
    })
})



function MostrarImagem(indice) {
    imagem[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
