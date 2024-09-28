document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const cardButtons = document.querySelectorAll('.filme');
    const closeButtons = document.querySelectorAll('.modal__close');

    // Função para ativar o modal
    const openModal = (index) => {
        modals[index].classList.add('active-modal');
    };

    // Função para fechar todos os modais
    const closeModal = () => {
        modals.forEach(modal => modal.classList.remove('active-modal'));
    };

    // Adicionar eventos de clique nos filmes para abrir o modal correspondente
    cardButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            openModal(index);
        });
    });

    // Adicionar eventos de clique nos botões de fechar
    closeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            closeModal();
            event.stopPropagation();
        });
    });

    // Fechar o modal ao clicar fora do modal_card
    modals.forEach((modal) => {
        modal.addEventListener('click', () => {
            closeModal();
        });

        const modalCard = modal.querySelector('.modal_card');
        modalCard.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o clique no modal_card feche o modal
        });
    });
});

const carousel = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let index = 0;

function showItem(index) {
    const width = items[index].clientWidth;
    carousel.style.transform = `translateX(-${index * width}px)`;
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % items.length;
    showItem(index);
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    showItem(index);
});

window.addEventListener('resize', () => showItem(index));

document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    // Função para mover o carrossel
    function moveCarousel(index) {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    // Função para avançar para o próximo slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        moveCarousel(currentIndex);
    }

    // Função para voltar ao slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        moveCarousel(currentIndex);
    }

    // SetInterval para movimentar automaticamente o carrossel a cada 3 segundos
    let autoSlide = setInterval(nextSlide, 3000);

    // Botões de navegação
    document.querySelector(".carousel-button.next").addEventListener("click", function () {
        clearInterval(autoSlide);  // Para o movimento automático quando o botão é clicado
        nextSlide();
        autoSlide = setInterval(nextSlide, 3000);  // Reinicia o intervalo automático
    });

    document.querySelector(".carousel-button.prev").addEventListener("click", function () {
        clearInterval(autoSlide);  // Para o movimento automático quando o botão é clicado
        prevSlide();
        autoSlide = setInterval(nextSlide, 3000);  // Reinicia o intervalo automático
    });
});
