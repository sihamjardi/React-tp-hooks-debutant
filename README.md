# Découverte des Hooks Avancés et des Hooks Personnalisés

Ce projet React est un TP pour apprendre et pratiquer l'utilisation des **Hooks avancés** (`useReducer`, `useRef`, `useEffect`) et la création de **Hooks personnalisés** (`useFetch`, `useLocalStorage`).

---

## Structure du projet

<img width="229" height="430" alt="Capture d&#39;écran 2025-11-08 010110" src="https://github.com/user-attachments/assets/6522796d-e9d5-4ad7-908b-451dfa7d6aee" />

---

## Objectifs du TP

- Comprendre l’usage de `useReducer` pour gérer un **état complexe**.
- Manipuler le DOM ou stocker des valeurs persistantes avec `useRef`.
- Créer et réutiliser un **Hook personnalisé** (`useFetch`).
- Gérer des effets avec nettoyage (`useEffect`).
- Exercices facultatifs :
  - Ajouter un bouton “Réinitialiser” dans le compteur.
  - Créer un hook `useLocalStorage` pour sauvegarder et lire des valeurs.
  - Afficher la date et l’heure actuelle toutes les secondes.

---

## Composants principaux

### 1. `Compteur.js`  

Gère un compteur avec `useReducer` pour mieux structurer l’état.  
Boutons disponibles :
- +1 → incrémente
- -1 → décrémente
- (Facultatif) Reset → remet à zéro

### 2. `FocusInput.js`  

Permet de mettre le focus sur un champ texte en cliquant sur un bouton avec `useRef`.

### 3. `CompteurRendu.js`  

Compteur le nombre de fois que le composant est rendu grâce à `useRef` et `useEffect`.

### 4. `Timer.js`  

Affiche le temps écoulé en secondes avec nettoyage du timer dans `useEffect`.

### 5. `ListeArticles.js`  

Récupère une liste d’articles via l’API `https://jsonplaceholder.typicode.com/posts` avec le Hook personnalisé `useFetch`.

### 6. `useFetch.js`  

Hook personnalisé pour récupérer des données depuis une API et gérer les états : `data`, `chargement`, `erreur`.

### 7. `useLocalStorage.js`

Hook personnalisé pour lire et écrire des valeurs dans `localStorage` (exemple : `const [nom, setNom] = useLocalStorage("nomUtilisateur", "")`).

---

## Aperçu

<img width="772" height="508" alt="Capture d&#39;écran 2025-11-08 004745" src="https://github.com/user-attachments/assets/73df7359-7a6e-4873-9678-12a18ad9751d" />

<img width="709" height="500" alt="Capture d&#39;écran 2025-11-08 004757" src="https://github.com/user-attachments/assets/cf69f87e-8455-4330-8a69-742883bb4047" />

<img width="686" height="407" alt="Capture d&#39;écran 2025-11-08 005952" src="https://github.com/user-attachments/assets/8e097355-8749-439d-9a63-dffa37246832" />

---

## Instructions

1. Cloner le projet :  
```bash
git clone <url-de-ton-repo>
cd tp-hooks-debutant
```
---

## Auteur

Siham Jardi
