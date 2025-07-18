# week-6-Mern-Stack-Assignment
# 📦 MERN Stack Week 6 Assignment: Testing and Debugging

## 🚀 Objective

This project demonstrates **comprehensive testing and debugging** strategies for a MERN stack application. The focus is on writing unit, integration, and (optionally) end-to-end tests while implementing debugging techniques for the backend server using **Node.js**, **Express**, **Jest**, and **Supertest**.

---

## 📂 Project Structure

server/
├── app.js
├── config/
│ └── testDB.js
├── middleware/
│ └── authMiddleware.js
├── routes/
│ └── sampleRoute.js
├── tests/
│ ├── integration/
│ │ └── sampleApi.test.js
│ └── unit/
│ └── authMiddleware.test.js
├── .env.test
├── package.json

yaml
Copy
Edit

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <repo-folder>
2. Install Dependencies
bash
Copy
Edit
# From the root or server directory
npm install
3. Configure Environment Variables
Create a .env.test file with:

env
Copy
Edit
TEST_DB_URI=<your-mongo-test-db-uri>
JWT_SECRET=your_jwt_secret
🧪 Testing Strategy
✅ Unit Testing (Jest)
Tests middleware functions like authMiddleware.js

Uses mocks for jsonwebtoken and request/response objects

Located in: tests/unit/authMiddleware.test.js

✅ Integration Testing (Supertest + Jest)
Tests Express endpoints

Simulates real HTTP requests

Located in: tests/integration/sampleApi.test.js

❌ End-to-End Testing (Optional for this server-side task)
Can be implemented using Cypress or Playwright for frontend if required

🔧 Debugging Techniques Implemented
Server-side logging using console.log() and try/catch blocks

Error handling middleware (global handler) inside Express

JWT validation failure logging

.env.test isolation for safe test environment

📜 Test Scripts
These are available in the package.json:

json
Copy
Edit
"scripts": {
  "test": "jest",
  "test:unit": "jest tests/unit",
  "test:integration": "jest tests/integration",
  "test:watch": "jest --watchAll"
}
✅ How to Run Tests
Run All Tests:
bash
Copy
Edit
npm test
Run Only Unit Tests:
bash
Copy
Edit
npm run test:unit
Run Only Integration Tests:
bash
Copy
Edit
npm run test:integration
📊 Code Coverage
Run:

Expected: 70%+ code coverage for middleware and API logic.

Debug logs if applicable

📁 Submission Checklist
✅ Unit test for middleware
✅ Integration test for API route
✅ Separate test database connection
✅ Environment config for testing
✅ Proper folder structure
✅ Test scripts in package.json
✅ Test coverage screenshot
✅ Debugging implementations
✅ Committed and pushed to GitHub

📣 Final Notes
This server-side testing setup ensures your backend is robust, secure, and bug-resistant. For full-stack coverage, you can extend these tests to the frontend using React Testing Library and Cypress.








