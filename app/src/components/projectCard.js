export function projectCard(p) {
  const tagsArr = p.tags ?? p.tech ?? [];
  const repoUrl = p.repoUrl ?? p.repo ?? null;
  const liveUrl = p.liveUrl ?? p.demo ?? null;

  const category = p.category ?? "Projeto";
  const level = p.level ?? p.highlight ?? null;

  const tags = (tagsArr || [])
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  const highlightsArr = p.highlights ?? [];
  const highlights =
    highlightsArr.length > 0
      ? `
        <ul class="highlights">
          ${highlightsArr.slice(0, 3).map((h) => `<li>${h}</li>`).join("")}
        </ul>
      `
      : "";

  // ✅ Thumb com hover preview
  const thumb = `
    <div class="thumb">
      ${p.image ? `<img class="thumb-img" src="${p.image}" alt="Preview do projeto ${p.title}" loading="lazy" />` : ""}

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
  `;

  const repo = repoUrl
    ? `<a class="btn" href="${repoUrl}" target="_blank" rel="noreferrer">Repo</a>`
    : "";

  const demo = liveUrl
    ? `<a class="btn btn-ghost" href="${liveUrl}" target="_blank" rel="noreferrer">Demo</a>`
    : "";

  const details = p.id ? `<a class="btn btn-outline" href="/projects/${p.id}">Detalhes</a>` : "";

  return `
    <article class="card">
      ${thumb}

      <div class="card-body">
        <div class="card-top">
          <h3>${p.title}</h3>
          <div class="pills">
            <span class="pill">${category}</span>
            ${level ? `<span class="pill pill-soft">${level}</span>` : ""}
          </div>
        </div>

        <p class="muted">${p.description ?? ""}</p>

        ${highlights}

        <div class="tags">${tags}</div>

        <div class="card-actions">
          ${repo}
          ${demo}
          ${details}
        </div>
      </div>
    </article>
  `;
}

