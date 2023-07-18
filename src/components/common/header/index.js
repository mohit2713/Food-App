import React, { useState } from "react";
import "./header.css";
// import foodlogo from "../../../images/foodmato.png";
// import loclogo from "../../../images/placeholder.png";
import profilelogo from "../../../images/profile.png";
import { restaurants } from "../../../data/restaurants";

const restaurantsData = restaurants;
const Header = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="max-width_header">
      <h1 className="foodmato_logo">Foodmato</h1>
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i class="fa-solid fa-location-dot absolute-center "></i>
              <div>Chandigarh</div>
            </div>
            <i class="fa-sharp fa-solid fa-caret-down absolute-center "></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i class="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>
        <div className="profile-wrapper">
          <img
            className="header-profile-image"
            src={profilelogo}
            alt="profile-logo"
          />

          <span className="header-username">Mohit</span>
          <i class="fa-sharp fa-solid fa-caret-down absolute-center profile-options-icon"></i>
        </div>
      </div>

      {/* <div>
          {restaurantsData.map((item) => {
            return <div>{item.info.name}</div>;
          })}

          </div> */}
    </div>
  );
};

export default Header;
