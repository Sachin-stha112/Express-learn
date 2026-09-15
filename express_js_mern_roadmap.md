# Express.js Roadmap — MERN Stack

## Goal

Learn Express.js specifically for building production-quality MERN backends.

### Prerequisites

Already completed / assumed knowledge:

- HTML
- CSS
- Tailwind CSS
- JavaScript
- React
- Node.js
- Modern JavaScript / ES Modules
- Basic async/await, promises, npm, and modules

Do **not** reteach these unless they are directly needed for an Express concept.

---

# How the AI Should Teach Me

Follow the roadmap **strictly in order** unless a dependency makes a temporary detour necessary.

For every topic:

1. Explain **what it is**
2. Explain **why it exists / why developers use it**
3. Show the **syntax**
4. Give a **small modern ES module example**
5. Explain the code
6. Show a realistic Express/MERN use case
7. Mention common mistakes
8. Give me a small practice task
9. Ask/allow me to confirm that I understand before moving on
10. Then transition naturally to the next topic

### Teaching style

- Use modern Express and JavaScript practices.
- Prefer ES Modules (`import` / `export`) rather than CommonJS (`require`).
- Do not follow beginner tutorials mechanically.
- Do not spend excessive time on Node.js concepts I already know.
- Group closely related concepts together when appropriate.
- Clearly distinguish similar concepts.
- Focus on understanding **request → middleware → route → controller → database → response**.
- Gradually move from tiny examples to realistic MERN architecture.
- Do not introduce advanced concepts before their prerequisites.
- Do not make me memorize APIs without explaining their purpose.
- Use small projects to reinforce major phases.

---

# Importance Levels

## 🔴 Tier 1 — Essential

Must understand before moving into serious MERN backend development.

- Express setup
- Express application
- Server creation
- Routing
- HTTP methods
- Request object
- Response object
- `req.params`
- `req.query`
- `req.body`
- Response methods
- HTTP status codes
- Middleware
- `app.use()`
- `next()`
- `express.Router()`
- Route organization
- CRUD APIs
- REST API fundamentals
- Basic error handling

## 🟠 Tier 2 — Very Important

Required for building real-world MERN applications.

- Controllers
- Project architecture
- Async route handlers
- Centralized error handling
- MongoDB integration
- Mongoose
- Schemas
- Models
- Database CRUD
- Authentication
- Password hashing
- JWT
- Authentication middleware
- Authorization / roles
- Environment variables
- CORS
- Input validation

## 🟡 Tier 3 — Important but Later

Learn after I can comfortably build CRUD + authentication.

- Cookies
- Sessions
- File uploads
- Pagination
- Filtering
- Sorting
- Searching
- Logging
- Rate limiting
- Security headers
- API documentation
- Advanced middleware patterns

## 🟢 Tier 4 — Advanced / Specialized

Do not prioritize these during the initial MERN learning path.

- WebSockets
- Performance optimization
- Clustering
- Load balancing
- Microservices
- Message queues
- Distributed systems
- Advanced deployment architecture

---

# Phase 1 — Express Fundamentals 🔴

## 1. Express Setup

Learn:

- Installing Express
- `package.json`
- ES module configuration
- Importing Express
- `express()`
- Creating the application instance

Transition:

`Node.js → Express application`

---

## 2. Creating the Server

Learn:

- `app.listen()`
- Port configuration
- Starting the development server
- Basic server structure
- Separating `app.js` and `server.js`

Transition:

`Express application → HTTP server`

---

## 3. Routing 🔴

Learn:

- What routing means
- `app.get()`
- `app.post()`
- `app.put()`
- `app.patch()`
- `app.delete()`
- Route paths
- Route matching
- Route parameters

Transition:

`Server → Routes`

---

## 4. Request Object 🔴

Learn:

- `req.params`
- `req.query`
- `req.body`
- `req.headers`
- `req.method`
- `req.url`

Understand the difference:

```text
/api/users/123
         ↑
      req.params

/api/users?page=2
              ↑
          req.query

JSON sent by client
       ↓
   req.body
```

