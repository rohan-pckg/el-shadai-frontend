import Navbar from "../components/navbar";
import homeStyles from "./homeStyles.module.scss";
import globalStyles from "../globalStyles.module.scss";

export default function Home() {
  return (
    <>
      <div class={globalStyles.container_1}>
        <Navbar />
      </div>
    </>
  );
}
