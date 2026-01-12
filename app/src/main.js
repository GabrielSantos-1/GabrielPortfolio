import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/sections.css";

import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { renderProjects } from "./components/renderProjects.js";

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
             href="https://github.com/GabrielSantos-1">GitHub</a>
        </div>
      </div>
    </section>
  `;
}

function renderApp() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <a class="skip-link" href="#projects">Pular para conteúdo</a>
    ${Header()}
    <main class="layout">
      ${HeroSection()}

      <section id="projects" class="section">
        <div class="section-head">
          <h2>Projetos</h2>
          <p class="muted">Cards gerados a partir de <code>src/data/projects.js</code></p>
        </div>
        ${renderProjects()}
      </section>

      ${AboutSection()}
      ${ContactSection()}
    </main>
    ${Footer()}
  `;
}

renderApp();
