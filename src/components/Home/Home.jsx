import Cases from "../Cases/Cases";
import Certificates from "./Certificates/Certificates";
import Dignity from "./Dignity/Dignity";
import FormHome from "./FormHome/FormHome";
import History from "./History/History";
import "./home.scss";
import ServicesSlider from "./ServicesSlider/ServicesSlider";

function Home() {
  return (
    <div className="home">
      <ServicesSlider />
      <Certificates />
      <Cases />
      <Dignity />
      <History />
      <FormHome title="Оставьте свою заявку и мы вам перезвоним" />
    </div>
  );
}
export default Home;
