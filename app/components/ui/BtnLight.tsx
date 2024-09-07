const BtnLight = ({
  children,
  props,
}: {
  children: React.ReactNode;
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <button className='text-primary p-3 rounded-full' {...props}>
      {children}
    </button>
  );
};

export default BtnLight;
