import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { ArrowRight, Eye, EyeOff, Lock, Mail, Phone, User } from 'lucide-react';

import { AuthBrandPanel } from '../components/AuthBrandPanel';

import { GoogleSignInButton } from '../components/GoogleSignInButton';

import { useAuth } from '../context/AuthContext';

import { AuthApiError, googleSignIn, registerUser } from '../lib/auth';



export const SignUp: React.FC = () => {

  const navigate = useNavigate();

  const { setSession } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({

    fullName: '',

    email: '',

    phone: '',

    password: '',

    confirmPassword: '',

  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (error) setError(null);

  };



  const completeAuth = (response: Awaited<ReturnType<typeof registerUser>>) => {

    setSession(response);

    navigate('/', { replace: true });

  };



  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setError(null);



    if (form.password.length < 8) {

      setError('Password must be at least 8 characters.');

      return;

    }



    if (form.password !== form.confirmPassword) {

      setError('Passwords do not match.');

      return;

    }



    setLoading(true);

    try {

      const response = await registerUser({

        fullName: form.fullName,

        email: form.email,

        phone: form.phone || undefined,

        password: form.password,

        confirmPassword: form.confirmPassword,

      });

      completeAuth(response);

    } catch (err) {

      setError(err instanceof AuthApiError ? err.message : 'Unable to create account.');

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

          <h2>Create your account</h2>

          <p className="signup-card-sub">Join Tumbo Eye today and get started</p>



          {error && (

            <p className="signup-alert signup-alert-error" role="alert">

              {error}

            </p>

          )}



          <form className="signup-form" onSubmit={handleSubmit} noValidate>

            <label className="signup-field">

              <User size={18} strokeWidth={1.75} />

              <input

                type="text"

                name="fullName"

                placeholder="Full Name"

                value={form.fullName}

                onChange={handleChange}

                autoComplete="name"

                required

                disabled={loading}

              />

            </label>



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

              <Phone size={18} strokeWidth={1.75} />

              <input

                type="tel"

                name="phone"

                placeholder="Phone Number (Optional)"

                value={form.phone}

                onChange={handleChange}

                autoComplete="tel"

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

                autoComplete="new-password"

                required

                minLength={8}

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



            <label className="signup-field">

              <Lock size={18} strokeWidth={1.75} />

              <input

                type={showConfirmPassword ? 'text' : 'password'}

                name="confirmPassword"

                placeholder="Confirm Password"

                value={form.confirmPassword}

                onChange={handleChange}

                autoComplete="new-password"

                required

                disabled={loading}

              />

              <button

                type="button"

                className="signup-eye"

                onClick={() => setShowConfirmPassword((v) => !v)}

                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}

                disabled={loading}

              >

                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}

              </button>

            </label>



            <button type="submit" className="signup-submit" disabled={loading}>

              {loading ? 'Creating account…' : 'Create Account'}

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

            Already have an account? <Link to="/signin">Sign in</Link>

          </p>

        </div>



        <p className="signup-legal">

          By signing up, you agree to our <Link to="/terms">Terms of Service</Link> and{' '}

          <Link to="/privacy">Privacy Policy</Link>.

        </p>

      </div>

    </div>

  );

};



export default SignUp;


