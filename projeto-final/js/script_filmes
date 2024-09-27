const modals = document.querySelectorAll('.modal-person');
const cardButtons = document.querySelectorAll('.person');
const closeButtons = document.querySelectorAll('.modal__close');

// Função para ativar o modal
const openModal = (index) => {
    modals[index].classList.add('active-modal');
};

// Função para fechar o modal
const closeModal = () => {
    modals.forEach(modal => modal.classList.remove('active-modal'));
};

// Adicionar eventos de clique nos cards
cardButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        openModal(index);
    });
});

// Adicionar evento de clique no botão de fechar
closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        closeModal();
        event.stopPropagation();
    });
});

// Prevenir fechamento ao clicar no modal card
modals.forEach(modal => {
    const modalCard = modal.querySelector('.modal_card');
    modalCard.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique no modal card feche o modal
    });
});
