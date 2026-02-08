import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, KeyRound } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";
import SocialButton from "@/components/auth/SocialButton";

const SignIn = () => {
  const [step, setStep] = useState<"email" | "password" | "verify">("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");

  const handleEmailContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setStep("password");
  };

  const handlePasswordContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) setStep("verify");
  };

  if (step === "verify") {
    return (
      <AuthLayout>
        <h1 className="text-2xl font-bold text-foreground mb-2">Verify your identity</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Enter the 2-step verification code sent to your authenticator app.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Verification code</label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={7}
              value={verifyCode}
              onChange={(e) => setVerifyCode(e.target.value)}
              placeholder="Enter your code"
              className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-full bg-primary/40 text-primary-foreground font-medium text-sm cursor-not-allowed"
            disabled
          >
            Verify
          </button>
          <div className="text-center">
            <a href="#" className="text-sm text-primary hover:underline">Try another way</a>
          </div>
        </form>
      </AuthLayout>
    );
  }

  if (step === "password") {
    return (
      <AuthLayout>
        <h1 className="text-2xl font-bold text-foreground mb-1">Enter your password</h1>
        <p className="text-sm text-muted-foreground mb-6">{email}</p>
        <form onSubmit={handlePasswordContinue} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-12 px-4 pr-12 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-full bg-primary/40 hover:bg-primary text-primary-foreground font-medium text-sm transition-colors"
          >
            Sign in
          </button>
          <div className="text-center">
            <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
          </div>
        </form>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold text-foreground mb-6">Sign in to Coinbase</h1>
      <form onSubmit={handleEmailContinue} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full h-12 rounded-full bg-primary/40 hover:bg-primary text-primary-foreground font-medium text-sm transition-colors"
        >
          Continue
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground font-medium">OR</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Social buttons */}
      <div className="space-y-3">
        <SocialButton
          icon={<KeyRound className="w-5 h-5" />}
          label="Sign in with Passkey"
        />
        <SocialButton
          icon={<svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/><path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 2.58 9 3.58z" fill="#EA4335"/></svg>}
          label="Sign in with Google"
        />
        <SocialButton
          icon={<svg width="18" height="18" viewBox="0 0 18 22" fill="currentColor"><path d="M14.94 0c.12 1.27-.37 2.53-1.13 3.45-.76.92-2.01 1.64-3.23 1.54-.14-1.24.42-2.54 1.14-3.35C12.49.72 13.81.08 14.94 0zM17.89 14.56c-.42.98-.62 1.42-1.16 2.28-.75 1.2-1.81 2.7-3.12 2.71-1.17.02-1.46-.76-3.04-.75-1.58.01-1.9.77-3.07.76-1.31-.02-2.31-1.37-3.06-2.57C2.56 13.36 2.3 9.48 3.76 7.4c1.02-1.46 2.64-2.32 4.15-2.32 1.42 0 2.31.77 3.48.77 1.13 0 1.82-.77 3.45-.77 1.34 0 2.78.73 3.8 1.99-3.34 1.83-2.8 6.6.25 7.49z"/></svg>}
          label="Sign in with Apple"
        />
      </div>

      {/* Footer links */}
      <div className="mt-6 text-center">
        <p className="text-sm text-foreground font-medium">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">Sign up</Link>
        </p>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-4">
        Not your device? Use a private window.<br />
        See our <a href="#" className="text-primary hover:underline">Privacy Policy</a> for more info.
      </p>
    </AuthLayout>
  );
};

export default SignIn;
