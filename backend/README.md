# RD Reponses Backend

Backend REST pour la collecte des reponses.

## Demarrer
1. Copier .env.example vers .env et renseigner DATABASE_URL.
2. npm install
3. npm run dev

## Endpoints
- POST /sessions
- GET /sessions/:id
- GET /progress?session_id=
- POST /answers
- GET /recap?session_id=
- GET /admin/users
- GET /admin/users/:id/questions
- POST /admin/pairings

## Base de donnees
- Voir migrations/001_init.sql pour le schema et les 100 questions.
