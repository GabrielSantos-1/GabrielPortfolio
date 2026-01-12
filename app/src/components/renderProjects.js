import { projects } from "../data/projects.js";
import { projectCard } from "./projectCard.js";

export function renderProjects() {
  return projects.map(projectCard).join("");
}


