# Portfolio · Brayann Adrien Ouandji

Site statique (HTML, CSS, JavaScript, Bootstrap 5). Aucune dépendance externe : Bootstrap, les icônes et les polices sont embarqués dans `vendor/` et `assets/fonts/`.

## Personnaliser
| Quoi | Où |
|---|---|
| Projets (texte FR et EN, liens, stack) | tableaux `PROJECTS` et `EXTRA` en haut de `js/main.js` (champs `{ fr, en }`) |
| Textes de la page | français : `index.html` ; anglais : `js/i18n.js`, même clé `data-i18n` |
| Capture d'écran d'un projet | déposer l'image dans `assets/img/projects/` puis renseigner `image: "assets/img/projects/xxx.jpg"` dans le projet |
| Détail du schéma de l'étude de cas | objet `FLOW` dans `js/main.js` |
| Mots qui défilent dans le hero | tableau `ROLES` dans `js/main.js` |
| CV téléchargeable | remplacer `assets/docs/CV_Brayann_Ouandji.pdf` (garder le même nom) |
| Photo | `assets/img/portrait.jpg` et `portrait.webp` |
| Couleurs (thème sombre) | variables CSS en haut de `css/style.css` |
| Ouvrir directement en anglais | ajouter `?lang=en` à l'URL (sinon : langue du navigateur, puis dernier choix du visiteur) |
| Aperçu réseaux sociaux | `assets/img/og-image.jpg` (1200 x 630) |

Après déploiement, remplacer dans `index.html` la balise `og:image` par l'URL absolue (ex. `https://ton-domaine.vercel.app/assets/img/og-image.jpg`) pour un aperçu fiable sur LinkedIn.
