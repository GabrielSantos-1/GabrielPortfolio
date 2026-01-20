// src/data/projects.js

export const projects = [
 {
  id: "desenvolvimento-web",
  title: "Desenvolvimento Web",
  description: "Coleção de práticas e páginas em HTML/CSS para base sólida de front-end.",
  category: "Frontend",
  level: "Fundamentos",
  tags: ["HTML", "CSS"],
  highlights: ["Layouts responsivos", "Prática com semântica e CSS", "Base sólida para UI"],
  image: "/projects/onganimais.png",     // thumb normal
  previewVideo: "/previews/onganimaisaban.mp4", // ✅ vídeo pro hover
  repoUrl: "https://github.com/GabrielSantos-1/Projeto-ONG-animais-abandonados",
  liveUrl: null,
  features: ["Páginas estáticas", "Boas práticas", "Responsividade"],
}
,

  {
    id: "android-diagnostic-adb",
    title: "Android Diagnostic App (ADB)",
    description:
      "Ferramenta em Python que conecta via ADB e exibe informações do Android.",
    category: "Automação",
    level: "Intermediário",
    tags: ["Python", "ADB"],
    highlights: [
      "Coleta de dados via ADB",
      "Automação e diagnóstico",
      "CLI simples e funcional",
    ],
    image: "/projects/android-adb.png",
    repoUrl: "https://github.com/GabrielSantos-1/android-diagnostic-app",
    liveUrl: null,
    features: [
      "Conexão com dispositivo Android",
      "Leitura de informações do sistema",
      "Exibição organizada e objetiva",
    ],
  },

  {
    id: "projeto-3-educacao",
    title: "Projeto 3 — Educação",
    description:
      "Aplicação web para educação interativa com tutoriais e mini-jogo de digitação.",
    category: "Fullstack",
    level: "Intermediário",
    tags: ["React", "Vite", "JavaScript", "TypeScript"],
    highlights: [
      "Rotas e UI modular",
      "Progresso salvo localmente",
      "Base pronta para evolução",
    ],
    image: "/projects/projeto3.png",
    repoUrl: "https://github.com/GabrielSantos-1/projeto3-educacao",
    liveUrl: null,
    features: [
      "Tutoriais com passos e progresso",
      "Mini jogo de digitação",
      "Estrutura escalável por módulos",
    ],
  },
];
