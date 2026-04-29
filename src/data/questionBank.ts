export type QuestionTemplate = {
  id: string;
  text: string;
  options: string[];
  signals?: string[];
};

export type SectionTemplate = {
  id: string;
  title: string;
  pool: QuestionTemplate[];
};

export const QUESTIONS_PER_SECTION = 10;

const OPTIONS_FREQUENCY = ["Rarement", "Parfois", "Souvent", "Tres souvent"];
const OPTIONS_IMPORTANCE = [
  "Peu important",
  "Assez important",
  "Tres important"
];
const OPTIONS_AGREE = [
  "Pas du tout",
  "Plutot non",
  "Plutot oui",
  "Tout a fait"
];
const OPTIONS_STYLE = [
  "Plutot calme",
  "Plutot direct",
  "Plutot creatif",
  "Plutot analytique"
];
const OPTIONS_ENERGY = [
  "Matin serein",
  "Apres-midi fort",
  "Soiree active",
  "Variable selon jour"
];
const OPTIONS_SOCIAL = [
  "Solo concentre",
  "Petit groupe",
  "Grand groupe",
  "Mixte selon moment"
];
const OPTIONS_STRESS = [
  "Je me pose",
  "Je bouge",
  "Je parle",
  "Je me coupe"
];
const OPTIONS_DECISION = [
  "Rapide et intuitif",
  "Equilibre raisonne",
  "Prudent et lent"
];
const OPTIONS_COMM = [
  "Court et clair",
  "Detaille et structure",
  "Empathique et doux",
  "Humour et detente"
];
const OPTIONS_TRAVEL = [
  "Ville dynamique",
  "Nature calme",
  "Mer repos",
  "Montagne energie"
];
const OPTIONS_WORK = [
  "Autonome d abord",
  "Collaboratif souvent",
  "Mixte selon projet"
];
const OPTIONS_LEARN = [
  "En ligne guide",
  "Sur le terrain",
  "Avec mentor",
  "Par essais"
];
const OPTIONS_MOTIVATION = [
  "Objectifs clairs",
  "Relations fortes",
  "Creation libre",
  "Apprentissage continu"
];
const OPTIONS_LEISURE = [
  "Sport et mouvement",
  "Culture et arts",
  "Creatif manuel",
  "Detente simple"
];
const OPTIONS_RHYTHM = [
  "Rythme stable",
  "Rythme flexible",
  "Rythme intense",
  "Rythme progressif"
];
const OPTIONS_RELATION = [
  "Confiance d abord",
  "Communication d abord",
  "Fiabilite d abord",
  "Humour d abord"
];
const OPTIONS_FEEDBACK = [
  "Direct et court",
  "Constructif detaille",
  "En douceur",
  "En duo"
];
const OPTIONS_TEAM = [
  "Role clair",
  "Role flexible",
  "Role leader",
  "Role soutien"
];

