// Modal, aqui toda a pa3rte do modal(pop-up) é ajustado.
document.addEventListener('DOMContentLoaded', () => {//o DOMContentLoaded é chamado quando o documento é carregado.
    //aqui eu seleciono os modais, os cards e os botoes
    const modals = document.querySelectorAll('.modal');
    const cardButtons = document.querySelectorAll('.filme');//nomeio o filme como cardButtons pois quero transforma-los em botões
    const closeButtons = document.querySelectorAll('.modal__close');//nomeio o modal__close como closeButtons pois eles vão fechar os modais

    //funções
    const openModal = (index) => {//essa função serve para abrir o modal de acordo com o indice correspondente ao botão clicado
        modals[index].classList.add('active-modal');//aqui chama a classe para tornar o modal(pop-up) visível
    };

    const closeModal = () => {//essa função serve para fechar o modal
        modals.forEach(modal => modal.classList.remove('active-modal'));//aqui chama a classe para tornar o modal(pop-up) invisível
    };

    //eventos

    cardButtons.forEach((button, index) => {//esse foreach serve para mostrar o modal de acordo com o indice correspondente ao botão clicado
        button.addEventListener('click', () => {//esse evento serve para mostrar o modal de acordo com o indice correspondente ao botão clicado
            openModal(index);//essa função serve para abrir o modal de acordo com o indice correspondente ao botão clicado
        });
    });

    closeButtons.forEach((button) => {//esse foreach serve para fechar o modal
        button.addEventListener('click', (event) => {
            closeModal();//essa função serve para fechar o modal
            event.stopPropagation();//o event.stopPropagation serve para parar a propagação do evento, no caso o clique do botão para fechar o modal
        });
    });
    //cria um evento que ao clicar fora do card, ele vai fechar o modal
    modals.forEach((modal) => {
        modal.addEventListener('click', () => {
            closeModal();
        });
        //cria um evento que ao clicar no card ele não fecha o modal
        const modalCard = modal.querySelector('.modal_card');
        modalCard.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
    //aqui entramos no carousel
    //primeiro selecionamos os elementos necessários
    const carousel = document.querySelector('.carousel-container');//container do carousel
    const items = document.querySelectorAll('.carousel-item');//todos os itens do carousel
    const totalItems = items.length;//total de itens
    const prevButton = document.querySelector('.carousel-button.prev');//botão de anterior
    const nextButton = document.querySelector('.carousel-button.next');//botão de proximo
    let index = 0;//indice inicial do carousel

    //funções

    function showItem(index) {//função para mostrar o item de acordo com o indice
        const width = items[index].clientWidth;//desloca o carrossel de acordo com o indice
        carousel.style.transform = `translateX(-${index * width}px)`;
    }

    function nextSlide() {//função para ir ao próximo slide
        index = (index + 1) % totalItems;//atualiza o indice e o faz voltar para o primeiro
        showItem(index);//mostra o slide
    }

    function prevSlide() {//função para ir ao slide anterior
        index = (index - 1 + totalItems) % totalItems;//atualiza o indice
        showItem(index);//mostra o slide
    }
    // Configura o carrossel para trocar de slide automaticamente a cada 3 segundos
    let autoSlide = setInterval(nextSlide, 3000);// Chama nextSlide a cada 3 segundos

    // Adiciona evento ao botão "próximo" para ir ao próximo slide quando clicado
    nextButton.addEventListener('click', function () {
        clearInterval(autoSlide);// Pausa a troca automática ao clicar
        nextSlide();// Vai para o próximo slide
        autoSlide = setInterval(nextSlide, 3000);// Reinicia o intervalo de troca automática
    });

    // Adiciona evento ao botão "anterior" para ir ao slide anterior quando clicado
    prevButton.addEventListener('click', function () {
        clearInterval(autoSlide);// Pausa a troca automática ao clicar
        prevSlide();// Vai para o slide anterior
        autoSlide = setInterval(nextSlide, 3000);// Reinicia o intervalo de troca automática
    });

    // Reajusta o carrossel automaticamente ao redimensionar a janela
    window.addEventListener('resize', () => showItem(index));// Recalcula a posição ao redimensionar a tela
});
