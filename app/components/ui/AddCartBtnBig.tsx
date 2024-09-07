import CartIcon from '../icons/CartIcon';

const AddCartBtnBig = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className='flex gap-2 items-center bg-primary text-white py-2 pr-3 pl-3 rounded-full outline outline-1 outline-primary outline-offset-2'
      {...props}
    >
      <span>Shop</span>
      <CartIcon className='size-5' />
    </button>
  );
};

export default AddCartBtnBig;
