# Redux Checklist (Vite + React + Tailwind + DaisyUI)

Exercice Redux Checkpoint (GOMYCODE). Petit projet de débutant pour gérer une liste de tâches avec Redux Toolkit. J'ai ajouté Tailwind CSS (via @tailwindcss/postcss) et DaisyUI pour avoir des styles rapides sans me prendre la tête.

## Fonctionnalités
- Ajouter une tâche avec titre + description.
- Marquer une tâche comme terminée / à faire.
- Modifier une tâche existante.
- Supprimer une tâche.
- Filtrer par statut (toutes / à faire / terminées).

## Stack
- React 19 (Vite)
- Redux Toolkit + React Redux
- Tailwind CSS 4 + DaisyUI

## Démarrer le projet
```bash
npm install
npm run dev
# puis ouvrir l’URL affichée par Vite (par défaut http://localhost:5173)
```

## Build production
```bash
npm run build
npm run preview 
```

## Organisation
- `src/store/` : store Redux + slice des tâches.
- `src/components/` : AddTask, TaskList, Task.
- `src/css/style.css` : import Tailwind + plugin DaisyUI.
- `src/index.css` : import du style Tailwind/DaisyUI + reset simple.
- `src/App.jsx` : composition des composants.

