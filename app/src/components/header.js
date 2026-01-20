export function Header() {
  return `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">Gabriel</div>
        <nav class="nav">
          <a href="#projects">Projetos</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
          <button class="btn btn-ghost" id="themeToggle" type="button">
            Tema
          </button>
        </nav>
      </div>
    </header>
  `;
}
