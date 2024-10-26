"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
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
      <div className={homeStyles.container_1}>
        <Navbar />

        <main className={homeStyles.block_1}>
          <div className={homeStyles.content_left}>
            <div className={homeStyles.content_top}>
              <div className={componentStyles.blue_small_line}></div>
              <span> Entebbe, Uganda</span>
            </div>
            <div className={homeStyles.content_middle}>
              El-shadai hospital is one of the best private health care
              providers in the country committed to delivering the best primary
              care
            </div>
            <div className={homeStyles.content_bottom}>
              <Link href="https://hoc.elshadaiug.com/create/appointment">
                <button className={componentStyles.primary_button}>
                  Book an Appoinment
                </button>
              </Link>

              <Link href="/about">
                <button className={componentStyles.secondary_button_white}>
                  Learn more
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
            <p>12+ years of Experience in healthcare</p>
          </div>
          <div className={homeStyles.content_right}>
            <CustomCarousel />
          </div>
        </main>
      </div>

      <div className={homeStyles.container_2}>
        <div className={homeStyles.container2_top}>
          <div className={homeStyles.stats_wrapper}>
            <h1>99.99%</h1>
            <h3>Positive Feedback</h3>
            <p>from our patients</p>
          </div>

          <div className={homeStyles.vertical_line}></div>

          <div className={homeStyles.stats_wrapper}>
            <h1>99.99%</h1>
            <h3>Positive Feedback</h3>
            <p>from our patients</p>
          </div>

          <div className={homeStyles.vertical_line}></div>

          <div className={homeStyles.stats_wrapper}>
            <h1>99.99%</h1>
            <h3>Positive Feedback</h3>
            <p>from our patients</p>
          </div>
        </div>
        <div className={homeStyles.container2_middle}>
          <div className={homeStyles.horizontal_line}></div>
          <p>See what our patients have to say about us.</p>
        </div>

        <div className={homeStyles.container2_bottom}>
          <div className={homeStyles.testimonials}>
            <div className={homeStyles.testimonials_text}>
              The staff at El-Shaddai Hospital truly make you feel at home. They
              were so patient with my endless questions (and trust me, there
              were many!). The doctor even threw in a joke to calm my nerves. I
              walked out feeling better physically and mentally! 😂 Keep up the
              great work, guys!
            </div>
            <div className={homeStyles.testimonials_name}>
              <div className={homeStyles.horizontal_line}></div>
              <span>James K. – Kajjansi, Uganda</span>
            </div>
          </div>

          <div className={homeStyles.testimonials}>
            <div className={homeStyles.testimonials_text}>
              Best hospital experience I’ve had in Uganda. The nurses were
              incredibly caring, and the new digital system they’ve introduced
              made everything so much faster. No more waiting in endless
              queues—hallelujah! Thank you, El-Shaddai, for making healthcare
              easy and stress-free!
            </div>
            <div className={homeStyles.testimonials_name}>
              <div className={homeStyles.horizontal_line}></div>
              <span>Maria T. – Entebbe, Uganda</span>
            </div>
          </div>

          <div className={homeStyles.testimonials}>
            <div className={homeStyles.testimonials_text}>
              I was really impressed with the service at El-Shaddai. From the
              receptionist to the doctor, everyone treated me like family. Plus,
              the hospital is in such a peaceful area, you almost forget
              you&apos;re at a hospital. I’m already recommending it to my
              neighbors!
            </div>
            <div className={homeStyles.testimonials_name}>
              <div className={homeStyles.horizontal_line}></div>
              <span>Daniel A. – Kitooro, Uganda</span>
            </div>
          </div>
        </div>
      </div>

      <div className={homeStyles.container_3}>
        <div className={homeStyles.container3_top}>
          <div className={homeStyles.horizontal_line}></div>
          <p>Best in class online services</p>
        </div>

      {/*  <div className={homeStyles.container3_middle}>
          <div className={componentStyles.doc_profile}>
            <h4 className={componentStyles.doc_name}>Dr. Senyonja Henry</h4>
            <p className={componentStyles.doc_department}>Radiology</p>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile}>
            <h4 className={componentStyles.doc_name}>Dr. Senyonja Henry</h4>
            <p className={componentStyles.doc_department}>Radiology</p>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile}>
            <h4 className={componentStyles.doc_name}>Dr. Senyonja Henry</h4>
            <p className={componentStyles.doc_department}>Radiology</p>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>
        </div>
*/}
   {/*     <div className={componentStyles.redirect_block}>
          <div className={componentStyles.block_info}>
            Compassionate caregivers dedicated to your well-being
          </div>
          <Link href="https://hoc.elshadaiug.com/create/appointment">
            <button className={componentStyles.secondary_button_white}>
              See all doctors{" "}
              <Image
                src="/cross_arrow.svg"
                width={24}
                height={24}
                className={componentStyles.icon}
                alt="upper-arrow"
              />
            </button>
          </Link>
        </div>*/}

           <div className={componentStyles.redirect_block}>
          <div className={componentStyles.block_info}>
            Book Ambulance in case of Emergency!
          </div>
          <Link href="/ambooking">
            <button className={componentStyles.secondary_button_blue}>
              Explore
              <Image
                src="/bus.svg"
                width={30}
                height={30}
                className={componentStyles.icon}
                alt="upper-arrow"
              />
            </button>
          </Link>
        </div>

        <div className={componentStyles.redirect_block}>
          <div className={componentStyles.block_info}>
            Book an Appointment with the doctors of your choice
          </div>
          <Link href="https://hoc.elshadaiug.com/create/appointment">
            <button className={componentStyles.secondary_button_blue}>
              Explore
              <Image
                src="/doc.svg"
                width={30}
                height={30}
                className={componentStyles.icon}
                alt="upper-arrow"
              />
            </button>
          </Link>
        </div>
      </div>

      <div className={homeStyles.container_4}>
        <div className={homeStyles.container4_top}>
          <div className={homeStyles.horizontal_line}></div>
          <p>Departments Overview</p>
        </div>

        <div className={homeStyles.container4_middle}>
          <div className={componentStyles.blue_info_card}>
            <div className={componentStyles.department_icon}>
              <Image
                src="/operation.svg"
                width={20}
                height={20}
                alt="operation icon"
              />
            </div>
            <div className={componentStyles.department_name}>Operation</div>
            <div className={componentStyles.department_info}>
              Cardiologists specialize in treating heart conditions, including
              heart attacks, heart failure, and arrhythmias. They use various
              diagnostic tools and treatments to improve heart health
            </div>
          </div>

          <div className={componentStyles.blue_info_card}>
            <div className={componentStyles.department_icon}>
              <Image
                src="/radiology.svg"
                width={20}
                height={20}
                alt="operation icon"
              />
            </div>
            <div className={componentStyles.department_name}>Radiology</div>
            <div className={componentStyles.department_info}>
              El-Shaddai Hospital’s Radiology Department offers advanced imaging
              services using state-of-the-art technology. Our skilled
              radiologists ensure precise diagnostics, helping guide effective
              treatment for every patient.
            </div>
          </div>

          <div className={componentStyles.blue_info_card}>
            <div className={componentStyles.department_icon}>
              <Image
                src="/pharmacy.svg"
                width={20}
                height={20}
                alt="operation icon"
              />
            </div>
            <div className={componentStyles.department_name}>Pharmacy</div>
            <div className={componentStyles.department_info}>
              We provide a wide range of medications with a focus on patient
              safety and personalized care. Our expert pharmacists ensure
              accurate prescriptions and are always available for advice and
              support.
            </div>
          </div>
        </div>

        <div className={componentStyles.redirect_block}>
          <div className={componentStyles.block_info}>
            Expert care with professionalism and compassion in our specialized
            departments.
          </div>
          <Link href="/about">
            <button className={componentStyles.secondary_button_blue}>
              Explore Departments
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

      <div className={homeStyles.container_5}>
        <div className={homeStyles.container5_top}>
          <div className={homeStyles.horizontal_line}></div>
          <p>Services Overview</p>
        </div>

        <div className={homeStyles.container5_middle}>
          <div className={componentStyles.white_info_card}>
            <div className={componentStyles.department_icon}>
              <Image
                src="/surgery.svg"
                width={20}
                height={20}
                alt="operation icon"
              />
            </div>
            <div className={componentStyles.department_name}>Surgery</div>
            <div className={componentStyles.department_info}>
              Our surgical services use advanced techniques and state-of-the-art
              equipment to ensure safe, precise, and effective outcomes. Our
              skilled team provides personalized care throughout your surgical
              journey.
            </div>
          </div>

          <div className={componentStyles.white_info_card}>
            <div className={componentStyles.department_icon}>
              <Image
                src="/clinics.svg"
                width={20}
                height={20}
                alt="operation icon"
              />
            </div>
            <div className={componentStyles.department_name}>clinics</div>
            <div className={componentStyles.department_info}>
              Our clinics provide specialized care tailored to your needs,
              focusing on prevention, diagnosis, and treatment with a commitment
              to your well-being and comfort.
            </div>
          </div>

          <div className={componentStyles.white_info_card}>
            <div className={componentStyles.department_icon}>
              <Image
                src="/care.svg"
                width={20}
                height={20}
                alt="operation icon"
              />
            </div>
            <div className={componentStyles.department_name}>
              Antenatal Care
            </div>
            <div className={componentStyles.department_info}>
              Our antenatal care focuses on ensuring a healthy pregnancy with
              regular check-ups, personalized guidance, and support throughout
              your journey to motherhood.
            </div>
          </div>
        </div>

        <div className={componentStyles.redirect_block}>
          <div className={componentStyles.block_info}>
            Expert services, delivering care with dedication and compassion.
          </div>
          <Link href="/services">
            <button className={componentStyles.secondary_button_blue}>
              Explore Services
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

      <div className={homeStyles.container_6}>
        <div className={componentStyles.redirect_block}>
          <div className={componentStyles.block_info}>
            Every Donation makes a <strong>Difference</strong>.
          </div>
          <Link href="/about">
            <button className={componentStyles.secondary_button_blue}>
              Donate
              <Image
                src="/care.svg"
                width={24}
                height={24}
                className={componentStyles.icon}
                alt="upper-arrow"
              />
            </button>
          </Link>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