Transition:

`Route → Read client request`

---

## 5. Response Object 🔴

Learn:

- `res.send()`
- `res.json()`
- `res.status()`
- `res.sendStatus()`
- `res.end()`
- Chaining response methods

Understand:

```js
res.status(200).json(data)
```

Transition:

`Read request → Send response`

---

## 6. HTTP Status Codes 🔴

Learn the commonly used codes:

```text
200 → OK
201 → Created
204 → No Content

400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
409 → Conflict
422 → Unprocessable Entity

500 → Internal Server Error
```

Focus on knowing **when to use each**, not memorizing every HTTP status code.

---

# Phase 2 — Middleware 🔴⭐⭐⭐

## 7. Middleware Concept

Learn:

- What middleware is
- Why Express uses middleware
- Request pipeline
- Middleware execution order
- `next()`

Mental model:

```text
Request
   ↓
Middleware 1
   ↓
Middleware 2
   ↓
Middleware 3
   ↓
Route Handler
   ↓
Response
```

---

## 8. `app.use()`

Learn:

- Global middleware
- Path-specific middleware
- Middleware ordering

---

## 9. Custom Middleware

Build examples such as:

- Request logger
- Authentication checker
- Request timer
- Simple authorization middleware

---

## 10. Built-in Middleware

Learn:

- `express.json()`
- `express.urlencoded()`
- Static file serving with `express.static()`

Understand why JSON request bodies require body parsing middleware.

---

## 11. Error Middleware

Learn:

- Error middleware signature
- `next(error)`
- Error propagation
- Centralized error middleware

Mental model:

```text
Route
  ↓
Error occurs
  ↓
next(error)
  ↓
Error middleware
  ↓
Response
```

Transition:

`Middleware → Routers`

---

# Phase 3 — Routers & Project Structure 🔴

## 12. `express.Router()`

Learn:

- Why routers exist
- Creating routers
- Router HTTP methods
- Mounting routers with `app.use()`
- Router-level middleware

Example architecture:

```text
app.js
   ↓
/api/users
   ↓
user.routes.js
```

---

## 13. Route Organization

Move from:

```text
app.js
 ├── GET /users
 ├── POST /users
 ├── DELETE /users
 └── ...
```

to:

```text
src/
├── app.js
├── server.js
└── routes/
    ├── user.routes.js
    ├── product.routes.js
    └── auth.routes.js
```

Understand **why** routes are separated.

---

# Phase 4 — Controllers & Architecture 🟠

## 14. Controllers

Learn:

- What controllers are
- Why route handlers shouldn't contain everything
- Route → Controller relationship
- Controller responsibilities

Flow:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Response
```

---

## 15. Separation of Concerns

Learn the responsibilities of:

```text
Routes
Controllers
Services
Models
Middleware
Utils
```

Recommended architecture:

```text
src/
├── app.js
├── server.js
│
├── routes/
├── controllers/
├── services/
├── models/
├── middleware/
└── utils/
```

Do not blindly copy this structure. Understand when and why each layer exists.

---

# Phase 5 — REST APIs 🔴⭐⭐⭐

## 16. REST Fundamentals

Learn:

- Resources
- Endpoints
- HTTP methods
- Stateless requests
- Resource-oriented URLs

Example:

```text
GET    /api/users
GET    /api/users/:id
POST   /api/users
PATCH  /api/users/:id
DELETE /api/users/:id
```

---

## 17. CRUD API

Build a complete CRUD API.

```text
Create
  ↓
Read
  ↓
Update
  ↓
Delete
```

Do this first with in-memory data.

Then replace the data source with MongoDB.

---

## 18. API Response Design

Learn:

- Consistent JSON responses
- Success responses
- Error responses
- Status codes
- Useful error messages
- Avoiding accidental sensitive data exposure

---

# Phase 6 — Error Handling 🟠⭐⭐⭐

## 19. Async Errors

Learn:

- `async/await`
- Promise errors
- `try/catch`
- Passing errors to Express

---

## 20. Centralized Error Handling

Build a reusable error-handling system.

Understand:

```text
Controller
   ↓
