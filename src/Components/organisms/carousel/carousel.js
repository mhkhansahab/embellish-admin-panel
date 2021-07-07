import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

const carousel = (props) => {
  return (
    <div className="carousel-container-2">
      <Carousel fade>
        {props.banners.map((banner) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner.link}
                alt="Slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default carousel;
