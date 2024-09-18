import Footer from "../components/footer";
import Navbar from "../components/navbar";
import doctorsStyles from "./doctorsStyles.module.scss";

export default function Doctors() {
  return (
    <>
      <div className={doctorsStyles.container_1}>
        <Navbar />
      </div>

      <Footer />
    </>
  );
}
