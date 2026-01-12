export function projectCard(p) {
  const tech = (p.tech || []).map(t => `<span class="tag">${t}</span>`).join("");
  const demo = p.demo ? `<a class="btn btn-ghost" href="${p.demo}" target="_blank" rel="noreferrer">Demo</a>` : "";
  const repo = p.repo ? `<a class="btn" href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>` : "";

  return `
    <article class="card">
      <div class="card-top">
        <h3>${p.title}</h3>
        <span class="pill">${p.highlight ?? "Projeto"}</span>
      </div>
      <p class="muted">${p.description ?? ""}</p>
      <div class="tags">${tech}</div>
      <div class="card-actions">
        ${repo}
        ${demo}
      </div>
    </article>
  `;
}
