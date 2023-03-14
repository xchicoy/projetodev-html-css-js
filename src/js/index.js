/*

OBJETIVO - quando clicarmos no botao temos que 
mostrar a imagem de fundo correspondente

- passo 1 - dar um jeito de pegar o elemento HTML dos botoes

- passo 2 - dar um jeito de identificar o clique do usuario no botao

- passo 3 - desmarcar o botao selecionado anterior

- passo 4 - marcar o botao clicado como se estivesse selecionada

- passo 5 - esconder a imagem de fundo anterior

- passo 6 - fazer apararecer a imagem de fundo correspondente
ao botao clicado

*/


//dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        //Funcao desmarca
        desmarcaobotaoselecionadoanterior();
        
        //marcar o botao clicado como se estivesse selecionada
        botao.classList.add('selecionado');
        
        //esconder a imagem de fundo anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa'); 

        //fazer apararecer a imagem de fundo correspondente ao botao clicado
        imagens[indice].classList.add('ativa');
    })
})

//desmarcar o botao selecionado anterior
function desmarcaobotaoselecionadoanterior() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

