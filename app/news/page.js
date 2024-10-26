"use client";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import newsStyles from "./newsStyles.module.scss"
import componentStyles from "../components/componentStyles.module.scss";

export default function News() {
  return (
    <>
      <div className={newsStyles.container_1}>
        <Navbar />

        <div className={newsStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Under maintainance</p>
        </div>

      
</div>
      <Footer />
    </>
  );
}
