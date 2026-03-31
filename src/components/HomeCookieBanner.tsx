import { useState } from "react";

const HomeCookieBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[380px] bg-card border border-border rounded-2xl shadow-xl p-5">
      <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
        We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our{" "}
        <a href="#" className="text-primary hover:underline">Cookie Policy</a>.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setDismissed(true)}
          className="flex-1 h-10 rounded-full bg-foreground text-background text-[13px] font-semibold hover:opacity-90 transition-opacity"
        >
          OK
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="flex-1 h-10 rounded-full bg-foreground text-background text-[13px] font-semibold hover:opacity-90 transition-opacity"
        >
          Manage preferences
        </button>
      </div>
    </div>
  );
};

export default HomeCookieBanner;
