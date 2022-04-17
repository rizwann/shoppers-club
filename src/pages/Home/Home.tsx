import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
