/*-----------------------------------------------*/
/*--------------------NOS SERVICES---------------*/
/*-----------------------------------------------*/

const services = document.querySelectorAll("div.services-bulle");   // Sélectionne tous les éléments de la classe "services-bulle"

services.forEach((service) => {  // Parcour chaque élément "services"
  service.addEventListener("click", function () {   // Lorsque que l'on clique sur un élément "service" les action suivante se font
    const fleche = this.querySelector("img.flèche");  // Sélectionne l'image de classe flèche  dans l'élément service sélectionné
    const serviceEtendu = this.querySelector("div.services-bulle-étendu");  // Sélectionne la division dans l'élément service séléctionné de classe "services-bulle-étendu" 

    serviceEtendu.classList.toggle("visible");  // L'élément serviceEtendu gagne la classe "visible en plus
    fleche.classList.toggle("rotate");  // L'élément flèche gagne la classe rotate en plus
  });
});

/*-----------------------------------------------*/
/*------------------REJOIGNEZ NOUS---------------*/
/*-----------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {           /* On attend que toute la page soit chargée avant d’exécuter le script. */
  const tabs = document.querySelectorAll(".tab");               /* tous les boutons/onglets que l'utilisateur peut cliquer, faisant référence à toutes les balises dans le fichier html dont class="tab" */
  const offers = document.querySelectorAll(".offer");           /* tous les offres à filtrer, faisant référence à toutes les balises dans le fichier html dont class="offer"*/

  // Par défaut : afficher seulement STAGES
  offers.forEach(offer => {
    offer.style.display = offer.dataset.type === "Stages" ? "block" : "none";

    /* tous les éléments dont data-type="Stages" sont affichés 
    Chaque offre a un data-type (ex : data-type="Stages" ou data-type="Alternances").
    Ici, on montre uniquement celles de type “Stages” au chargement.
    */

});
// afficher les offres choisies
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {                      /* un onglet est cliqué */
      // bouton actif
      tabs.forEach((tab) => tab.classList.remove("active"));  /* On retire la classe active de tous les onglets. */
      tab.classList.add("active");                            /* On ajoute active à l’onglet cliqué pour le styliser */

      // catégorie d'offre choisie
      const category = tab.textContent.trim();                 /* On récupère le texte de l’onglet cliqué (Stages, Alternances, Postes à pourvoir) */

      // afficher les offres de la catégorie choisie 
      offers.forEach((offer) => {
        offer.style.display =
          offer.dataset.type === category ? "block" : "none"; 
        
        /* On compare avec data-type de chaque offre :
        Si ça correspond => display: block => affiché
        Sinon => display: none => caché 
        */
        
      });
    });
  });
});





