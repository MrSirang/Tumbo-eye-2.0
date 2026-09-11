import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';

import { AuthBrandPanel } from '../components/AuthBrandPanel';

import { GoogleSignInButton } from '../components/GoogleSignInButton';

import { useAuth } from '../context/AuthContext';

import { AuthApiError, googleSignIn, loginUser } from '../lib/auth';



export const SignIn: React.FC = () => {

  const navigate = useNavigate();

  const { setSession } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({ email: '', password: '' });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (error) setError(null);

  };



  const completeAuth = (response: Awaited<ReturnType<typeof loginUser>>) => {

    setSession(response);

    navigate('/', { replace: true });

  };



  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setError(null);

    setLoading(true);



    try {

      const response = await loginUser(form);

      completeAuth(response);

    } catch (err) {

      setError(err instanceof AuthApiError ? err.message : 'Unable to sign in.');

    } finally {

      setLoading(false);

    }

  };



  const handleGoogleSuccess = async (credential: string) => {

    setError(null);

    setLoading(true);

    try {

      const response = await googleSignIn(credential);

      completeAuth(response);

    } catch (err) {

      setError(err instanceof AuthApiError ? err.message : 'Google sign-in failed.');

    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="signup-page">

      <AuthBrandPanel />



      <div className="signup-right">

        <div className="signup-card">

          <h2>Welcome back</h2>

          <p className="signup-card-sub">Sign in to continue to Tumbo Eye</p>



          {error && (

            <p className="signup-alert signup-alert-error" role="alert">

              {error}

            </p>

          )}



          <form className="signup-form" onSubmit={handleSubmit} noValidate>

            <label className="signup-field">

              <Mail size={18} strokeWidth={1.75} />

              <input

                type="email"

                name="email"

                placeholder="Email Address"

                value={form.email}

                onChange={handleChange}

                autoComplete="email"

                required

                disabled={loading}

              />

            </label>



            <label className="signup-field">

              <Lock size={18} strokeWidth={1.75} />

              <input

                type={showPassword ? 'text' : 'password'}

                name="password"

                placeholder="Password"

                value={form.password}

                onChange={handleChange}

                autoComplete="current-password"

                required

                disabled={loading}

              />

              <button

                type="button"

                className="signup-eye"

                onClick={() => setShowPassword((v) => !v)}

                aria-label={showPassword ? 'Hide password' : 'Show password'}

                disabled={loading}

              >

                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}

              </button>

            </label>



            <button type="submit" className="signup-submit" disabled={loading}>

              {loading ? 'Signing in…' : 'Sign In'}

              {!loading && <ArrowRight size={18} strokeWidth={2.2} />}

            </button>

          </form>



          <div className="signup-divider">

            <span>or continue with</span>

          </div>



          <GoogleSignInButton

            disabled={loading}

            onSuccess={handleGoogleSuccess}

            onError={setError}

          />



          <p className="signup-switch">

            Don&apos;t have an account? <Link to="/signup">Create account</Link>

          </p>

        </div>



        <p className="signup-legal">

          By signing in, you agree to our <Link to="/terms">Terms of Service</Link> and{' '}

          <Link to="/privacy">Privacy Policy</Link>.

        </p>

      </div>

    </div>

  );

};



export default SignIn;


