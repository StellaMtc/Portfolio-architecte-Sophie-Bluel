export async function getWorks() {}
export async function createWork(image, title, category) {}
export async function deleteWork(id) {}

window.addEventListener("DOMContentLoaded", (event) => {
    // console.log("DOM entièrement chargé et analysé");
    initWorks();
});

// Fonction qui récupère les appels à l'API et les initialise
async function initWorks() {
    // Chargement des travaux pour la page d'accueil
    await getWorks();
    // Chargement des travaux pour la modale
    await getWorksModal();
    // Chargement des catégories
    await getCategories();

    // Gestion de l'utilisateur connecté
    checkUserConnected();
}

document.addEventListener("DOMContentLoaded", (event) => {
    const filterButtons = document.querySelectorAll('.filter__btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            filterButtons.forEach(btn => btn.classList.remove('filter__btn--active'));
            event.target.classList.add('filter__btn--active');
        });
    });
});
