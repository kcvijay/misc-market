interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SubmitButton = ({ children, ...props }: SubmitButtonProps) => {
  return (
    <button className='bg-primary text-white py-2 px-4 rounded-full hover:bg-primary/80' {...props}>
      {children}
    </button>
  );
};

export default SubmitButton;