Error
   ↓
next(error)
   ↓
Central error middleware
   ↓
Consistent API error
```

---

## 21. Custom Errors

Learn how to represent errors such as:

```text
User not found
Invalid credentials
Duplicate email
Invalid input
Unauthorized
Forbidden
```

---

# Phase 7 — MongoDB + Mongoose 🟠⭐⭐⭐

This phase connects Express to the database and turns the API into a real backend.

## 22. MongoDB Connection

Learn:

- Connecting Express to MongoDB
- Environment variables
- Connection lifecycle
- Handling connection errors

---

## 23. Mongoose Schemas

Learn:

- Schema
- Fields
- Types
- Required fields
- Defaults
- Validation
- Timestamps

---

## 24. Mongoose Models

Understand:

```text
Schema
   ↓
Model
   ↓
MongoDB collection
```

---

## 25. Database CRUD

Implement:

```text
POST → create
GET → read
PATCH/PUT → update
DELETE → delete
```

---

## 26. Querying

Learn:

- Finding documents
- Filtering
- Selecting fields
- Sorting
- Limiting
- Basic MongoDB queries

---

## 27. Relationships

Learn:

- References
- ObjectId
- `populate()`
- When to embed vs reference

Do not overcomplicate database relationships initially.

---

# Phase 8 — Authentication & Authorization 🟠⭐⭐⭐

## 28. User Registration

Flow:

```text
Client
 ↓
POST /register
 ↓
Validate input
 ↓
Hash password
 ↓
Create user
 ↓
Save to MongoDB
 ↓
Response
```

---

## 29. Password Hashing

Learn:

- Why passwords must never be stored directly
- Hashing
- Salting
- Password comparison

---

## 30. Login

Learn:

```text
Login request
    ↓
Find user
    ↓
Compare password
    ↓
Create authentication token
    ↓
Return authentication result
```

---

## 31. JWT

Learn:

- What JWT is
- Header
- Payload
- Signature
- Signing
- Verification
- Token expiration
- What should / should not be stored in a JWT

---

## 32. Authentication Middleware

Build:

```text
Request
 ↓
Auth middleware
 ↓
Verify token
 ↓
Identify user
 ↓
next()
 ↓
Protected controller
```

---

## 33. Authorization

Understand the difference:

```text
Authentication
→ Who are you?

Authorization
→ What are you allowed to do?
```

Implement role-based examples:

```text
USER
ADMIN
```

---

# Phase 9 — Validation & Security 🟠

## 34. Input Validation

Learn:

- Validate request bodies
- Validate params
- Validate query parameters
- Validation errors
- Schema-based validation

Use a modern validation library when appropriate rather than manually writing every validation rule.

---

## 35. CORS

Learn:

- What CORS is
- Why React + Express needs CORS configuration
- Origins
- Credentials
- Common CORS mistakes

Mental model:

```text
React frontend
      ↓
   Browser
      ↓
 CORS policy
      ↓
Express backend
```

---

## 36. Environment Variables

Learn:

- `.env`
- Secrets
- Database URLs
- JWT secrets
- Development vs production configuration

Never commit secrets to Git.

---

## 37. Basic API Security

Learn:

- Security headers
- Rate limiting
- Input validation
- Sanitization where appropriate
- Preventing sensitive information leakage
- Secure authentication practices

---

# Phase 10 — Useful Advanced Express Features 🟡

Only begin after the previous phases are comfortable.

## 38. Cookies

Learn:

- What cookies are
- Sending cookies
- Reading cookies
- Secure cookies
- HttpOnly
- SameSite
- When cookies are useful for authentication

---

## 39. Sessions

Learn:

- Session-based authentication
- Session storage
- When sessions make sense
- Sessions vs JWT

---

## 40. File Uploads

Learn:

- Multipart/form-data
- File upload middleware
- Uploading images
- File size/type restrictions
- Storing files vs storing URLs

---

## 41. Pagination

Learn:

```text
GET /api/products?page=2&limit=20
```

Understand:

- Page
- Limit
- Skip
- Total count
- Pagination metadata

---

## 42. Filtering, Sorting & Searching

Examples:

```text
/products?category=phone
/products?sort=price
/products?search=iphone
/products?minPrice=500&maxPrice=1000
```

---

## 43. Logging

Learn:

- Why logging matters
- Request logging
- Error logging
- Production logging concepts

---

# Phase 11 — Production & Deployment 🟡

## 44. Production Configuration

Learn:

- `NODE_ENV`
- Environment variables
- Production error handling
- CORS configuration
- Secure secrets

---

## 45. Frontend ↔ Backend Integration

Connect:

```text
React
  ↓
