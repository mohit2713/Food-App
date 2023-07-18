import React, { useState } from "react";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import Footer from "../../components/common/footer";
import Delivery from "../../components/Delivery/delivery";
import Diningout from "../../components/dining out/Diningout";
import Nightlife from "../../components/nightlife/Nightlife";
// import Diningout from "../../components/Delivery/Diningout";
// import Nightlife from "../../components/Delivery/Nightlife";
const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <Diningout />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
