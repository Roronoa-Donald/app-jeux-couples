# RD Reponses

App mobile de collecte de donnees pour creer un jeu qui mesure le duo qui se connait le mieux.

## Demarrer
1. npm install
2. npm run start

## Configuration
- Ajoutez votre adresse API dans .env via EXPO_PUBLIC_API_BASE_URL.

## Fonctionnalites
- 100 questions au total, avec QCM (3-5 options) + champ libre (200 caracteres).
- Reprise de session, progression, temps passe actif.
- Resume final avec toutes les reponses.
- Espace admin pour suivre les personnes et creer des duos.

## Backend attendu
- REST simple avec les endpoints: POST /sessions, GET /sessions/:id, GET /progress, POST /answers, GET /recap,
  GET /admin/users, GET /admin/users/:id/questions, POST /admin/pairings.

## Base de donnees
- Voir database.sql pour la structure Postgres proposee.