fetch / Axios
  ↓
Express API
  ↓
Controller
  ↓
MongoDB
  ↓
Express response
  ↓
React
```

Learn:

- API base URLs
- HTTP requests
- Authentication state
- Handling loading/errors
- CORS
- Production frontend/backend configuration

---

## 46. Deployment

Learn the general deployment process:

```text
Local development
       ↓
Git
       ↓
Backend deployment
       ↓
Database deployment
       ↓
Frontend deployment
       ↓
Environment variables
       ↓
Production MERN app
```

---

# Phase 12 — Advanced / Optional 🟢

Learn these only when your MERN fundamentals are strong.

- WebSockets
- Real-time applications
- Performance optimization
- Caching
- Clustering
- Load balancing
- Background jobs
- Message queues
- Microservices
- Distributed systems

These are **not prerequisites for becoming a MERN developer**.

---

# Projects — Mandatory Practice

Do not learn all Express topics only through isolated examples.

## Project 1 — Basic Express API

Topics:

- Server
- Routes
- Request
- Response
- Status codes
- CRUD

Example:

```text
Users API
```

---

## Project 2 — MongoDB API

Topics:

- Express
- Routers
- Controllers
- Mongoose
- MongoDB
- CRUD
- Error handling

Example:

```text
Product API
```

---

## Project 3 — Authentication API

Topics:

- Registration
- Login
- Password hashing
- JWT
- Auth middleware
- Authorization
- Validation

---

## Project 4 — Full MERN Application

Combine everything:

```text
                 React
                   │
                   │ HTTP
                   ▼
              Express API
                   │
        ┌──────────┼──────────┐
        ↓          ↓          ↓
      Routes   Middleware  Controllers
                              │
                              ↓
                           Services
                              │
                              ↓
                           Mongoose
                              │
                              ▼
                           MongoDB
```

Possible projects:

- E-commerce
- Blog platform
- Task management app
- Social media app
- Job portal
- Expense tracker

---

# Final Mental Model

By the end, I should understand this complete flow:

```text
                    CLIENT
                      │
                      ▼
                 HTTP Request
                      │
                      ▼
                  EXPRESS
                      │
                      ▼
                 Middleware
                      │
          ┌───────────┴───────────┐
          │                       │
       Auth?                  Validation?
          │                       │
          └───────────┬───────────┘
                      ▼
                    Route
                      │
                      ▼
                 Controller
                      │
                      ▼
                   Service
                      │
                      ▼
                  Mongoose
                      │
                      ▼
                   MongoDB
                      │
                      ▼
                  Response
                      │
                      ▼
                    React
```

# Completion Criteria

Do not consider Express "finished" just because all topics have been read.

I should be able to independently:

- Create an Express server
- Create and organize routes
- Understand request/response data
- Write and use middleware
- Create controllers
- Build REST APIs
- Handle errors
- Connect MongoDB
- Use Mongoose
- Build CRUD operations
- Implement authentication
- Protect routes
- Implement authorization
- Validate input
- Configure CORS
- Use environment variables
- Build a reasonably structured MERN backend
- Connect that backend to a React frontend
- Deploy a basic MERN application

The ultimate goal is **not to memorize Express APIs**.

The goal is to understand how to build and reason about a **real MERN backend**.