export const QUESTION_SECTIONS: SectionTemplate[] = [
  {
    id: "profil",
    title: "Profil",
    pool: [
      {
        id: "profil-1",
        text: "Comment decrivez vous votre rythme naturel",
        options: OPTIONS_RHYTHM,
        signals: ["routine"]
      },
      {
        id: "profil-2",
        text: "Quand vous prenez une decision, vous etes plutot",
        options: OPTIONS_DECISION,
        signals: ["decision"]
      },
      {
        id: "profil-3",
        text: "Quel environnement vous aide a vous concentrer",
        options: [
          "Calme et silence",
          "Musique legere",
          "Bruit de fond",
          "Peu importe"
        ],
        signals: ["calme", "musique"]
      },
      {
        id: "profil-4",
        text: "Quel niveau d organisation vous correspond",
        options: [
          "Tres organise",
          "Plutot organise",
          "Plutot spontanee",
          "Improvisation totale"
        ],
        signals: ["routine"]
      },
      {
        id: "profil-5",
        text: "Vous preferez commencer par",
        options: [
          "Plan clair",
          "Idee globale",
          "Petits essais",
          "Demarrage rapide"
        ],
        signals: ["projet"]
      },
      {
        id: "profil-6",
        text: "Ce qui vous donne confiance au debut",
        options: [
          "Actions concretes",
          "Paroles claires",
          "Recommandations",
          "Temps partage"
        ],
        signals: ["confiance"]
      },
      {
        id: "profil-7",
        text: "Vous etes a l aise dans un cadre",
        options: [
          "Structure fixe",
          "Cadre souple",
          "Cadre creatif",
          "Cadre libre"
        ],
        signals: ["routine", "creatif"]
      },
      {
        id: "profil-8",
        text: "Votre niveau de patience est plutot",
        options: ["Tres patient", "Plutot patient", "Peu patient"],
        signals: []
      },
      {
        id: "profil-9",
        text: "Quand vous apprenez, vous aimez",
        options: OPTIONS_LEARN,
        signals: ["apprentissage"]
      },
      {
        id: "profil-10",
        text: "Ce qui vous decrit le mieux",
        options: [
          "Calme et stable",
          "Curieux et rapide",
          "Creatif et libre",
          "Pragmatique et fiable"
        ],
        signals: ["calme", "creatif"]
      }
    ]
  },
  {
    id: "valeurs",
    title: "Valeurs",
    pool: [
      {
        id: "valeurs-1",
        text: "Quelle valeur guide vos choix",
        options: [
          "Honnetete avant tout",
          "Respect mutuel",
          "Liberte d action",
          "Equite entre tous"
        ],
        signals: ["honnetete"]
      },
      {
        id: "valeurs-2",
        text: "Dans un duo, le plus important est",
        options: [
          "Confiance solide",
          "Communication claire",
          "Objectifs communs",
          "Energie partagee"
        ],
        signals: ["confiance", "communication", "projet"]
      },
      {
        id: "valeurs-3",
        text: "Face a un conflit, vous preferez",
        options: [
          "Discuter vite",
          "Prendre du recul",
          "Chercher compromis",
          "Garder le calme"
        ],
        signals: ["calme", "communication"]
      },
      {
        id: "valeurs-4",
        text: "Quel principe ne doit jamais bouger",
        options: ["Respect", "Honnetete", "Loyaute", "Transparence"],
        signals: ["honnetete", "confiance"]
      },
      {
        id: "valeurs-5",
        text: "Vous valorisez surtout",
        options: ["Le sens", "La progression", "L harmonie", "L autonomie"],
        signals: []
      },
      {
        id: "valeurs-6",
        text: "Dans une decision vous privilegiez",
        options: ["Equite", "Liberte", "Efficacite", "Consensus"],
        signals: ["equite"]
      },
      {
        id: "valeurs-7",
        text: "Qu est ce qui vous rend fier",
        options: [
          "Tenir parole",
          "Aider un proche",
          "Reussir un défi",
          "Apprendre seul"
        ],
        signals: ["confiance", "apprentissage"]
      },
      {
        id: "valeurs-8",
        text: "Quel niveau de risque vous convient",
        options: ["Tres faible", "Modere", "Eleve"],
        signals: []
      },
      {
        id: "valeurs-9",
        text: "Quand vous donnez votre parole vous etes",
        options: ["Toujours constant", "Souvent fiable", "Variable selon cas"],
        signals: ["confiance"]
      },
      {
        id: "valeurs-10",
        text: "Une cause qui vous touche",
        options: [
          "Entraide locale",
          "Education pour tous",
          "Nature protegee",
          "Justice sociale"
        ],
        signals: ["etudes", "nature"]
      }
    ]
  },
  {
    id: "habitudes",
    title: "Habitudes",
    pool: [
      {
        id: "habitudes-1",
        text: "A quelle heure vous etes le plus efficace",
        options: OPTIONS_ENERGY,
        signals: ["routine"]
      },
      {
        id: "habitudes-2",
        text: "Comment demarre votre journee",
        options: [
          "Cafe et plan",
          "Sport rapide",
          "Calme progressif",
          "Debut tardif"
        ],
        signals: ["routine", "sport"]
      },
      {
        id: "habitudes-3",
        text: "A quelle frequence vous planifiez la semaine",
        options: OPTIONS_FREQUENCY,
        signals: ["routine"]
      },
      {
        id: "habitudes-4",
        text: "Quel rituel vous aide a dormir",
        options: [
          "Lecture calme",
          "Musique douce",
          "Silence total",
          "Pas de rituel"
        ],
        signals: ["sommeil", "lecture", "musique"]
      },
      {
        id: "habitudes-5",
        text: "Combien de pauses vous prenez",
        options: ["Tres peu", "Quelques unes", "Regulieres", "Beaucoup"],
        signals: []
      },
      {
        id: "habitudes-6",
        text: "Comment vous gerez les notifications",
        options: [
          "Toujours actives",
          "Filtrees",
          "Mode silence",
          "Je coupe tout"
        ],
        signals: ["routine"]
      },
      {
        id: "habitudes-7",
        text: "Quel moment est le plus calme",
        options: ["Matin", "Midi", "Soiree", "Variable"],
        signals: ["calme"]
      },
      {
        id: "habitudes-8",
        text: "Quel repas vous stabilise le plus",
        options: ["Petit dejeuner", "Dejeuner", "Diner", "Pas fixe"],
        signals: ["routine"]
      },
      {
        id: "habitudes-9",
        text: "Quel geste simple vous recentre",
        options: ["Respiration", "Marche rapide", "Notes ecrites", "Musique"],
        signals: ["calme", "sport", "musique"]
      },
      {
        id: "habitudes-10",
        text: "Quelle habitude vous aimeriez changer",
        options: ["Sommeil", "Stress", "Organisation", "Sport"],
        signals: ["sommeil", "stress", "routine", "sport"]
      }
    ]
  },
  {
    id: "energie",
    title: "Energie",
    pool: [
      {
        id: "energie-1",
        text: "Comment vous rechargez vos batteries",
        options: [
          "Repos calme",
          "Sortie sociale",
          "Sport intense",
          "Creation personnelle"
        ],
        signals: ["calme", "sport", "creatif", "amis"]
      },
      {
        id: "energie-2",
        text: "Votre niveau de stress est plutot",
        options: ["Tres bas", "Modere", "Eleve"],
        signals: ["stress"]
      },
      {
        id: "energie-3",
        text: "Quand la pression monte, vous",
        options: OPTIONS_STRESS,
        signals: ["stress"]
      },
      {
        id: "energie-4",
        text: "Quel facteur vous fatigue le plus",
        options: [
          "Manque de sommeil",
          "Trop de bruit",
          "Charge mentale",
          "Manque de sens"
        ],
        signals: ["sommeil", "calme"]
      },
      {
        id: "energie-5",
        text: "Votre besoin de calme est",
        options: OPTIONS_IMPORTANCE,
        signals: ["calme"]
      },
      {
        id: "energie-6",
        text: "Vous preferez travailler",
        options: [
          "Par blocs courts",
          "Par blocs longs",
          "Par sprints",
          "Sans structure"
        ],
        signals: ["routine", "travail"]
      },
      {
        id: "energie-7",
        text: "Comment vous gerez les nuits courtes",
        options: [
          "Cafe rapide",
          "Pause plus longue",
          "Sport leger",
          "Je reduis le rythme"
        ],
        signals: ["sommeil", "sport"]
      },
      {
        id: "energie-8",
        text: "Quel type de musique vous aide",
        options: [
          "Instrumental doux",
          "Pop energique",
          "Ambiance calme",
          "Sans musique"
        ],
        signals: ["musique", "calme"]
      },
      {
        id: "energie-9",
        text: "Votre niveau d energie est",
        options: ["Stable", "En dents de scie", "Tres variable"],
        signals: []
      },
      {
        id: "energie-10",
        text: "Quand vous avez un coup de mou",
        options: ["Je marche", "Je parle", "Je dors", "Je change d air"],
        signals: ["sport", "amis", "sommeil", "nature"]
      }
    ]
  },
  {
    id: "loisirs",
    title: "Loisirs",
    pool: [
      {
        id: "loisirs-1",
        text: "Quel loisir vous attire le plus",
        options: OPTIONS_LEISURE,
        signals: ["sport", "creatif"]
      },
      {
        id: "loisirs-2",
        text: "Quel type de musique vous energise",
        options: [
          "Hip hop",
          "Electro",
          "Rock",
          "Calme chill"
        ],
        signals: ["musique"]
      },
      {
        id: "loisirs-3",
        text: "Quel film ou serie vous ressemble",
        options: [
          "Action rapide",
          "Drama profond",
          "Comedie legere",
          "Docu inspire"
        ],
        signals: ["film"]
      },
      {
        id: "loisirs-4",
        text: "Quel style de lecture vous attire",
        options: ["Roman", "Essai", "Biographie", "Pas de lecture"],
        signals: ["lecture"]
      },
      {
        id: "loisirs-5",
        text: "Quel jeu vous plait le plus",
        options: [
          "Jeu de strategie",
          "Jeu d equipe",
          "Jeu rapide",
          "Jeu creatif"
        ],
        signals: ["jeu", "equipe"]
      },
      {
        id: "loisirs-6",
        text: "Quel type de voyage vous attire",
        options: OPTIONS_TRAVEL,
        signals: ["voyage", "nature"]
      },
      {
        id: "loisirs-7",
        text: "Quel talent vous aimeriez developper",
        options: [
          "Sportif",
          "Artistique",
          "Technique",
          "Social"
        ],
        signals: ["sport", "creatif", "apprentissage"]
      },
      {
        id: "loisirs-8",
        text: "Votre activite de detente preferee",
        options: [
          "Marche nature",
          "Serie relax",
          "Cuisine maison",
          "Jeu entre amis"
        ],
        signals: ["nature", "film", "cuisine", "amis"]
      },
      {
        id: "loisirs-9",
        text: "Vous preferez un weekend",
        options: [
          "Sorties actives",
          "Repos complet",
          "Projets creatifs",
          "Voyage court"
        ],
        signals: ["sport", "calme", "creatif", "voyage"]
      },
      {
        id: "loisirs-10",
        text: "Quel sport vous attire le plus",
        options: ["Course", "Fitness", "Sport collectif", "Pas de sport"],
        signals: ["sport", "equipe"]
      }
    ]
  },
  {
    id: "relationnel",
    title: "Relationnel",
    pool: [
      {
        id: "relationnel-1",
        text: "Votre cercle d amis est",
        options: ["Tres proche", "Large et ouvert", "Petit et stable", "Variable"],
        signals: ["amis"]
      },
      {
        id: "relationnel-2",
        text: "Quelle place a la famille dans votre vie",
        options: OPTIONS_IMPORTANCE,
        signals: ["famille"]
      },
      {
        id: "relationnel-3",
        text: "Vous preferez passer du temps",
        options: OPTIONS_SOCIAL,
        signals: ["amis"]
      },
      {
        id: "relationnel-4",
        text: "Quand vous rencontrez quelqu un",
        options: [
          "Je parle vite",
          "Je reste reserve",
          "Je pose des questions",
          "Je laisse venir"
        ],
        signals: ["communication"]
      },
      {
        id: "relationnel-5",
        text: "Vous donnez confiance",
        options: ["Rapidement", "Avec le temps", "Selon le contexte"],
        signals: ["confiance"]
      },
      {
        id: "relationnel-6",
        text: "Le soutien d un ami est",
        options: OPTIONS_IMPORTANCE,
        signals: ["amis"]
      },
      {
        id: "relationnel-7",
        text: "Dans un groupe, vous etes",
        options: ["Moteur", "Mediateur", "Observateur", "Organisateur"],
        signals: ["equipe"]
      },
      {
        id: "relationnel-8",
        text: "Vous exprimez votre accord",
        options: ["Clair et direct", "Avec nuance", "Par le geste", "En silence"],
        signals: ["communication"]
      },
      {
        id: "relationnel-9",
        text: "Vous preferez un duo",
        options: ["Tres complementaire", "Tres similaire", "Equilibre", "Peu importe"],
        signals: ["duo"]
      },
      {
        id: "relationnel-10",
        text: "Un bon ami doit etre",
        options: ["Fiable", "Disponible", "Drôle", "Franc"],
        signals: ["amis", "confiance", "honnetete"]
      }
    ]
  },
  {
    id: "communication",
    title: "Communication",
    pool: [
      {
        id: "communication-1",
        text: "Votre style de communication est",
        options: OPTIONS_COMM,
        signals: ["communication"]
      },
      {
        id: "communication-2",
        text: "Vous preferez recevoir un retour",
        options: OPTIONS_FEEDBACK,
        signals: ["communication"]
      },
      {
        id: "communication-3",
        text: "Quand vous etes en desaccord",
        options: [
          "Je dis vite",
          "Je temporise",
          "Je propose options",
          "Je laisse couler"
        ],
        signals: ["communication"]
      },
      {
        id: "communication-4",
        text: "Pour expliquer une idee",
        options: [
          "Exemple concret",
          "Schema simple",
          "Histoire courte",
          "Points cles"
        ],
        signals: []
      },
      {
        id: "communication-5",
        text: "Vous aimez les discussions",
        options: [
          "Profondes",
          "Legeres",
          "Techniques",
          "Creatives"
        ],
        signals: ["communication"]
      },
      {
        id: "communication-6",
        text: "Quand vous racontez une histoire",
        options: [
          "Je vais au fait",
          "Je detaille",
          "Je fais court",
          "Je dramatise"
        ],
        signals: []
      },
      {
        id: "communication-7",
        text: "Votre ton naturel est",
        options: ["Calme", "Enthousiaste", "Serieux", "Humoristique"],
        signals: ["calme"]
      },
      {
        id: "communication-8",
        text: "Vous preferez communiquer",
        options: ["En face", "Par message", "Par appel", "Mixte"],
        signals: ["communication"]
      },
      {
        id: "communication-9",
        text: "Dans un groupe vous parlez",
        options: ["Souvent", "Parfois", "Rarement"],
        signals: ["communication"]
      },
      {
        id: "communication-10",
        text: "Vous ecoutez surtout",
        options: ["Les faits", "Les emotions", "Les details", "Le contexte"],
        signals: ["communication"]
      }
    ]
  },
  {
    id: "travail-etudes",
    title: "Travail et etudes",
    pool: [
      {
        id: "travail-1",
        text: "Votre style de travail est",
        options: OPTIONS_WORK,
        signals: ["travail", "equipe"]
      },
      {
        id: "travail-2",
        text: "Vous preferez un objectif",
        options: ["Clair et court", "Large et libre", "Ambitieux", "Progressif"],
        signals: ["projet"]
      },
      {
        id: "travail-3",
        text: "Quand vous etudiez, vous",
        options: ["Relisez", "Faites des fiches", "Testez", "Expliquez"],
        signals: ["etudes", "apprentissage"]
      },
      {
        id: "travail-4",
        text: "Votre zone de competence preferee",
        options: ["Technique", "Creatif", "Relationnel", "Organisation"],
        signals: ["travail", "creatif"]
      },
      {
        id: "travail-5",
        text: "Votre rythme de travail est",
        options: OPTIONS_RHYTHM,
        signals: ["travail"]
      },
      {
        id: "travail-6",
        text: "Vous aimez les projets",
        options: ["Courts et rapides", "Longs et profonds", "Creatifs", "Techniques"],
        signals: ["projet", "creatif"]
      },
      {
        id: "travail-7",
        text: "Dans un groupe vous prenez",
        options: OPTIONS_TEAM,
        signals: ["equipe"]
      },
      {
        id: "travail-8",
        text: "Votre methode pour apprendre",
        options: OPTIONS_LEARN,
        signals: ["apprentissage"]
      },
      {
        id: "travail-9",
        text: "Le feedback ideal est",
        options: OPTIONS_FEEDBACK,
        signals: ["communication"]
      },
      {
        id: "travail-10",
        text: "Vous preferez travailler",
        options: ["Le matin", "L apres midi", "Le soir", "Sans horaire"],
        signals: ["routine", "travail"]
      }
    ]
  },
  {
    id: "projection",
    title: "Projection",
    pool: [
      {
        id: "projection-1",
        text: "Votre objectif principal actuel",
        options: OPTIONS_MOTIVATION,
        signals: ["projet", "apprentissage"]
      },
      {
        id: "projection-2",
        text: "Dans un an vous voulez",
        options: [
          "Un nouveau projet",
          "Plus de calme",
          "Un nouveau skill",
          "Plus de voyages"
        ],
        signals: ["projet", "calme", "apprentissage", "voyage"]
      },
      {
        id: "projection-3",
        text: "Vous aimeriez apprendre",
        options: ["Langue", "Sport", "Metier", "Art"],
        signals: ["apprentissage", "sport", "travail", "creatif"]
      },
      {
        id: "projection-4",
        text: "Votre motivation vient surtout",
        options: OPTIONS_MOTIVATION,
        signals: ["projet", "apprentissage"]
      },
      {
        id: "projection-5",
        text: "Votre vision du succes est",
        options: ["Equilibre", "Liberte", "Impact", "Reconnaissance"],
        signals: []
      },
      {
        id: "projection-6",
        text: "Le projet ideal pour vous",
        options: [
          "Utile et concret",
          "Creatif et libre",
          "Technique et dur",
          "Social et humain"
        ],
        signals: ["projet", "creatif", "travail", "amis"]
      },
      {
        id: "projection-7",
        text: "Votre prochaine envie forte",
        options: ["Voyager", "Changer routine", "Apprendre", "Construire"],
        signals: ["voyage", "routine", "apprentissage", "projet"]
      },
      {
        id: "projection-8",
        text: "Vous vous projetez plutot",
        options: ["A court terme", "A moyen terme", "A long terme"],
        signals: []
      },
      {
        id: "projection-9",
        text: "Votre plus grande curiosite",
        options: ["Technologie", "Humain", "Nature", "Culture"],
        signals: ["travail", "amis", "nature", "lecture"]
      },
      {
        id: "projection-10",
        text: "Votre energie pour apprendre est",
        options: OPTIONS_IMPORTANCE,
        signals: ["apprentissage"]
      }
    ]
  },
  {
    id: "duo",
    title: "Duo",
    pool: [
      {
        id: "duo-1",
        text: "Le binome ideal est",
        options: OPTIONS_RELATION,
        signals: ["duo", "confiance", "communication"]
      },
      {
        id: "duo-2",
        text: "Dans un duo, vous apportez",
        options: ["Idees", "Organisation", "Energie", "Calme"],
        signals: ["projet", "routine", "calme"]
      },
      {
        id: "duo-3",
        text: "Vous preferez un partenaire",
        options: [
          "Complementaire",
          "Similaire",
          "Plus avance",
          "Plus debutant"
        ],
        signals: ["duo"]
      },
      {
        id: "duo-4",
        text: "Quand un duo bloque, vous",
        options: [
          "Reparlez calmement",
          "Changez d angle",
          "Faites une pause",
          "Passez a autre"
        ],
        signals: ["communication", "calme"]
      },
      {
        id: "duo-5",
        text: "Votre niveau d engagement est",
        options: ["Tres constant", "Plutot stable", "Variable"],
        signals: ["confiance"]
      },
      {
        id: "duo-6",
        text: "Votre rythme prefere en duo",
        options: OPTIONS_RHYTHM,
        signals: ["routine"]
      },
      {
        id: "duo-7",
        text: "Vous aimez les duos",
        options: [
          "Tres structures",
          "Assez flexibles",
          "Creatifs",
          "Sans regles"
        ],
        signals: ["routine", "creatif"]
      },
      {
        id: "duo-8",
        text: "Un duo solide repose sur",
        options: ["Confiance", "Communication", "Objectifs", "Humain"],
        signals: ["confiance", "communication", "projet", "amis"]
      },
      {
        id: "duo-9",
        text: "Vous acceptez mieux",
        options: ["Regles claires", "Regles souples", "Regles minimes"],
        signals: ["routine"]
      },
      {
        id: "duo-10",
        text: "Le meilleur duo est",
        options: [
          "Stable et fiable",
          "Energique",
          "Creatif",
          "Equilibre"
        ],
        signals: ["confiance", "creatif"]
      }
    ]
  }
];
