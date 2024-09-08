const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className='grow py-2 px-4 text-primary border border-primary focus:outline focus:outline-2 focus:outline-primary outline-offset-1 rounded-full'
      {...props}
    />
  );
};

export default Input;
