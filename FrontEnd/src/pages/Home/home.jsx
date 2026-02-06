/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./home.css";
import Header from "../../component/Header/header";
import ExploreMenu from "../../component/ExploareMenu/ExploreMenu";
import { useState } from "react";
import FoodDisplay from "../../component/FoodDisplay/FoodDisplay";
import AppDownload from "../../component/AppDownload/AppDownload";

const home = () => {

  
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>



    </div>
  );
};

export default home;
