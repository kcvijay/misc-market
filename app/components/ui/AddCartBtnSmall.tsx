import CartIcon from '../icons/CartIcon';

const AddCartBtnSmall = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className='bg-primary flex justify-center items-center p-1 text-white size-[1.85rem] outline outline-2 outline-primary outline-offset-1 hover:bg-primary/80'
      {...props}
    >
      <CartIcon className='size-5' />
    </button>
  );
};

export default AddCartBtnSmall;
