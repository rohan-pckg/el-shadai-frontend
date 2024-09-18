import Navbar from "../components/navbar";
import Footer from "../components/footer";
import servicesStyles from "./servicesStyles.module.scss";

export default function Services() {
  return (
    <>
      <div className={servicesStyles.container_1}>
        <Navbar />
      </div>

      <Footer />
    </>
  );
}
