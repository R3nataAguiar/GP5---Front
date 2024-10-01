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
modals.forEach(modal => {
    modal.addEventListener('click', () => {
        closeModal();
    });
});

document.getElementById('submitButton').addEventListener('click', (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const name = nameInput.value;
    const email = emailInput.value;
    if (name && email) {
        alert(`Obrigado ${name}, seu email ${email} foi cadastrado com sucesso!`);
        nameInput.value = '';
        emailInput.value = '';
    } else {
        alert('Por favor, preencha ambos os campos antes de enviar.');
    }
});
