"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import aboutStyles from "./aboutStyles.module.scss";
import componentStyles from "../components/componentStyles.module.scss";
import Image from "next/image";
import Link from "next/link";

// components/CustomCarousel.js
import { useState } from "react";

const images = ["/about1.jpg", "/about2.jpg", "/about3.jpg", "/about4.jpg"];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      <button onClick={prevSlide} className="carousel-button prev">
        ‹
      </button>
      <button onClick={nextSlide} className="carousel-button next">
        ›
      </button>
    </div>
  );
};

export default function About() {
  return (
    <>
      <div className={aboutStyles.container_1}>
        <Navbar />

        <div className={aboutStyles.content_top}>
          <p>
            El Shaddai Hospital
            <br />
            <span>Where Quality Medical Service is a guarantee.</span>
          </p>
        </div>
        <div className={aboutStyles.block_1}>
          <div className={aboutStyles.content_left}>
            <div className={aboutStyles.top}>
              <h1>Our Mission</h1>

              <p>
                To establish one of the best healthcare services to the
                population with desire and skill to collaborate and innovate for
                the best of humanity
              </p>
            </div>
            <div className={aboutStyles.bottom}>
              <h1>Our Vision</h1>

              <p>
                El-Shadai Medical Centre is committed in its pursuit to become a
                centre of excellent medical services
              </p>
            </div>
          </div>

          <div className={aboutStyles.content_right}>
            <CustomCarousel />
          </div>
        </div>
      </div>

      <div className={aboutStyles.container_2}>
        <div className={aboutStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Abstract</p>
        </div>

        <div className={aboutStyles.container2_content}>
          <p>
            El-Shadai Hospital Ltd is trading as El-Shadai medical Centre is a
            private non-profit medical facility committed to providing patient
            treatment, specialized health services, using modern auxiliary
            medical equipment and professional medical staff. The hospital was
            founded on Christian values and committed to serving humanity.
          </p>
          <p>
            It started its operations in June, 2021 and since then, we have
            witnessed a drastic increase on service demand within the locality
            and beyond. El-Shadai medical center Entebbe is fully registered
            with the Uganda Medical and Dental Practioners’ council.
          </p>
          <p>
            El-Shadai is a full service community hospital providing an
            all-round for internal medicine, general operation, radiology,
            dental services among others. In addition, the Emergency Department
            has a physician on duty twenty-four hours a day, seven days per
            week.
          </p>
        </div>
      </div>

      <div className={aboutStyles.container_3}>
        <div className={aboutStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Meet Our Directors</p>
        </div>

        <div className={aboutStyles.profiles}>
          <div className={aboutStyles.profile1}>
            <div className={aboutStyles.profile_pic}>
              <Image
                src="/pfp1.jpg"
                width={400}
                height={400}
                alt="operation icon"
              />
            </div>

            <div className={aboutStyles.profile_info}>
              <h1>Baraita Aaron Sabastaian</h1>
              <p>Executive director</p>
            </div>
          </div>
          <div className={aboutStyles.profile1}>
            <div className={aboutStyles.profile_pic}>
              <Image
                src="/pfp2.jpg"
                width={400}
                height={400}
                alt="operation icon"
              />
            </div>

            <div className={aboutStyles.profile_info}>
              <h1>Kyesimira Michael</h1>
              <p>Resident director</p>
            </div>
          </div>
        </div>

        <div className={aboutStyles.bottom}>
          <div className={componentStyles.redirect_block}>
            <div className={componentStyles.block_info}>
              Explore our entire team of healthcare heroes
            </div>
            <Link href="/about">
              <button className={componentStyles.secondary_button_blue}>
                Explore
                <Image
                  src="/cross_arrow.svg"
                  width={24}
                  height={24}
                  className={componentStyles.icon}
                  alt="upper-arrow"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className={aboutStyles.container_4}>
        <div className={aboutStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Department and Services</p>
        </div>

        <div className={componentStyles.redirect_block}>
          <div className={componentStyles.block_info}>
            Explore all our departments and services
          </div>
          <Link href="/about">
            <button className={componentStyles.secondary_button_blue}>
              Explore
              <Image
                src="/cross_arrow.svg"
                width={24}
                height={24}
                className={componentStyles.icon}
                alt="upper-arrow"
              />
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
