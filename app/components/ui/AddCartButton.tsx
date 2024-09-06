import CartIcon from "../icons/CartIcon";

const AddCartButton = () => {
  return (
    <button
      type='submit'
      className='bg-primary flex justify-center items-center p-1 text-white size-[1.75rem] rounded-xl outline outline-2 outline-primary outline-offset-1 hover:bg-primary/90'
    >
      <CartIcon className='size-5' />
    </button>
  );
};

export default AddCartButton;
