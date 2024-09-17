import Navbar from "../components/navbar";
import Footer from "../components/footer";
import servicesStyles from "./servicesStyles.module.scss";
import globalStyles from "../globalStyles.module.scss";

export default function Services() {
  return (
    <>
      <div class={servicesStyles.container_1}>
        <Navbar />
      </div>

      <Footer />
    </>
  );
}
