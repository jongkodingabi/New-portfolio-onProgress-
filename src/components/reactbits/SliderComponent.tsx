import itemsIcons from "@/IconsItems";
import Slider from "react-infinite-logo-slider";

export default function SliderComponent() {
  return (
    <div className="slider-wrap">
      <Slider
        width="250px"
        duration={20}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#fff"}
      >
        {itemsIcons.map((item) => (
          <Slider.Slide key={item.id}>
            <img
              src={item.src}
              alt={item.alt}
              className="w-45 md:w-55 object-contain hover:scale-110 transition-all duration-300 grayscale hover:grayscale-0"
            />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
}
