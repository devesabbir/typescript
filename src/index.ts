/**
 * TypeScript offers two ways to work with types:
 * Explicit Typing: You explicitly declare the type of a variable
 * Type Inference: TypeScript automatically determines the type based on the assigned value
 */

// Explicit Typing
let nameFromExplicit: string = "Alice";
let ageFromExplicit: number = 30;
let isStudentFromExplicit: boolean = false;
let hobbiesFromExplicit: string[] = ["reading", "traveling", "swimming"];

// Type Inference

let nameFromInference = "Bob"; // inferred as string
let ageFromInference = 25; // inferred as number
let isStudentFromInference = true; // inferred as boolean
let hobbiesFromInference = ["gaming", "coding", "hiking"]; // inferred as string[]
// Function with explicit typing
function greetExplicit(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greetExplicit(nameFromExplicit)); // Output: Hello, Alice!
// Function with type inference
function greetInference(name: string) {
  return `Hello, ${name}!`;
}

console.log(greetInference(nameFromInference)); // Output: Hello, Bob!
