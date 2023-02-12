//@ts-ignore
import SliderImg1 from '../assets/images/sliderImg1.jpg';
//@ts-ignore
import SliderLogos1 from '../assets/images/sliderLogos.png';

const Slider = () => {
  return (
    <div className="py-11 flex space-x-0 max-w-5xl mx-auto relative">
      <div className="rounded-l-3xl h-auto w-full bg-pinky">
        <img src={SliderLogos1} alt="slider-logos" className="my-4 mx-5" />
        <div className="my-8 mx-16 text-4xl uppercase font-bold">
          <p className=" text-stan-green">
            Stan Smith<span className="text-black">,</span>
          </p>
          <p>Forever!</p>
        </div>
        <button className="rounded-full py-4 px-16 mx-16 uppercase text-white font-bold bg-stan-green">
          Купить
        </button>
      </div>
      <img src={SliderImg1} alt="slider-img" className="rounded-r-3xl" />
      <span className="rounded-full absolute -right-4 top-44 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default Slider;
