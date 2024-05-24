function toggleModal(modal) {
    modal.classList.toggle("show-modal");
}

document.querySelectorAll(".trigger-modal").forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal-target");
        const modal = document.querySelector(modalId);
        toggleModal(modal);
    });
});

document.querySelectorAll(".close-modal").forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        toggleModal(modal);
    });
});

window.addEventListener("click", event => {
    if (event.target.classList.contains("modal")) {
        toggleModal(event.target);
    }
});
