"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import aboutStyles from "./aboutStyles.module.scss";
import componentStyles from "../components/componentStyles.module.scss";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import Slider from "../components/slider";

import InfiniteSlider from "../components/infiniteSlider";

export default function About() {
  const images = [
    "/about1.jpg", // Image path from the 'public' folder
    "/about2.jpg",
    "/about3.jpg",
    "/about4.jpg",
  ];

  const coreValues = [
    "Integrity",
    "Professionalism",
    "Compassion",
    "Excellent customer management",
    "Accountability",
    "Team work",
  ];
  return (
    <>
      <div className={aboutStyles.container_1}>
        <Navbar />

        <div className={aboutStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Take a Look at our Hospital</p>
        </div>
        <div className={aboutStyles.block_1}>
          <div className={aboutStyles.content_right}>
            <Slider images={images} />
          </div>
        </div>
      </div>

      <div className={aboutStyles.container_2}>
        <div className={aboutStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Core Values</p>
        </div>

        <div className={aboutStyles.container2_content}>
          <InfiniteSlider values={coreValues} />
        </div>

        <div className={aboutStyles.container2_bottom}>
          <div className={aboutStyles.top2}>
            <h3>Our Mission</h3>
            <p>
              To establish one of the best healthcare services to the population
              with desire and skill to collaborate and innovate for the best of
              humanity
            </p>
          </div>
          <div className={aboutStyles.bottom2}>
            <h3>Our Vision</h3>
            <p>
              El-Shadai Medical Centre is committed in its pursuit to become a
              centre of excellent medical services
            </p>
          </div>
        </div>
      </div>

      <div className={aboutStyles.container_3}>
        <div className={aboutStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>About Our Hospital</p>
        </div>

        <div className={aboutStyles.container3_bottom}>
          <div className={aboutStyles.container3_block}>
            <p>
              El-Shadai Hospital Ltd is trading as El-Shadai medical Centre is a
              private non-profit medical facility committed to providing patient
              treatment, specialized health services, using modern auxiliary
              medical equipment and professional medical staff. The hospital was
              founded on Christian values and committed to serving humanity.
            </p>
          </div>

          <div className={aboutStyles.container3_block}>
            <p>
              It started its operations in June, 2021 and since then, we have
              witnessed a drastic increase on service demand within the locality
              and beyond. El-Shadai medical center Entebbe is fully registered
              with the Uganda Medical and Dental Practioners’ council.
            </p>
          </div>
          <div className={aboutStyles.container3_block}>
            <p>
              El-Shadai is a full service community hospital providing an
              all-round for internal medicine, general operation, radiology,
              dental services among others. In addition, the Emergency
              Department has a physician on duty twenty-four hours a day, seven
              days per week.
            </p>
          </div>
        </div>
      </div>

      <div className={aboutStyles.container_4}>
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

      {/* <div className={aboutStyles.container_5}>
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
      </div>*/}

      <Footer />
    </>
  );
}
