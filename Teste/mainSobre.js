/*num mexe pq ta funfano*/
const modals = document.querySelectorAll('.modal-person');
const cardButtons = document.querySelectorAll('.person');
const closeButtons = document.querySelectorAll('.modal__close');

const openModal = (index) => {
    modals[index].classList.add('active-modal');
};

const closeModal = () => {
    modals.forEach(modal => modal.classList.remove('active-modal'));
};

cardButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        openModal(index);
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        closeModal();
        event.stopPropagation();
    });
});

modals.forEach(modal => {
    const modalCard = modal.querySelector('.modal_card');
    modalCard.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
