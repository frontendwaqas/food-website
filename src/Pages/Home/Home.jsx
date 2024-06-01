// import { assets } from "../../assets/assets";

import { useState } from "react";
import { ExplorMenu } from "../../Compunenets/ExplorMenu/ExplorMenu";
import { Header } from "../../Compunenets/Header/Header";
import { FoodDisplay } from "../../Compunenets/FoodDisplay/FoodDisplay";
import { AppDownload } from "../../Compunenets/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <section className="max-w-[78%] my-6 m-auto">
        <Header />
        <ExplorMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
      </section>
    </>
  );
};

export default Home;
