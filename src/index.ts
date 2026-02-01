import { CodeGenerator } from "./utils/index.js";

document.addEventListener("DOMContentLoaded", function (e) {
  initializeApp();
});

function initializeApp() {
  const title = CodeGenerator.CreateElement({
    tagName: "h1",
    className: "title",
    textContent: "TypeScript Utility Types Example Check the console",
  });

  CodeGenerator.apendToBody(title);
}
