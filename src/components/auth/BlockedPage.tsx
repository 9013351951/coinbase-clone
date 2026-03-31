import { useState, useEffect } from "react";
import { ShieldAlert, Mail, Phone } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";

interface BlockedPageProps {
  email: string;
  onResend: () => void;
}

const BlockedPage = ({ email, onResend }: BlockedPageProps) => {
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    if (resendCooldown > 0) {
      const t = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [resendCooldown]);

  const maskEmail = (em: string) => {
    const [local, domain] = em.split("@");
    if (!domain) return em;
    const visible = local.slice(0, 2);
    return `${visible}${"•".repeat(Math.max(local.length - 2, 3))}@${domain}`;
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center text-center pt-2">
        {/* Shield icon */}
        <div className="w-14 h-14 rounded-full bg-[hsl(0,65%,50%)] flex items-center justify-center mb-5">
          <ShieldAlert className="w-7 h-7 text-white" />
        </div>

        <h1 className="text-[22px] font-semibold text-white mb-3 leading-tight">
          We couldn't verify your identity
        </h1>
        <p className="text-[14px] text-[hsl(0,0%,55%)] mb-2 leading-relaxed">
          We noticed unusual activity on your account. To protect your funds, we've temporarily locked access.
        </p>
        <p className="text-[14px] text-[hsl(0,0%,55%)] mb-6 leading-relaxed">
          A verification email was sent to <span className="text-white font-medium">{maskEmail(email)}</span>. 
          Please follow the instructions to restore access.
        </p>

        {/* Email notification card */}
        <div className="w-full p-4 rounded-xl bg-[hsl(222,47%,14%)] border border-[hsl(222,40%,22%)] flex items-center gap-4 mb-4">
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

        {/* Phone support card — matches Coinbase support flow */}
        <div className="w-full p-4 rounded-xl bg-[hsl(222,47%,14%)] border border-[hsl(222,40%,22%)] flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-[hsl(145,63%,42%)] flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <p className="text-[14px] text-white font-medium">Call Coinbase Support</p>
            <p className="text-[13px] text-[hsl(0,0%,50%)]">
              +1 (888) 908‑7930 · Available 24/7
            </p>
          </div>
        </div>

        {/* Resend button */}
        <button
          onClick={() => {
            if (resendCooldown === 0) {
              onResend();
              setResendCooldown(60);
            }
          }}
          disabled={resendCooldown > 0}
          className={`w-full h-12 rounded-full text-[14px] font-semibold transition-colors ${
            resendCooldown > 0
              ? "bg-[hsl(222,47%,14%)] text-[hsl(220,20%,40%)] cursor-not-allowed"
              : "bg-[hsl(222,47%,20%)] hover:bg-[hsl(222,47%,25%)] text-white"
          }`}
        >
          {resendCooldown > 0 ? `Resend email (${resendCooldown}s)` : "Resend verification email"}
        </button>

        {/* Secondary links */}
        <div className="mt-5 space-y-2.5">
          <a href="#" className="block text-[13px] text-primary hover:underline">
            Try another way
          </a>
          <a href="https://help.coinbase.com" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-[hsl(0,0%,50%)] hover:text-white transition-colors">
            Visit Help Center
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default BlockedPage;
