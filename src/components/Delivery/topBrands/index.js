import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";

const topbrandList = [
  {
    id: 1,
    name: "La Pino'z Pizza",
    time: "28 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160212.png?output-format=webp",
  },
  {
    id: 2,
    name: "McDonald's",
    time: "36min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383084.png?output-format=webp",
  },
  {
    id: 3,
    name: "Burger King",
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187787.png?output-format=webp",
  },
  {
    id: 4,
    name: "KFC",
    time: "25 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433428.png?output-format=webp",
  },
  {
    id: 5,
    name: "Roll Nation",
    time: "20 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/40240642ecd418a22d86b83b6294ec32_1617951162.png?output-format=webp",
  },
  {
    id: 6,
    name: "Subway",
    time: "26 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520851.png?output-format=webp",
  },
  {
    id: 7,
    name: "Katani Dhaba",
    time: "28 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/71b87b5a42b73f503fd4bae669092e8c_1582967554.png?output-format=webp",
  },
  {
    id: 8,
    name: "Gopal's",
    time: "21 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/dcf0789d9ba484517df5342ced41e077_1688116098.png?output-format=webp",
  },
  {
    id: 9,
    name: "Roll Xpress",
    time: "26 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2c016d3df949bb43d9f128abf6923d56_1580883937.png?output-format=webp",
  },
  {
    id: 10,
    name: "Pizza Hut",
    time: "29 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
  },
];
const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const TopBrands = () => {
  return (
    <div className="top-brands ">
      <div className="collection-title max-width_header">
        Tops brands for you
      </div>
      <div className="max-width_header" style={{ flexDirection: "column" }}>
        <Slider {...settings}>
          {topbrandList.map((brand) => {
            return (
              <div>
                <div className="top-brands-cover">
                  <img
                    src={brand.cover}
                    className="top-brands-image"
                    alt="item-cover"
                  />
                  <div className="top-brands-name">{brand.name}</div>
                  <div className="top-brands-time">{brand.time}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TopBrands;
