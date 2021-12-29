import Certificates from "./Certificates/Certificates";
import Dignity from "./Dignity/Dignity";
import "./home.scss";
import ServicesSlider from "./ServicesSlider/ServicesSlider";

function Home() {
  return (
    <div className="home">
      <ServicesSlider />
      <Certificates />
      <Dignity />
    </div>
  );
}
export default Home;
