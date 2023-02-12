//@ts-ignore
import Logo from '../../assets/images/logo.png';
//@ts-ignore
import Cart from '../../assets/images/cartLogo.svg';
//@ts-ignore
import Like from '../../assets/images/likeLogo.png';
//@ts-ignore
import Profile from '../../assets/images/profileLogo.svg';

const Header = () => {
  return (
    <header className="py-11 flex justify-between">
      <div className="flex space-x-4">
        <img
          src={Logo}
          alt="logo"
          className="max-h-10 min-h-10 min-w-10 max-w-10"
        />
        <span>
          <h3 className="font-bold text-xl uppercase">React Sneakers</h3>
          <p className="text-gray-500 font-sans text-sm">
            Магазин лучших кроссовок
          </p>
        </span>
      </div>
      <div>
        <ul className="flex space-x-8">
          <li className="flex space-x-2.5 cursor-pointer">
            <img
              src={Cart}
              alt="cart-icon"
              className="max-h-5 min-h-5 min-w-5 max-w-5"
            />
            <p>1205 руб.</p>
          </li>
          <li className="cursor-pointer">
            <img
              src={Like}
              alt="like-icon"
              className="max-h-5 min-h-5 min-w-5 max-w-5"
            />
          </li>
          <li className="cursor-pointer">
            <img
              src={Profile}
              alt="profile-icon"
              className="max-h-5 min-h-5 min-w-5 max-w-5"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
