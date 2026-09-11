import React from 'react';
import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';

const GoogleIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.46a5.52 5.52 0 0 1-2.39 3.62v3h3.86c2.26-2.08 3.56-5.14 3.56-8.65Z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.86-3a7.2 7.2 0 0 1-10.72-3.79H1.35v3.09A12 12 0 0 0 12 24Z"
    />
    <path
      fill="#FBBC05"
      d="M5.35 14.3A7.2 7.2 0 0 1 4.96 12c0-.8.14-1.57.39-2.3V6.61H1.35A12 12 0 0 0 0 12c0 1.94.46 3.77 1.35 5.39l4-3.09Z"
    />
    <path
      fill="#EA4335"
      d="M12 4.77c1.76 0 3.34.61 4.58 1.8l3.43-3.43C17.94 1.19 15.23 0 12 0 7.31 0 3.25 2.69 1.35 6.61l4 3.09A7.2 7.2 0 0 1 12 4.77Z"
    />
  </svg>
);

type GoogleSignInButtonProps = {
  disabled?: boolean;
  onSuccess: (credential: string) => void | Promise<void>;
  onError?: (message: string) => void;
};

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  disabled = false,
  onSuccess,
  onError,
}) => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleSuccess = async (response: CredentialResponse) => {
    if (!response.credential) {
      onError?.('Google sign-in did not return a credential.');
      return;
    }
    await onSuccess(response.credential);
  };

  if (!clientId) {
    return (
      <button type="button" className="signup-google" disabled>
        <GoogleIcon />
        Google sign-in not configured
      </button>
    );
  }

  return (
    <div className={`signup-google-wrap${disabled ? ' is-disabled' : ''}`}>
      <button type="button" className="signup-google signup-google-overlay" disabled={disabled} tabIndex={-1}>
        <GoogleIcon />
        Continue with Google
      </button>
      <div className="signup-google-native">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => onError?.('Google sign-in was cancelled or failed.')}
          theme="outline"
          size="large"
          width="100%"
          text="continue_with"
          shape="rectangular"
        />
      </div>
    </div>
  );
};
