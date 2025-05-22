import itemsIcons from "@/IconsItems";
// import Slider from "react-infinite-logo-slider";

export default function SliderComponent() {
  return (
    <div className="slider-right">
      <div className="slider-track-right">
        {itemsIcons.map((item) => (
          <div className="slide">
            <img
              src={item.src}
              alt={item.src}
              className="w-45 md:w-60 object-contain hover:scale-110 transition-all duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
        {itemsIcons.map((item) => (
          <div className="slide">
            <img
              src={item.src}
              alt={item.src}
              className="w-45 md:w-60 object-contain hover:scale-110 transition-all duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
