# Redux Checklist (Vite + React + Tailwind + DaisyUI)

Exercice Redux Checkpoint (GOMYCODE). Petit projet de debutant pour gerer une liste de taches avec Redux Toolkit. Ajout de Tailwind CSS (via @tailwindcss/postcss) et DaisyUI pour aller vite sur le style.

## Fonctionnalites
- Ajouter une tache avec titre + description.
- Marquer une tache comme terminee / a faire.
- Modifier une tache existante.
- Supprimer une tache.
- Filtrer par statut (toutes / a faire / terminees).

## Stack
- React 19 (Vite)
- Redux Toolkit + React Redux
- Tailwind CSS 4 + DaisyUI

## Demarrer le projet
```bash
npm install
npm run dev
# puis ouvrir l'URL affichee par Vite (par defaut http://localhost:5173)
```

Demo deployee : https://redux-checkpoint-v1.vercel.app/

## Build production
```bash
npm run build
npm run preview
```

## Organisation
- `src/store/` : store Redux + slice des taches.
- `src/components/` : AddTask, TaskList, Task.
- `src/css/style.css` : import Tailwind + plugin DaisyUI.
- `src/index.css` : import du style Tailwind/DaisyUI.
- `src/App.jsx` : composition des composants.
