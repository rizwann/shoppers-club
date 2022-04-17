import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import CustomerOfffers from "../../components/CustomerOfffers/CustomerOfffers";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <CustomerOfffers />
    </div>
  );
};

export default Home;
