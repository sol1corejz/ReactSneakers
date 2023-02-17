import React, { useState } from 'react';
import Header from './components/Hedaer/Header';
import Slider from './components/Slider';
import SneakersCard from './components/SneakersCard';
//@ts-ignore
import nikeBlazer from './assets/images/nikeBlazer.jpg';
import Cart from './components/Cart';

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <div className="bg-blue-300 relative py-16">
      <div className="container mx-auto max-w-6xl bg-white px-11 rounded-xl z-0">
        <Header openCart={setIsOpenCart} />
        <hr />
        <Slider />
        <div>
          <div className="mb-10 flex justify-between relative">
            <h1 className="text-3xl font-bold">Все кроссовки</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400 absolute right-64 top-2 -mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              placeholder="Поиск..."
              type="text"
              className="rounded-md border-gray-200 border pl-10 pr-4 box-border"
            />
          </div>
          <div className="grid grid-cols-4 gap-x-20">
            <SneakersCard
              sneakersImage={nikeBlazer}
              price={12500}
              title={'Мужские Кроссовки Nike Blazer Mid Suede'}
            />
          </div>
        </div>
      </div>
      <Cart openCart={setIsOpenCart} isOpen={isOpenCart} />
    </div>
  );
}

export default App;
