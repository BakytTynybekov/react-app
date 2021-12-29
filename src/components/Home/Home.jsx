import Certificates from "./Certificates/Certificates";
import "./home.scss";
import ServicesSlider from "./ServicesSlider/ServicesSlider";

function Home() {
  return (
    <div className="home">
      <ServicesSlider />
      <Certificates />
    </div>
  );
}
export default Home;
