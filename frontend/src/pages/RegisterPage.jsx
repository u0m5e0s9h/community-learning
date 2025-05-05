import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

// Shared styles updated to use theme colors
const inputClasses = 'w-full px-4 py-3 border border-primary-dark rounded-lg bg-background-light text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition';
const buttonClasses = 'w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition shadow-md';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, error, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const RegisteredUser = await register({ name, email, password });
    if (RegisteredUser) {
      if (RegisteredUser.role === "admin") navigate('/admin');
      else navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-extrabold text-primary mb-8 text-center">Create Account</h1>
        {error && <p className="text-accent mb-6 text-center font-medium">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClasses}
              required
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClasses}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-primary-dark mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClasses}
              required
              autoComplete="new-password"
            />
          </div>
          <button type="submit" className={buttonClasses} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="mt-10 text-center text-sm text-primary-dark">
          Already have an account?{' '}
          <Link to="/login" className="text-secondary hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
