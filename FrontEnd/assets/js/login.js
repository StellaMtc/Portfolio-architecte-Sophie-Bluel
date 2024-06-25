// Import du module de gestion d'affichage des erreurs :
import { displayError } from "./displayError.js";

// Lien de l'Url de l'API :
const apiUrl = "http://localhost:5678/api/";

// Formulaire du Login :
const loginForm = document.getElementById("loginForm");

async function authentification() {
  return fetch(`${apiUrl}users/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Introduction du mail et du password saisi dans le formulaire :
      email: email.value,
      password: password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Seulement si les données de réponses contiennent un token :
      if (data.token) {
        // loginerror.innerText = "";
        // .. Alors on l'enregistre dans le Local Storage ..
        localStorage.setItem("SophieBluelToken", data.token);
        // .. puis on redirige l'utilisateurs vers la page d'accueil :
        window.location.href = "index.html";
      } else {
        // Une erreur apparaît si les données ne contiennent pas de token :
        console.log("email ou mot de passe incorrect !");
        displayError("logintitle", "email ou mot de passe incorrect !");
      }
    })
    .catch((error) => {
      console.log("l'API n'a pas répondue : " + error);
      displayError(
        "logintitle",
        "Serveur injoignable, veuillez rééssayer plus tard .."
      );
    });
}

//* Ecouteurs d'évènements :

// Authentification :
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  authentification();
});

//Validation de l'email :
loginForm.addEventListener("input", () => {
  if (!email.validity.valid) {
    displayError("loginemail", "Veuillez saisir une adresse email valide !");
  } else {
    displayError("loginemail", "");
  }
});
// Validation du mot de passe :
loginForm.addEventListener("input", () => {
  if (!password.validity.valid) {
    displayError(
      "loginpassword",
      "Le mot de passe doit contenir entre 4 et 15 caractères !"
    );
  } else {
    displayError("loginpassword", "");
  }
});