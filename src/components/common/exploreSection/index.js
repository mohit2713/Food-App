import React from "react";
import "./exploreSection.css";
import ExploreCard from "./exploreCard";

const ExploreSection = ({ list, collectionName }) => {
  return (
    <div className="explore-section">
      <div className="collection-title max-width_header  ">
        {collectionName}
      </div>
      <div className="explore-grid max-width_header ">
        {list.map((restaurant) => {
          return <ExploreCard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
