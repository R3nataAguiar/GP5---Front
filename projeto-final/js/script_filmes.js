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
