interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const SocialButton = ({ icon, label, onClick }: SocialButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center h-12 rounded-full border border-border bg-secondary/50 hover:bg-secondary transition-colors text-sm font-medium text-foreground"
    >
      <span className="w-14 flex items-center justify-center">{icon}</span>
      <span className="flex-1 text-center pr-14">{label}</span>
    </button>
  );
};

export default SocialButton;
