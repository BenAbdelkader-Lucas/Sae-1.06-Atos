#  Projet SAE 1.06 — Site web Atos

Reproduction d'un site vitrine de l'entreprise **Atos** réalisée en HTML, CSS et JavaScript dans le cadre de la SAE 1.06 — BUT Informatique 1ère année.

---

## Pages du site

| Page | Description |
|------|-------------|
| `Accueil.html` | Page principale avec hero image, valeurs fondamentales |
| `Nos Engagements.html` | Présentation des engagements d'Atos |
| `Nos Services.html` | Services proposés avec bulles dépliables interactives |
| `Rejoignez-nous.html` | Offres de stage, d'alternance et postes à pourvoir filtrables |

---

## Fonctionnalités

- Navigation entre les pages via un header commun
- **Bulles interactives** sur la page "Nos Services" : clic pour déplier/replier le détail d'un service
- **Filtrage des offres** sur "Rejoignez-nous" : onglets Stages / Alternances / Postes à pourvoir
- Footer avec liens vers les réseaux sociaux (Instagram, LinkedIn, Twitter, YouTube)
- Un seul fichier CSS partagé entre toutes les pages
- Un seul fichier JS partagé entre toutes les pages

---

## Structure du projet

```
C2-Atos/
├── Accueil.html
├── Nos Engagements.html
├── Nos Services.html
├── Rejoignez-nous.html
├── Script/
│   └── script.js        
└── Style/
    ├── style.css          
    └── Image/
        ├── Accueil/
        ├── Header/
        ├── Footer/
        ├── Nos Engagements/
        └── Nos Services/
```

---

## Lancement

Aucune installation requise. Il suffit d'ouvrir `Accueil.html` dans un navigateur.

> **Note :** les liens entre pages utilisent des chemins absolus (`/Accueil.html`). Pour une navigation correcte, il est recommandé d'utiliser un serveur local (ex: extension **Live Server** sur VS Code).

---

## Auteurs

Projet réalisé dans le cadre de la **SAE 1.06** — BUT Informatique 1ère année.
