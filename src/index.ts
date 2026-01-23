// TypeScript code demonstrating the use of optional and required properties in interfaces
interface User {
  id: number;
  name: string;
  email?: string;
}

function createUser(obj: User): User {
  return {
    id: obj.id ?? Date.now(),
    name: obj.name ?? "Anonymous",
    email: obj.email ?? "",
  };
}

const newUser = createUser({ id: 1, name: "John Doe" });

function createAdminUser(obj: Required<User>): User {
  return {
    id: obj.id,
    name: obj.name,
    email: obj.email,
  };
}

const admin = createAdminUser({
  id: 2,
  name: "Admin User",
  email: "admin@email.com",
});

console.log({
  user: newUser,
  admin: admin,
});
