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

/**
 * @required types is opposite of @partial types
 */
// interface User {
//   id: number;
//   name: string;
//   email?: string;
// }

// function createUser(obj: User): User {
//   return {
//     id: obj.id ?? Date.now(),
//     name: obj.name ?? "Anonymous",
//     email: obj.email ?? "",
//   };
// }

// const newUser = createUser({ id: 1, name: "John Doe" });

// function createAdminUser(obj: Required<User>): User {
//   return {
//     id: obj.id,
//     name: obj.name,
//     email: obj.email,
//   };
// }

// const admin = createAdminUser({
//   id: 2,
//   name: "Admin User",
//   email: "admin@email.com",
// });

// console.log({
//   user: newUser,
//   admin: admin,
// });

/**
 * @partial types is opposite of @required types
 */

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// function updateUser(obj: User, updatedUser: Partial<User>): User {
//   return {
//     ...obj,
//     ...updatedUser,
//   };
// }

// const user: User = {
//   id: 1,
//   name: "John Doe",
//   email: "user@email.com",
// };

// const upUser = updateUser(user, {
//   email: "newemail@gmail.com",
// });

// console.log({
//   oldUser: user,
//   updatedUser: upUser,
// });

/**
 * @readonly types makes all properties readonly
 */

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
// const user: Readonly<User> = {
//   id: 1,
//   name: "John Doe",
//   email: "user@gmail.com",
// };

// user.name = "New Name";
// Error: Cannot assign to 'name' because it is a read-only property.

/**
 * @Record types is used to create a type with a set of properties K of type T
 */

// type Role = "admin" | "user" | "guest";
// type User = {
//   id: number;
//   name: string;
// };

// type Users = Record<Role, User[]>;

// const users: Users = {
//   admin: [
//     {
//       id: 1,
//       name: "Admin User",
//     },
//   ],
//   user: [],
//   guest: [],
// };

// users.admin.forEach((user) => {
//   console.log(`Admin: ${user.name}`);
// });

/**
 * @Pick types is used to create a type by picking a set of properties K from type T
 */

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// }

// type UserPreview = Pick<User, "id" | "name" | "email">;

// const userPreview: UserPreview = {
//   id: 1,
//   name: "John Doe",
//   email: "user@email.com",
// };

/**
 *
 * @Omit Object থেকে property বাদ দেয়
 */

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// }

// type UserWithoutEmailAge = Omit<User, "email" | "age">;

// const userWithoutEmailandAge: UserWithoutEmailAge = {
//   id: 1,
//   name: "John Doe",
// };

// console.log(userWithoutEmailandAge);

/**
 * @Generic types allow you to create reusable components
 */
// enum Status {
//   Pending = "PENDING",
//   InProgress = "IN_PROGRESS",
//   Completed = "COMPLETED",
// }

// interface Task<T> {
//   id: number;
//   title: string;
//   description: string;
//   status: T;
// }

// function createTask<T>(obj: Task<T>): Task<T> {
//   return {
//     id: obj.id ?? Date.now(),
//     title: obj.title ?? "New Task",
//     description: obj.description ?? "",
//     status: obj.status,
//   };
// }

// const newTask = createTask<Status>({
//   id: 1,
//   title: "Learn TypeScript Utility Types",
//   description: "Understand and implement various TypeScript utility types.",
//   status: Status.InProgress,
// });

// console.log({
//   task: newTask,
// });

/**
 *
 * @Exclude utility type example
 * @Exclude	Union type থেকে type বাদ দেয়
 *
 */

// type Status = "Running" | "Completed" | "Pending";
// const status: Exclude<Status, "Running"> = "Completed";

/**
 *
 * @NonNullable utility type example
 */

// type User = {
//   id: number;
//   name: string;
//   email?: string | null;
// };

// const getUserEmail = (user: User): NonNullable<string> => {
//   if (user.email == null) {
//     throw new Error("Email is null or undefined");
//   }
//   return user.email;

//   //or
//   // return user.email!;
// };
