import Navbar from "../components/navbar";
import aboutStyles from "./aboutStyles.module.scss";
import globalStyles from "../globalStyles.module.scss";

export default function About() {
  return (
    <>
      <div class={aboutStyles.container_1}>
        <Navbar />
      </div>
    </>
  );
}
