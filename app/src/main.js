
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/sections.css";

import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { renderProjects } from "./components/renderProjects.js";
import { projects } from "./data/projects.js";

const projectsFilterState = {
  q: "",
  category: "Todos",
  level: "Todos",
};

function normalizeText(s) {
  return (s ?? "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function applyProjectFilters(list, state) {
  const q = normalizeText(state.q);

  return list.filter((p) => {
    const category = p.category ?? "Projeto";
    const level = p.level ?? "Fundamentos";
    const tags = (p.tags ?? p.tech ?? []).join(" ");

    const haystack = normalizeText(`${p.title} ${p.description} ${category} ${level} ${tags}`);

    const matchQuery = q.length === 0 || haystack.includes(q);
    const matchCategory = state.category === "Todos" || category === state.category;
    const matchLevel = state.level === "Todos" || level === state.level;

    return matchQuery && matchCategory && matchLevel;
  });
}

const THEME_KEY = "portfolio_theme";

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;

  // se não tiver salvo, pega do sistema
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme || "dark";
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
}

function bindThemeToggle() {
  const btn = document.querySelector("#themeToggle");
  if (!btn) return;

  btn.addEventListener("click", toggleTheme);
}


function AboutSection() {
  return `
    <section id="about" class="section">
      <div class="section-head">
        <h2>Sobre</h2>
        <p class="muted">
          Perfil técnico focado em Web, Automação e Segurança. Construo projetos com base
          em boas práticas, performance e documentação.
        </p>
      </div>

      <div class="card">
        <h3>O que eu faço</h3>
        <ul class="list">
          <li><strong>Front-end:</strong> HTML, CSS, JS, acessibilidade e responsividade</li>
          <li><strong>Automação:</strong> scripts e ferramentas para reduzir trabalho manual</li>
          <li><strong>Segurança:</strong> base em redes, Linux e hardening (em evolução contínua)</li>
        </ul>

        <div class="chips" style="margin-top:12px;">
          <span class="chip">Linux</span>
          <span class="chip">JavaScript</span>
          <span class="chip">HTML/CSS</span>
          <span class="chip">Node</span>
          <span class="chip">Segurança</span>
        </div>
      </div>
    </section>
  `;
}

function ContactSection() {
  return `
    <section id="contact" class="section">
      <div class="section-head">
        <h2>Contato</h2>
        <p class="muted">Canais diretos. Sem formulário por enquanto (mais simples e confiável).</p>
      </div>

      <div class="grid">
        <article class="card">
          <h3>Email</h3>
          <p class="muted">Melhor para propostas e contato formal.</p>
          <a class="btn" href="mailto:SEUEMAIL@exemplo.com">Enviar email</a>
        </article>

        <article class="card">
          <h3>GitHub</h3>
          <p class="muted">Código, commits e evolução dos projetos.</p>
          <a class="btn" target="_blank" rel="noreferrer" href="https://github.com/GabrielSantos-1">
            Ver GitHub
          </a>
        </article>

        <article class="card">
          <h3>LinkedIn</h3>
          <p class="muted">Perfil profissional e networking.</p>
          <a class="btn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/SEU-USUARIO/">
            Abrir LinkedIn
          </a>
        </article>
      </div>
    </section>
  `;
}

function HeroSection() {
  return `
    <section class="hero">
      <div class="hero-content">
        <h1>Gabriel Santos</h1>
        <p class="muted">Portfólio (Web + Automação + Segurança)</p>

       <div class="hero-actions">
          <a class="btn" href="#projects">Ver projetos</a>

          <a class="btn btn-ghost" target="_blank" rel="noreferrer"
            href="https://www.linkedin.com/in/SEU-USUARIO/">
            LinkedIn
          </a>

          <a class="btn btn-outline" target="_blank" rel="noreferrer"
            href="/cv/Gabriel-Santos-CV.pdf">
          Baixar CV
          </a>
        </div>
      </div>
    </section>
  `;
}

function getProjectById(id) {
  return projects.find((p) => p.id === id) ?? null;
}

