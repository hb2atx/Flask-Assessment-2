### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
REST is an architectural style that defines a set of constraints to be used when creating web services. Representational State Transfer (REST)

- What is a resource?
 RESTful architecture, a resource is an entity or object that can be identified, manipulated, and represented.. Resources are the key abstractions in RESTful systems, and they play a central role in designing APIs (Application Programming Interfaces) and web services.

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
Separation of Concerns, Client-Side Rendering, Scalability and Reusability,Flexibility for Different Clients, Reduced Payload Size.
- What does idempotent mean? Which HTTP verbs are idempotent?

- What is the difference between PUT and PATCH?
The PUT method is used to update a resource or create a new resource if it doesn't exist at the specified URI.

The PATCH method is used to apply partial updates to a resource. Instead of sending the full representation of the resource, the client sends only the changes or modifications to be applied.
- What is one way encryption?

- What is the purpose of a `salt` when hashing a password?
The purpose of using a "salt" when hashing a password is to enhance the security of the password storage and protect against certain types of attacks, especially those that involve precomputed tables like rainbow tables.

- What is the purpose of the Bcrypt module?
The bcrypt module is a password-hashing library that is commonly used in software development to securely hash passwords. Its primary purpose is to provide a robust and adaptive hashing algorithm specifically designed for password storage.

- What is the difference between authorization and authentication?
Authentication and authorization are distinct but closely related concepts in the context of security and access control. They refer to different aspects of verifying and managing access to resources within a system.