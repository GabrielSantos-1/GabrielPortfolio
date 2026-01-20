import { projects as allProjects } from "../data/projects.js";
import { projectCard } from "./projectCard.js";

// ✅ agora aceita uma lista externa opcional
export function renderProjects(list = allProjects) {
  return `
    <div class="projects-grid">
      ${list.map(projectCard).join("")}
    </div>
  `;
}



document.addEventListener("mouseover", (e) => {
  const card = e.target.closest?.(".card");
  if (!card) return;

  const video = card.querySelector(".thumb-video");
  if (video) video.play?.().catch(() => {});
});

document.addEventListener("mouseout", (e) => {
  const card = e.target.closest?.(".card");
  if (!card) return;

  const video = card.querySelector(".thumb-video");
  if (video) {
    video.pause?.();
    video.currentTime = 0;
  }
});
