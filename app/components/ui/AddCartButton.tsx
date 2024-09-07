import { addToCart } from '~/utils/methods/cart';
import CartIcon from '../icons/CartIcon';

const AddCartButton = (id: number) => {
  return (
    <button
      name='_action'
      value='_addToCard'
      type='submit'
      onClick={() => addToCart(id)}
      className='bg-primary flex justify-center items-center p-1 text-white size-[1.85rem] outline outline-2 outline-primary outline-offset-1 hover:bg-primary/90'
    >
      <CartIcon className='size-5' />
    </button>
  );
};

export default AddCartButton;
