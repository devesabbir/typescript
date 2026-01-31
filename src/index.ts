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

interface Car {
  make: string;
  model: string;
  year: number;
}

interface Person extends Car {
  name: string;
  age: number;
}

const person1: Partial<Person> = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};
