
import { showEditModeIfNecessary, isUserLogged } from "./users.js";
import { loadGalleryFromAPI } from "./works.js";
import { displayFilter, displayWorks } from "./categories.js";

// Charge les données depuis l'API et les affiche dans la gallerie
loadGalleryFromAPI().then(success => {
    if (success) {
        if (!isUserLogged()) {
            // Si l'utilisateur n'est pas identifié, affichage des boutons fitres
            displayFilter();
        }
        // Affichage de la gallerie
        displayWorks();
        
    } else {
        // Affichage d'un message d'erreur
        document.querySelector(".filter").innerText = "Impossible de charger le contenu.";
    }
})

// Affiche le mode édition si l'utilisateur est identifié
showEditModeIfNecessary();