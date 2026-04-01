export const articles = [
  {
    slug: 'premier-article',
    title: 'Mon premier article',
    date: '2026-04-01',
    description: 'Une introduction à mon blog technique.',
    tags: ['React', 'Web'],
    content: `
## Introduction

Bienvenue sur mon blog ! Je vais y partager mes expériences en développement web.

## Pourquoi React ?

React est une bibliothèque **déclarative** qui permet de construire des interfaces complexes à partir de composants simples.

- Composants réutilisables
- Virtual DOM performant
- Écosystème très riche

## Conclusion

Ce blog sera mon carnet de bord technique. Stay tuned !
    `
  },
  {
    slug: 'vite-vs-webpack',
    title: 'Vite vs Webpack : pourquoi j\'ai changé',
    date: '2026-03-28',
    description: 'Comparaison des deux bundlers et retour d\'expérience.',
    tags: ['Tooling', 'Performance'],
    content: `
## Le problème avec Webpack

Webpack est puissant mais **lent** au démarrage, surtout sur les gros projets.

## Ce que change Vite

Vite exploite les **ES Modules natifs** du navigateur :

1. Pas de bundling au démarrage
2. Hot reload quasi-instantané
3. Configuration minimale

## Mon verdict

Pour tout nouveau projet, je pars sur Vite sans hésiter.
    `
  }
]

// Utilitaire : trouver un article par son slug
export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug)
}