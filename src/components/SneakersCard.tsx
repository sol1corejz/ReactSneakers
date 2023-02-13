import React from 'react';
//@ts-ignore
import activeLike from '../assets/images/likeIcon.svg';
//@ts-ignore
import inactiveLike from '../assets/images/inactiveLikeIcon.svg';
//@ts-ignore
import toAdd from '../assets/images/toAddIcon.svg';
//@ts-ignore
import added from '../assets/images/addedIcon.svg';

type SneakerCardProps = {
  sneakersImage: string;
  price: number | null;
  title: string | null;
};

const SneakersCard: React.FC<SneakerCardProps> = ({
  sneakersImage,
  price,
  title,
}) => {
  return (
    <div className="rounded-3xl border-gray-200 border w-52 relative px-9 mb-10">
      <button className="absolute left-9 top-7">
        <img src={inactiveLike} alt="like" />
      </button>
      <img src={sneakersImage} alt="snekaers" className="h-28 mt-5 mb-4" />
      <h3 className="text-sm mb-4">{title}</h3>
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-xs text-gray-400 uppercase">Цена:</p>
          <p className="text-sm font-bold">{price} руб.</p>
        </div>
        <button>
          <img src={toAdd} alt="add" />
        </button>
      </div>
    </div>
  );
};

export default SneakersCard;
