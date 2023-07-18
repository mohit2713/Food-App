import React from "react";
import "./deliveryItem.css";

const DeliveryItem = ({ items }) => {
  return (
    <div>
      <div className="delivery-item-cover">
        <img
          src={items.cover}
          className="delivery-item-image"
          alt="item-cover"
        />
      </div>
      <div className="delivery-item-title">{items.title}</div>
    </div>
  );
};

export default DeliveryItem;
