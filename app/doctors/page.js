import Footer from "../components/footer";
import Navbar from "../components/navbar";
import doctorsStyles from "./doctorsStyles.module.scss";
import globalStyles from "../globalStyles.module.scss";

export default function Doctors() {
  return (
    <>
      <div class={doctorsStyles.container_1}>
        <Navbar />
      </div>

      <Footer />
    </>
  );
}
