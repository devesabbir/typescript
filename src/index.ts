import { CodeGenerator } from "./lib/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const card = CodeGenerator.CreateElement("div");
  const title = CodeGenerator.CreateElement(
    "h2",
    "card-title",
    undefined,
    "Card Title"
  );

  CodeGenerator.apendToBody(title, card);
});
