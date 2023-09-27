import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donates from "../../components/Donates/Donates";

const Home = () => {
  const donates = useLoaderData();
  // console.log(donates);
  return (
    <div>
      <Banner></Banner>
      <Donates donates={donates}></Donates>
    </div>
  );
};

export default Home;
