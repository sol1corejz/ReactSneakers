//@ts-ignore
import toDelete from '../assets/images/deleteIcon.svg';

type SneakerCardProps = {
  sneakersImage: string;
  price: number | null;
  title: string | null;
};

const SneakerCardMini: React.FC<SneakerCardProps> = ({
  sneakersImage,
  price,
  title,
}) => {
  return (
    <div className="w-full rounded-2xl border border-gray-200 p-5 flex mb-5">
      <img src={sneakersImage} alt="snekaers" className="h-20 mr-5" />
      <div className="flex justify-between">
        <div>
          <h3 className="text-sm mb-4 w-8/12">{title}</h3>
          <p className="text-sm font-bold">{price} руб.</p>
        </div>
        <button>
          <img src={toDelete} alt="add" />
        </button>
      </div>
    </div>
  );
};

export default SneakerCardMini;
