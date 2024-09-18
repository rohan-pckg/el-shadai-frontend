import Navbar from "../components/navbar";
import Footer from "../components/footer";
import aboutStyles from "./aboutStyles.module.scss";

export default function About() {
  return (
    <>
      <div className={aboutStyles.container_1}>
        <Navbar />
      </div>

      <Footer />
    </>
  );
}
