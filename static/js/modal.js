// =========================================
// GLOBAL MODAL SYSTEM
// =========================================

const modal = document.getElementById("globalModal");

const modalBody = document.getElementById("modal-body");

const closeBtn = document.getElementById("closeModalBtn");


// OPEN MODAL
function openModal(content) {

    if (!modal || !modalBody) return;

    modalBody.innerHTML = content;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


// CLOSE MODAL
function closeModal() {

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


// CLOSE BUTTON
if (closeBtn) {

    closeBtn.addEventListener("click", closeModal);

}


// CLICK OUTSIDE MODAL
if (modal) {

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            closeModal();

        }

    });

}


// ESC KEY
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});