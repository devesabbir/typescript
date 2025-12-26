/**
 * TypeScript offers two ways to work with types:
 * Explicit Typing: You explicitly declare the type of a variable
 * Type Inference: TypeScript automatically determines the type based on the assigned value
 */
// Explicit Typing
var nameFromExplicit = "Alice";
var ageFromExplicit = 30;
var isStudentFromExplicit = false;
var hobbiesFromExplicit = ["reading", "traveling", "swimming"];
// Type Inference
var nameFromInference = "Bob"; // inferred as string
var ageFromInference = 25; // inferred as number
var isStudentFromInference = true; // inferred as boolean
var hobbiesFromInference = ["gaming", "coding", "hiking"]; // inferred as string[]
// Function with explicit typing
function greetExplicit(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greetExplicit(nameFromExplicit)); // Output: Hello, Alice!
// Function with type inference
function greetInference(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greetInference(nameFromInference)); // Output: Hello, Bob!
