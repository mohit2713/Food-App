import React from "react";
import { diningout } from "../../data/diningOut";
import "./diningout.css";
import Collection from "../common/collection";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filter";
import OfferCard from "../common/offerCard";

const collectionList = [
  {
    id: "1",
    title: "trending this week",
    cover:
      "	https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252828.jpg",
    places: "8 Best Insta-worthy Places",
  },
  {
    id: "2",
    title: "Winners of Zomato Restaurant Awards",
    cover:
      "https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg",
    places: "10 Places",
  },
  {
    id: "3",
    title: "8 Newly Opened Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1675245589.jpg",
    places: "12 Places",
  },
  {
    id: "4",
    title: "9 Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675245875.jpg",
    places: "13 Places",
  },
  {
    id: "5",
    title: "7 Blissful Breakfast Places",
    cover:
      "https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054402.jpg",
    places: "9 Places",
  },
  {
    id: "6",
    title: "9 Serene Rooftop Places",
    cover:
      "	https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1675244485.jpg",
    places: "40 Places",
  },
  {
    id: "7",
    title: "5 Best Luxury Dining Places",
    cover:
      "	https://b.zmtcdn.com/data/collections/e001bf04df21d6d29048e8507a1fab80_1675244655.jpg",
    places: "2 Places",
  },
  {
    id: "8",
    title: "9 Finest Microbreweries",
    cover:
      "	https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675245943.jpg",
    places: "50 Places",
  },
];

const diningFilters = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#9C9C9C"
        width="18"
        height="18"
        viewBox="0 0 20 20"
        aria-labelledby="icon-svg-title- icon-svg-desc-"
        role="img"
        class="sc-rbbb40-0 iwHbVQ"
      >
        <title>filter</title>
        <path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path>
      </svg>
    ),
    title: "Filters",
  },
  {
    id: 2,
    icon: (
      <i
        style={{ color: "#ecb009" }}
        className="fa-solid fa-crown fa-2xs absolute-center"
      ></i>
    ),
    title: "Gold",
  },
  {
    id: 3,
    title: "Rating 4.0+",
  },
  {
    id: 4,
    title: "Outdoor Seating",
  },
  {
    id: 5,
    title: "Serves Alcohol",
  },
  {
    id: 6,
    title: "Open Now",
  },
];
const diningList = diningout;
const Diningout = () => {
  return (
    <div>
      <div>
        <Collection list={collectionList} />
      </div>
      <div>
        <div className="max-width_header ">
          <Filters filterList={diningFilters} />
        </div>
        <div>
          <OfferCard />
        </div>
        <ExploreSection
          list={diningList}
          collectionName="Trending dining restaurants in Chandigarh"
        />
      </div>
    </div>
  );
};

export default Diningout;

// import React from "react";
// import { diningout } from "../../data/diningOut";
// import "./diningout.css";
// import ExploreSection from "../common/exploreSection";
// import Filters from "../common/filter";

// const diningFilters = [
//   {
//     id: 1,
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="#9C9C9C"
//         width="18"
//         height="18"
//         viewBox="0 0 20 20"
//         aria-labelledby="icon-svg-title- icon-svg-desc-"
//         role="img"
//         class="sc-rbbb40-0 iwHbVQ"
//       >
//         <title>filter</title>
//         <path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path>
//       </svg>
//     ),
//     title: "Filters",
//   },
//   {
//     id: 2,
//     title: "Rating: 4.0+",
//   },
//   {
//     id: 3,
//     title: "Safe and Hygienic",
//   },
//   {
//     id: 4,
//     title: "Pure veg",
//   },
//   {
//     id: 5,
//     title: "Delivery Time",
//     icon: <i class="fa-regular fa-clock absolute-center"></i>,
//   },
//   {
//     id: 6,
//     title: "Great Offers",
//   },
// ];
// const diningList = diningout;
// const Diningout = () => {
//   return (
//     <div>
//       <div>
//         <div className="max-width_header ">
//           <Filters filterList={diningFilters} />
//         </div>
//         <ExploreSection
//           list={diningList}
//           collectionName="Trending dining restaurants in Chandigarh"
//         />
//       </div>
//     </div>
//   );
// };
