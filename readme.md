# Community Learning Hub

A full-stack community-driven platform for discovering educational content, engaging with curated feeds, and managing learning resources using the MERN stack (MongoDB, Express.js, React.js, Node.js).

---

##  Features

###  Authentication System
- JWT-based user registration/login
- Role-based access control (User/Moderator/Admin)
- Protected routes and API endpoints

###  Credit Points System
- Earn credits for content engagement
- Spend credits to unlock premium resources
- Track transactions with detailed history
- Admin-managed credit rules

###  Smart Feed Aggregator
- Real-time content aggregation from:
  - Twitter/X API
  - Reddit API
  - LinkedIn API
- Content cards with previews and metadata
- Save/Share/Report content functionality

###  Admin Dashboard
- User management and role assignment
- Content moderation system
- Activity statistics and analytics
- Report resolution system

---

##  Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- React Router
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT Authentication

**Services:**
- Twitter API v2
- Reddit API
- LinkedIn API
- Redis Caching

---

## 🚀 Installation

### Prerequisites
- Node.js v18+
- MongoDB Atlas cluster
- Twitter/Reddit API credentials

## Backend Setup

```bash
cd backend
npm install
```

fill th `.env` file in `/backend` with the following content:

```
MONGO_URL=

JWT_SECRET=
PORT=
NODE_ENV=


# Redis Config

# Reddit API

# Twitter API

# LinkedIn API

```

## Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in `/frontend` with the following content:

```
REACT_APP_API_URL=http://localhost:5000
```
## Running Locally

Start Backend:

```bash
cd backend
npm run dev
```

Start Frontend:

```bash
cd frontend
npm start
```

**Application URLs:**

- Backend: http://localhost:5000  
- Frontend: http://localhost:3000

##  Deployment

**(GCP):**

- Create Google Cloud Project  
- Deploy to Cloud Run/App Engine  
- Set environment variables in GCP console


**Database:**

- Configure MongoDB Atlas with proper IP whitelisting




---

## License
Distributed under the MIT License. See `LICENSE` for more information.

---
