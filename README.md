# 🧠 Knex CRUD Lesson

This project demonstrates how to write database access methods using **Knex.js** and **Express.js** to build a simple CRUD API for managing users in a **SQLite** database.

---

## 🚀 Getting Started

### 📦 Installation

```bash
git clone https://github.com/derekjpeters/knex-crud-lesson.git
cd knex-crud-lesson
npm install
# Run Migrations
npx knex migrate:latest
# Running the server
npm run server
```

### Project Structure
```bash
knex-crud-lesson/
├── api/
│   └── server.js         # Express API routes
├── db/
│   └── config.js         # Knex DB config
├── data/
│   └── migrations/
│       └── 001_create_users_table.js
├── models/
│   └── users-model.js    # Reusable DB access methods
├── index.js              # Entry point
├── knexfile.js           # Knex setup config
├── package.json

```

