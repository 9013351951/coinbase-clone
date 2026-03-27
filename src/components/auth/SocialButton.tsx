interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const SocialButton = ({ icon, label, onClick }: SocialButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center h-14 rounded-full border border-[hsl(222,40%,25%)] bg-[hsl(222,47%,16%)] hover:bg-[hsl(222,47%,20%)] transition-colors text-[15px] font-medium text-white"
    >
      <span className="w-16 flex items-center justify-center">{icon}</span>
      <span className="flex-1 text-center pr-16">{label}</span>
    </button>
  );
};

export default SocialButton;
