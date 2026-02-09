interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const SocialButton = ({ icon, label, onClick }: SocialButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center h-12 rounded-full border border-[hsl(0,0%,22%)] bg-transparent hover:bg-[hsl(0,0%,12%)] transition-colors text-sm font-medium text-white"
    >
      <span className="w-14 flex items-center justify-center">{icon}</span>
      <span className="flex-1 text-center pr-14">{label}</span>
    </button>
  );
};

export default SocialButton;
