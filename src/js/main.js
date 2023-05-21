document.addEventListener('DOMContentLoaded', function(){
    const btnsecoes = document.querySelectorAll('.btnsecoes');
    const secaoContainer = document.querySelectorAll('.btncontainersecao');

    const headerItem = document.getElementById('cabecalho');
    const alturaTitulo = headerItem.clientHeight + 30;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > alturaTitulo){
            headerItem.style.backgroundColor = "#040714";
        } else {
            headerItem.style.backgroundColor = "rgba(4, 7, 20, 0.0)";
        }
    })

    for (let i = 0; i < btnsecoes.length; i++) {
        btnsecoes[i].addEventListener('click', function(botao){
            const secaoAlvo = botao.target.dataset.tabButton;
            const secaoSelecionada = botao.target

            for (let indice = 0; indice < secaoContainer.length; indice++) {
                const secaoItem = secaoContainer[indice];
                const nomeId = secaoItem.getAttribute('id');
                const dataSetID = secaoItem.dataset.tabId;

                if (dataSetID == secaoAlvo) {
                    secaoItem.style.display = "block";
                    secaoSelecionada.style.borderBottom = "3px solid white";
                } else {
                    secaoItem.style.display = "none";
                    const btnsecoesItem = document.querySelectorAll('.btnsecoes');

                    for (let posicao = 0; posicao < btnsecoesItem.length; posicao++) {
                        const item = btnsecoesItem[posicao]

                        console.log(item.dataset.tabButton, secaoAlvo)
                        if (item.dataset.tabButton !== secaoAlvo) {
                            item.style.borderBottom = "3px solid transparent";
                        }
                    }  
                }
            } 
        })
    }

       
      
    
})