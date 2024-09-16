"use client";
import Navbar from "../components/navbar";
import globalStyles from "@/app/globalStyles.module.scss";
import componentStyles from "@/app/components/componentStyles.module.scss";
import homeStyles from "@/app/home/homeStyles.module.scss";
import Image from "next/image";
import Link from "next/link";

// components/CustomCarousel.js
import { useState } from "react";

const images = ["/sample.jpg", "/sample1.jpg", "/sample2.jpg"];

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

export default function Home() {
  return (
    <>
      <div class={homeStyles.container_1}>
        <Navbar />

        <main class={homeStyles.block_1}>
          <div class={homeStyles.content_left}>
            <div class={homeStyles.content_top}>
              <div class={componentStyles.blue_small_line}></div>
              <span> Entebbe, Uganda</span>
            </div>
            <div class={homeStyles.content_middle}>
              El-shadai hospital is one of the best private health care
              providers in the country committed to delivering the best primary
              care
            </div>
            <div class={homeStyles.content_bottom}>
              <button class={componentStyles.primary_button}>
                Book an Appoinment
              </button>
              <button class={componentStyles.secondary_button}>
                Learn more
                <Image
                  src="/cross_arrow.svg"
                  width={24}
                  height={24}
                  className={componentStyles.icon}
                  alt="upper-arrow"
                />
              </button>
            </div>
            <p>12+ years of Experience in healthcare</p>
          </div>
          <div class={homeStyles.content_right}>
            <CustomCarousel />
          </div>
        </main>
      </div>

      <div class={homeStyles.container_2}>
        {/*<div class={homeStyles.container2_top}>
          <div class={homeStyles.stats_wrapper}>
            <h1>99.99%</h1>
            <h3>Positive Feedback</h3>
            <p>from our patients</p>
          </div>

          <div class={homeStyles.vertical_line}></div>

          <div class={homeStyles.stats_wrapper}>
            <h1>99.99%</h1>
            <h3>Positive Feedback</h3>
            <p>from our patients</p>
          </div>

          <div class={homeStyles.vertical_line}></div>

          <div class={homeStyles.stats_wrapper}>
            <h1>99.99%</h1>
            <h3>Positive Feedback</h3>
            <p>from our patients</p>
          </div>
        </div>*/}

        <div class={homeStyles.container2_middle}>
          <div class={homeStyles.horizontal_line}></div>
          <p>See what our patients have to say about us.</p>
        </div>

        <div class={homeStyles.container2_bottom}>
          <div class={homeStyles.testimonials}>
            <div class={homeStyles.testimonials_text}>
              The staff at El-Shaddai Hospital truly make you feel at home. They
              were so patient with my endless questions (and trust me, there
              were many!). The doctor even threw in a joke to calm my nerves. I
              walked out feeling better physically and mentally! 😂 Keep up the
              great work, guys!"
            </div>
            <div class={homeStyles.testimonials_name}>
              <div class={homeStyles.horizontal_line}></div>
              <span>James K. – Kajjansi, Uganda</span>
            </div>
          </div>

          <div class={homeStyles.testimonials}>
            <div class={homeStyles.testimonials_text}>
              Best hospital experience I’ve had in Uganda. The nurses were
              incredibly caring, and the new digital system they’ve introduced
              made everything so much faster. No more waiting in endless
              queues—hallelujah! Thank you, El-Shaddai, for making healthcare
              easy and stress-free!
            </div>
            <div class={homeStyles.testimonials_name}>
              <div class={homeStyles.horizontal_line}></div>
              <span>Maria T. – Entebbe, Uganda</span>
            </div>
          </div>

          <div class={homeStyles.testimonials}>
            <div class={homeStyles.testimonials_text}>
              I was really impressed with the service at El-Shaddai. From the
              receptionist to the doctor, everyone treated me like family. Plus,
              the hospital is in such a peaceful area, you almost forget you’re
              at a hospital. I’m already recommending it to my neighbors!
            </div>
            <div class={homeStyles.testimonials_name}>
              <div class={homeStyles.horizontal_line}></div>
              <span>Daniel A. – Kitooro, Uganda</span>
            </div>
          </div>
        </div>
      </div>

      <div class={homeStyles.container_3}>
        <div class={homeStyles.container3_top}>
          <div class={homeStyles.horizontal_line}></div>
          <p>Our Dedicated Medical Experts</p>
        </div>

        <div class={homeStyles.container3_middle}>
          <div class={componentStyles.doc_profile}>
            <h4 class={componentStyles.doc_name}>Dr. Senyonja Henry</h4>
            <p class={componentStyles.doc_department}>Radiology</p>
            <div class={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button class={componentStyles.primary_button_1}>
              Appoinment
            </button>
          </div>

          <div class={componentStyles.doc_profile}>
            <h4 class={componentStyles.doc_name}>Dr. Senyonja Henry</h4>
            <p class={componentStyles.doc_department}>Radiology</p>
            <div class={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button class={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div class={componentStyles.doc_profile}>
            <h4 class={componentStyles.doc_name}>Dr. Senyonja Henry</h4>
            <p class={componentStyles.doc_department}>Radiology</p>
            <div class={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button class={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>
        </div>

        <div class={componentStyles.redirect_block}>
          <div class={componentStyles.block_info}>
            Compassionate caregivers dedicated to your well-being
          </div>
          <div class={componentStyles.block_link}>
            <Link href="/doctors" class={componentStyles.secondary_button}>
              See more doctors
              <Image
                src="/cross_arrow.svg"
                width={24}
                height={24}
                class={componentStyles.icon}
                alt="upper-arrow"
              />
            </Link>
          </div>
        </div>
      </div>

      <div class={homeStyles.container_4}>
        <div class={homeStyles.container4_top}>
          <div class={homeStyles.horizontal_line}></div>
          <p>Departments Overview</p>
        </div>
        <div class={componentStyles.department_card}></div>
      </div>
    </>
  );
}
