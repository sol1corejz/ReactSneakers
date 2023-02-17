import SneakerCardMini from './SneakerCardMini';
//@ts-ignore
import nikeBlazer from '../assets/images/nikeBlazer.jpg';

const Cart = ({
  openCart,
  isOpen,
}: {
  openCart: (state: boolean) => void;
  isOpen: boolean;
}) => {
  let cartClass = isOpen
    ? 'transition-all ease-out duration-300 h-screen w-1/3 fixed right-0 top-0 bg-white p-8 flex flex-col justify-between z-50'
    : 'transition-all ease-in duration-300 h-screen w-1/3 fixed -right-full top-0 bg-white p-8 flex flex-col justify-between z-50';
  let bgClass = isOpen
    ? 'h-screen fixed z-40 left-0 top-0 w-full bg-black opacity-50'
    : 'hidden';

  return (
    <div>
      <div onClick={() => openCart(false)} className={bgClass}></div>
      <div className={cartClass}>
        <div>
          <h3 className="font-bold text-2xl mb-8">Корзина</h3>
          <div>
            <SneakerCardMini
              sneakersImage={nikeBlazer}
              price={12500}
              title={'Мужские Кроссовки Nike Blazer Mid Suede'}
            />
            <SneakerCardMini
              sneakersImage={nikeBlazer}
              price={12500}
              title={'Мужские Кроссовки Nike Blazer Mid Suede'}
            />
          </div>
        </div>
        <div className="space-y-3">
          <div className="w-full flex space-x-2">
            <p className="w-fit">Итого:</p>
            <span className="w-full border-b-2 border-dashed mb-1"></span>
            <p className="w-fit font-bold whitespace-nowrap">21498 руб.</p>
          </div>
          <div className="w-full flex space-x-2">
            <p className="whitespace-nowrap" w-fit>
              Налог 5%:
            </p>
            <span className="w-full border-b-2 border-dashed mb-1"></span>
            <p className="w-fit font-bold whitespace-nowrap">1074 руб.</p>
          </div>
          <button className="relative w-full rounded-2xl py-4 px-16 uppercase text-white font-bold bg-stan-green">
            <p className="mr-5">Оформить заказ</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute right-10 top-4 stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