function ProjectDetailPage(projectId) {
  const p = getProjectById(projectId);

  if (!p) {
    return `
      <section class="section">
        <div class="section-head">
          <h2>Projeto não encontrado</h2>
          <p class="muted">Esse ID não existe no <code>src/data/projects.js</code>.</p>
        </div>
        <a class="btn" href="/">Voltar</a>
      </section>
    `;
  }

  const tagsArr = p.tags ?? p.tech ?? [];
  const repoUrl = p.repoUrl ?? p.repo ?? null;
  const liveUrl = p.liveUrl ?? p.demo ?? null;

  const tags = tagsArr.map((t) => `<span class="tag">${t}</span>`).join("");

  const highlights = (p.highlights ?? [])
    .map((h) => `<li>${h}</li>`)
    .join("");

  const features = (p.features ?? [])
    .map((f) => `<li>${f}</li>`)
    .join("");

  const media = p.image
    ? `
      <div class="thumb" style="margin-top:14px;">
        <img class="thumb-img" src="${p.image}" alt="Preview do projeto ${p.title}" loading="lazy" />
        ${
          p.previewVideo
            ? `
              <video class="thumb-video" muted loop playsinline preload="metadata">
                <source src="${p.previewVideo}" type="video/mp4" />
              </video>
            `
            : ""
        }
      </div>
    `
    : "";

  return `
    <section class="section">
      <div class="section-head">
        <h2>${p.title}</h2>
        <p class="muted">${p.description ?? ""}</p>
      </div>

      ${media}

      <div class="card" style="margin-top:14px;">
        <div class="pills" style="display:flex; gap:8px; flex-wrap:wrap;">
          <span class="pill">${p.category ?? "Projeto"}</span>
          ${p.level ? `<span class="pill pill-soft">${p.level}</span>` : ""}
        </div>

        <div class="tags" style="margin-top:12px;">${tags}</div>

        ${
          highlights
            ? `
              <h3 style="margin-top:14px;">Destaques</h3>
              <ul class="list">${highlights}</ul>
            `
            : ""
        }

        ${
          features
            ? `
              <h3 style="margin-top:14px;">Funcionalidades</h3>
              <ul class="list">${features}</ul>
            `
            : ""
        }

        <div class="card-actions" style="margin-top:14px;">
          ${repoUrl ? `<a class="btn" target="_blank" rel="noreferrer" href="${repoUrl}">Repo</a>` : ""}
          ${liveUrl ? `<a class="btn btn-ghost" target="_blank" rel="noreferrer" href="${liveUrl}">Demo</a>` : ""}
          <a class="btn btn-outline" href="/" data-back="true">Voltar</a>
          <a class="btn btn-ghost" href="/#projects">Projetos</a>
        </div>
      </div>
    </section>
  `;
}

function enableSpaLinks() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest?.("a");
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href) return;

    // deixa âncoras (#projects) funcionarem normal
    if (href.startsWith("#")) return;

    // só intercepta links internos
    const url = new URL(a.href, window.location.href);
    if (url.origin !== window.location.origin) return;

    if (a.dataset.back === "true") {
  e.preventDefault();
  history.back();
  return;
}

    e.preventDefault();
    history.pushState({}, "", url.pathname);
    renderApp();

    // scroll top ao trocar de "página"
    window.scrollTo({ top: 0, behavior: "auto" });
  });

  window.addEventListener("popstate", renderApp);
}

function renderApp() {
  const app = document.querySelector("#app");
  const path = window.location.pathname;

  // rota de detalhes: /projects/:id
  const isProjectDetail = path.startsWith("/projects/");
  const projectId = isProjectDetail ? path.split("/projects/")[1] : null;

  app.innerHTML = `
    <a class="skip-link" href="#projects">Pular para conteúdo</a>
    ${Header()}
    <main class="layout">
      ${
        isProjectDetail && projectId
          ? ProjectDetailPage(projectId)
          : `
            ${HeroSection()}

            <section id="projects" class="section">
              <div class="section-head">
                <h2>Projetos</h2>
                <p class="muted">Busque e filtre por categoria e nível.</p>
                <p class="muted" id="projectsCount"></p>
              </div>

              <div class="projects-filters">
                <input
                  id="projectsSearch"
                  class="input"
                  type="text"
                  placeholder="Buscar por nome, tech, descrição..."
                  value="${projectsFilterState.q}"
                />

                <select id="projectsCategory" class="select">
                  <option value="Todos">Todas categorias</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Automação">Automação</option>
                  <option value="Fullstack">Fullstack</option>
                  <option value="Segurança">Segurança</option>
                </select>
                
                <select id="projectsLevel" class="select">
                  <option value="Todos">Todos níveis</option>
                  <option value="Fundamentos">Fundamentos</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
                    
                <button id="projectsClear" class="btn btn-outline">Limpar</button>
              </div>

              <div id="projectsResults">
                ${renderProjects(applyProjectFilters(projects, projectsFilterState))}
              </div>
            </section>


            ${AboutSection()}
            ${ContactSection()}
          `
      }
    </main>
    ${Footer()}
  `;
  bindThemeToggle();
  bindProjectsFilters();
}

setTheme(getInitialTheme());

enableSpaLinks();
renderApp();

function bindProjectsFilters() {
  const search = document.querySelector("#projectsSearch");
  const category = document.querySelector("#projectsCategory");
  const level = document.querySelector("#projectsLevel");
  const clear = document.querySelector("#projectsClear");
  const results = document.querySelector("#projectsResults");

  if (!search || !category || !level || !clear || !results) return;

  // colocar selects no estado atual
  category.value = projectsFilterState.category;
  level.value = projectsFilterState.level;

  function rerenderResults() {
    const filtered = applyProjectFilters(projects, projectsFilterState);
    results.innerHTML = renderProjects(filtered);
    const countEl = document.querySelector("#projectsCount");
    if (countEl) countEl.textContent = `${filtered.length} projeto(s) encontrados`;

  }

  search.addEventListener("input", (e) => {
    projectsFilterState.q = e.target.value;
    rerenderResults();
  });

  category.addEventListener("change", (e) => {
    projectsFilterState.category = e.target.value;
    rerenderResults();
  });

  level.addEventListener("change", (e) => {
    projectsFilterState.level = e.target.value;
    rerenderResults();
  });

  clear.addEventListener("click", () => {
    projectsFilterState.q = "";
    projectsFilterState.category = "Todos";
    projectsFilterState.level = "Todos";

    search.value = "";
    category.value = "Todos";
    level.value = "Todos";

    rerenderResults();
  });
}
