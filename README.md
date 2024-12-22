# MernStarter-Ver3

A modern, secure, and feature-rich authentication system built with the MERN stack (MongoDB, Express.js, React, Node.js). Perfect starting point for your full-stack applications.

## Features

- 🔐 JWT Authentication with HTTP-only cookies
- 👤 Complete user management system
- 📝 Notes CRUD functionality as a demo feature
- 🎨 Modern UI with Tailwind CSS and Framer Motion
- 🔒 Secure password handling with bcrypt
- 📱 Responsive design
- ⚡ Fast development with Vite
- 🔄 State management with Zustand

## Tech Stack

### Backend

- Node.js & Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcryptjs for password hashing
- Cookie-parser for handling HTTP-only cookies

### Frontend

- React 18
- React Router v6
- Tailwind CSS
- Framer Motion
- Zustand for state management
- Lucide React for icons
- Axios for API calls

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB instance (local or Atlas)
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/mern-auth-starter.git
cd mern-auth-starter
```

2. Install dependencies for both backend and frontend

```bash
# Root directory
npm install

# Frontend directory
cd frontend
npm install
```

3. Configure environment variables

```bash
# Create .env file in backend directory
cp .env.example .env

# Add your MongoDB URI and JWT secret
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:5173
```

4. Start the development servers

```bash
# Start backend (from root directory)
npm run dev

# Start frontend (from frontend directory)
cd frontend
npm run dev
```

## Project Structure

```
├── backend/
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   └── index.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── store/      # Zustand store
│   │   └── utils/      # Utility functions
│   └── index.html
└── package.json
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/check-auth` - Check authentication status
- `PUT /api/auth/update-profile` - Update user profile

### Notes

- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Security Features

- HTTP-only cookies for JWT storage
- Password hashing with bcrypt
- Protected API routes with JWT verification
- CORS configuration
- Password strength validation
- Session management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Contact

Payam Hoseini

My GitHub : [GitHub](https://github.com/payamhsn)
