export type ToolCategory =
  | "Écriture"
  | "Images"
  | "Présentations"
  | "Recherche"
  | "Productivité"
  | "Apprentissage"
  | "Audio & Voix";

export type ToolDifficulty = "Très simple" | "Simple" | "Intermédiaire";

export interface AiTool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  useCase: string;
  link: string;
  difficulty: ToolDifficulty;
  frenchFriendly: boolean;
  isFree: boolean;
  highlight?: string;
}

export const tools: AiTool[] = [
  { id: "chatgpt", name: "ChatGPT", description: "Un assistant IA pour écrire, résumer, expliquer, traduire et trouver des idées.", category: "Écriture", useCase: "Écrire un message, comprendre un sujet, préparer une lettre ou poser une question simple.", link: "https://chat.openai.com/", difficulty: "Très simple", frenchFriendly: true, isFree: true, highlight: "Le meilleur outil pour commencer" },
  { id: "perplexity", name: "Perplexity", description: "Un moteur de recherche IA qui répond avec des sources pour mieux vérifier les informations.", category: "Recherche", useCase: "Faire des recherches rapides, comparer des informations et obtenir des liens utiles.", link: "https://www.perplexity.ai/", difficulty: "Simple", frenchFriendly: true, isFree: true },
  { id: "deepl", name: "DeepL", description: "Un traducteur fiable pour traduire des textes entre le français, l’anglais et d’autres langues.", category: "Écriture", useCase: "Traduire un document, un email, une phrase ou vérifier une formulation.", link: "https://www.deepl.com/translator", difficulty: "Très simple", frenchFriendly: true, isFree: true },
  { id: "gamma", name: "Gamma", description: "Un outil IA pour créer des présentations propres et modernes rapidement.", category: "Présentations", useCase: "Préparer une présentation, un rapport visuel ou une explication bien structurée.", link: "https://gamma.app/", difficulty: "Simple", frenchFriendly: true, isFree: true },
  { id: "canva", name: "Canva", description: "Une plateforme simple pour créer des affiches, présentations, cartes, CV et visuels.", category: "Images", useCase: "Créer un visuel propre sans être graphiste.", link: "https://www.canva.com/", difficulty: "Très simple", frenchFriendly: true, isFree: true },
  { id: "leonardo", name: "Leonardo AI", description: "Un générateur d’images IA pour créer des illustrations, idées visuelles et concepts.", category: "Images", useCase: "Créer une image à partir d’une description.", link: "https://leonardo.ai/", difficulty: "Intermédiaire", frenchFriendly: false, isFree: true },
  { id: "notion-ai", name: "Notion AI", description: "Un espace de notes avec IA pour organiser des idées, résumer et planifier.", category: "Productivité", useCase: "Organiser des notes, faire une liste, résumer un texte ou planifier un projet.", link: "https://www.notion.so/product/ai", difficulty: "Intermédiaire", frenchFriendly: true, isFree: false },
  { id: "elevenlabs", name: "ElevenLabs", description: "Un outil de voix IA pour générer ou transformer de l’audio avec des voix naturelles.", category: "Audio & Voix", useCase: "Créer une voix off, écouter un texte ou expérimenter avec l’audio.", link: "https://elevenlabs.io/", difficulty: "Intermédiaire", frenchFriendly: false, isFree: true },
  { id: "duolingo", name: "Duolingo", description: "Une application simple pour apprendre ou pratiquer une langue chaque jour.", category: "Apprentissage", useCase: "Pratiquer l’anglais, apprendre une langue ou garder une routine d’apprentissage.", link: "https://www.duolingo.com/", difficulty: "Très simple", frenchFriendly: true, isFree: true },
  { id: "suno", name: "Suno", description: "Un outil IA qui aide à créer des chansons à partir d’une idée ou d’un texte.", category: "Audio & Voix", useCase: "Créer une chanson, un jingle ou une idée musicale.", link: "https://suno.com/", difficulty: "Simple", frenchFriendly: false, isFree: true }
];

export const categories = ["Tous", ...Array.from(new Set(tools.map((tool) => tool.category)))] as const;
