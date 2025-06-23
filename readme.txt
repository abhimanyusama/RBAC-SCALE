✅ PHASE 1: Project Setup & Folder Structure
Initialize Node.js project with ES modules

Install dependencies

Define industrial folder structure

Setup Express server

✅ PHASE 2: MongoDB, User Auth (with express-session)
Connect MongoDB using Mongoose

Create User model (with roles, attributes)

Implement registration & login using express-session

Secure session handling

✅ PHASE 3: Authorization - RBAC, ABAC, ACL
Implement Role-Based Access Control (RBAC)

Extend with Attribute-Based Access Control (ABAC)

Implement Access Control Lists (ACL)

✅ PHASE 4: Blog Post CRUD
Create Post model

Allow users to create, read, update, delete blog posts

Apply access checks (RBAC, ABAC, ACL)

✅ PHASE 5: Security & Hardening
Use HTTPS (not applicable in localhost unless certs are added)

Rate limiting, input validation

Secure token/session management

Setup audit logs for access decisions

✅ PHASE 6: Testing & Docs
API testing with Postman

Swagger/OpenAPI docs

Unit & integration tests

.
├── config/
│   ├── db.js
│   └── session.js
├── controllers/
│   ├── authController.js
│   └── postController.js
├── middlewares/
│   ├── authMiddleware.js
│   ├── rbac.js
│   ├── abac.js
│   └── acl.js
├── models/
│   ├── User.js
│   └── Post.js
├── routes/
│   ├── authRoutes.js
│   └── postRoutes.js
├── utils/
│   ├── logger.js
│   └── audit.js
├── .env
├── app.js
└── server.js
