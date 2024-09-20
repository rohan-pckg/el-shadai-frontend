import Navbar from "../components/navbar";
import Footer from "../components/footer";
import servicesStyles from "./servicesStyles.module.scss";
import componentStyles from "../components/componentStyles.module.scss";

import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className={servicesStyles.container_1}>
        <Navbar />

        <div className={servicesStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Major Departments</p>
        </div>

        <div className={servicesStyles.card_top}>
          <div className={componentStyles.white_info_card}>
            <div className={componentStyles.department_icon}>
              <Image
                src="/care.svg"
                width={20}
                height={20}
                alt="operation icon"
              />
            </div>
            <div className={componentStyles.department_name}>Nursing</div>
            <div className={componentStyles.department_info}>
              Our Nursing Department at El-Shaddai Hospital offers
              compassionate, round-the-clock care. With a dedicated team of
              skilled nurses, we ensure personalized support, from assisting
              with treatments to guiding patients through recovery
            </div>
          </div>

          <div className={componentStyles.white_info_card}>
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
              The Operation Theatre Complex at El-Shaddai Hospital is equipped
              with state-of-the-art technology and staffed by a team of highly
              trained surgeons and medical professionals. We provide a safe,
              sterile environment for a wide range of surgical procedures.
            </div>
          </div>

          <div className={componentStyles.white_info_card}>
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
              Our Pharmacy at El-Shaddai Hospital provides a wide range of
              medications, ensuring timely and accurate prescriptions for every
              patient. With a focus on safety and personalized care, our expert
              pharmacists are here to offer advice and support to meet your
              healthcare needs.
            </div>
          </div>
        </div>

        <div className={servicesStyles.card_top}>
          <div className={componentStyles.white_info_card}>
            <div className={componentStyles.department_icon}>
              <Image
                src="/medical.svg"
                width={20}
                height={20}
                alt="operation icon"
              />
            </div>
            <div className={componentStyles.department_name}>Medical</div>
            <div className={componentStyles.department_info}>
              The Medical Department at El-Shaddai Hospital offers comprehensive
              care, including a range of specialized clinics for conditions such
              as cardiology, dermatology, and gynaecology. Our dedicated team of
              doctors and specialists provide expert diagnosis.
            </div>
          </div>

          <div className={componentStyles.white_info_card}>
            <div className={componentStyles.department_icon}>
              <Image
                src="/outpatient.svg"
                width={20}
                height={20}
                alt="operation icon"
              />
            </div>
            <div className={componentStyles.department_name}>Out Patient</div>
            <div className={componentStyles.department_info}>
              Our Outpatient Department provides efficient, high-quality care
              for patients who require medical attention without the need for an
              overnight stay. From routine check-ups to specialist
              consultations, our skilled team ensures prompt diagnosis and
              treatment, helping you get back to your daily life as quickly as
              possible.
            </div>
          </div>

          <div className={componentStyles.white_info_card}>
            <div className={componentStyles.department_icon}>
              <Image
                src="/inpatient.svg"
                width={20}
                height={20}
                alt="operation icon"
              />
            </div>
            <div className={componentStyles.department_name}>In Patient</div>
            <div className={componentStyles.department_info}>
              The Inpatient Department at El-Shaddai Hospital offers
              comprehensive, round-the-clock care for patients requiring
              extended treatment or recovery. With comfortable facilities and a
              dedicated team of doctors and nurses, we provide personalized care
              to ensure a smooth recovery and optimal health outcomes.ur
              healthcare needs.
            </div>
          </div>
        </div>
      </div>

      <div className={servicesStyles.container_2}>
        <div className={servicesStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Medical department</p>
        </div>
        <div className={servicesStyles.content_wrapper}>
          <div className={componentStyles.blue_content_card}>
            <h3>Gynaecology</h3>
            <p>
              As part of our Medical Department, the Gynaecology Clinic at
              El-Shaddai Hospital offers comprehensive women’s health services.
              From preventive care and routine check-ups to specialized
              treatments, our experienced team provides personalized care for
              all stages of women’s health, ensuring comfort and well-being
              throughout every visit
            </p>
          </div>
          <div className={componentStyles.blue_content_card}>
            <h3>Physician</h3>
            <p>
              Our team of skilled physicians at El-Shadai Hospital is dedicated
              to providing comprehensive healthcare services. With years of
              experience and expertise, our doctors are committed to your
              well-being. Whether you&apos;re seeking preventative care,
              diagnosis, or treatment, you can trust in our team to provide the
              highest quality care.
            </p>
          </div>

          <div className={componentStyles.blue_content_card}>
            <h3>Ophthalmology</h3>
            <p>
              Our team of experienced ophthalmologists and optometrists is
              dedicated to diagnosing and treating a variety of eye conditions,
              from cataracts to glaucoma. With state-of-the-art equipment and
              advanced techniques, we provide personalized care to help you
              maintain optimal eye health.
            </p>
          </div>
          <div className={componentStyles.blue_content_card}>
            <h3>Dermatology</h3>
            <p>
              Our experienced dermatologists offer comprehensive care for a wide
              range of skin concerns, including acne, eczema, psoriasis, and
              skin cancer. With advanced treatments and personalized care,
              we&apos;re committed to helping you achieve healthy, beautiful
              skin.
            </p>
          </div>
        </div>
      </div>

      <div className={servicesStyles.container_3}>
        <div className={servicesStyles.content_wrapper}>
          <div className={componentStyles.white_content_card}>
            <h3>Surgery</h3>
            <p>
              Our surgical department at El-Shadai Hospital offers a wide range
              of surgical procedures performed by highly skilled surgeons. From
              minimally invasive laparoscopic surgery to complex open
              procedures, our team is dedicated to providing safe and effective
              surgical care. We utilize the latest surgical techniques and
              technology to ensure optimal patient outcomes.
            </p>
          </div>
          <div className={componentStyles.white_content_card}>
            <h3>General Medicine</h3>
            <p>
              Our general medicine department at El-Shadai Hospital provides
              comprehensive primary care services. Our experienced physicians
              are dedicated to diagnosing, treating, and preventing a wide range
              of common illnesses and conditions. We offer personalized care
              plans tailored to your specific needs, including routine
              check-ups, health screenings, and management of chronic diseases.
            </p>
          </div>

          <div className={componentStyles.white_content_card}>
            <h3>Orthopaedics</h3>
            <p>
              Our orthopedics department at El-Shadai Hospital specializes in
              the diagnosis and treatment of musculoskeletal conditions. Our
              experienced orthopedic surgeons offer a wide range of treatments,
              including joint replacement, fracture repair, sports medicine, and
              spine surgery. With state-of-the-art technology and a focus on
              patient rehabilitation, we&apos;re committed to helping you regain
              mobility and improve your quality of life.
            </p>
          </div>
          <div className={componentStyles.white_content_card}>
            <h3>Paediatrics</h3>
            <p>
              Our pediatrics department at El-Shadai Hospital provides
              specialized care for children. Our experienced pediatricians are
              dedicated to ensuring the health and well-being of young patients,
              from newborns to adolescents.
            </p>
          </div>
        </div>
      </div>

      <div className={servicesStyles.container_4}>
        <div className={servicesStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Out Patient Department</p>
        </div>
        <div className={servicesStyles.content_wrapper}>
          <div className={componentStyles.blue_content_card}>
            <h3>Antenatal care</h3>
            <p>
              Our antenatal care services at El-Shadai Hospital provide
              comprehensive support for expectant mothers. Our skilled
              healthcare providers offer regular check-ups, prenatal testing,
              and education to ensure a healthy pregnancy and delivery.
            </p>
          </div>
          <div className={componentStyles.blue_content_card}>
            <h3>Postnatal care</h3>
            <p>
              Our postnatal care services at El-Shadai Hospital provide
              essential support for new mothers and their babies. Our
              experienced healthcare professionals offer guidance on
              breastfeeding, newborn care, and maternal health recovery,
              ensuring a smooth transition into parenthood.
            </p>
          </div>

          <div className={componentStyles.blue_content_card}>
            <h3>Child Health Care</h3>
            <p>
              Our child healthcare services at El-Shadai Hospital provide
              comprehensive care for children of all ages. Our dedicated
              pediatricians offer routine check-ups, vaccinations, treatment for
              common childhood illnesses, and specialized care for chronic
              conditions. We prioritize the well-being of young patients and
              their families, ensuring they receive the highest quality care.
            </p>
          </div>
          <div className={componentStyles.blue_content_card}>
            <h3>Immunization</h3>
            <p>
              Our immunization services at El-Shadai Hospital ensure that
              children receive essential vaccines to protect against preventable
              diseases. Our dedicated healthcare professionals administer
              vaccines according to the recommended immunization schedule,
              helping to safeguard the health of young patients and the
              community.
            </p>
          </div>

          <div className={componentStyles.blue_content_card}>
            <h3>Yellow Fever Vaccination</h3>
            <p>
              El-Shadai Hospital offers yellow fever vaccinations, which are
              essential for travelers visiting countries where yellow fever is
              prevalent. Our healthcare professionals administer the vaccine
              according to recommended guidelines, ensuring your safety and
              compliance with international travel requirements.
            </p>
          </div>

          <div className={componentStyles.blue_content_card}>
            <h3>Family Planning</h3>
            <p>
              Our family planning services at El-Shadai Hospital offer
              comprehensive options to help individuals and couples make
              informed decisions about their reproductive health. We provide
              counseling, education, and access to a variety of contraceptive
              methods, including birth control pills, condoms, and intrauterine
              devices (IUDs).
            </p>
          </div>
        </div>
      </div>

      <div className={servicesStyles.container_5}>
        <div className={servicesStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Pathology Department</p>
        </div>
        <div className={servicesStyles.content_wrapper}>
          <div className={componentStyles.white_content_card}>
            <h3>PCR Testing</h3>
            <p>
              Our PCR testing services at El-Shadai Hospital provide accurate
              and reliable results for the detection of various infections,
              including COVID-19. Our state-of-the-art laboratory facilities and
              experienced technicians ensure timely and accurate results,
              supporting your health and well-being.
            </p>
          </div>
          <div className={componentStyles.white_content_card}>
            <h3>Laboratory services</h3>
            <p>
              Need accurate and reliable laboratory results? Look no further
              than El-Shadai Hospital&apos;s state-of-the-art laboratory. Our
              dedicated team of technicians utilizes advanced equipment to
              provide a wide range of diagnostic tests, ensuring timely and
              accurate results for your healthcare needs.
            </p>
          </div>

          <div className={componentStyles.white_content_card}>
            <h3>HIV Testing</h3>
            <p>
              Our dedicated team of technicians utilizes advanced equipment to
              provide confidential and efficient HIV testing services. We offer
              both rapid and laboratory-based testing options, ensuring timely
              results and peace of mind.
            </p>
          </div>
          <div className={componentStyles.white_content_card}>
            <h3>Doppler</h3>
            <p>
              Experience the advanced benefits of Doppler ultrasound at
              El-Shadai Hospital. Our state-of-the-art equipment and skilled
              technicians deliver accurate and reliable results.
            </p>
          </div>
        </div>
      </div>

      <div className={servicesStyles.container_6}>
        <div className={servicesStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Radiology Department</p>
        </div>
        <div className={servicesStyles.content_wrapper}>
          <div className={componentStyles.blue_content_card}>
            <h3>X-ray</h3>
            <p>
              For clear and accurate imaging of your bones and organs, trust
              El-Shadai Hospital&apos;s X-ray services.
            </p>
          </div>
          <div className={componentStyles.blue_content_card}>
            <h3>Ultrasound scan</h3>
            <p>
              Need a detailed image of your unborn baby or internal structures?
              Our ultrasound scan technology at El-Shadai Hospital provides
              clear and accurate results.
            </p>
          </div>

          <div className={componentStyles.blue_content_card}>
            <h3>CT scan</h3>
            <p>
              Experience the advanced benefits of CT scanning at El-Shadai
              Hospital. Our state-of-the-art equipment and skilled technicians
              deliver accurate and reliable results.
            </p>
          </div>
          <div className={componentStyles.blue_content_card}>
            <h3>ECG</h3>
            <p>
              Our state-of-the-art ECG equipment at El-Shadai Hospital provides
              precise measurements of your heart&apos;s electrical activity,
              ensuring accurate diagnosis and effective treatment
            </p>
          </div>

          <div className={componentStyles.blue_content_card}>
            <h3>Physiotherapy</h3>
            <p>
              Our experienced physiotherapists at El-Shadai Hospital offer
              personalized rehabilitation programs tailored to your specific
              needs, helping you recover from injuries, improve mobility, and
              enhance your overall well-being.
            </p>
          </div>

          <div className={componentStyles.blue_content_card}>
            <h3>Echo</h3>
            <p>
              Our echocardiography services at El-Shadai Hospital offer
              comprehensive and accurate assessments of your heart&apos;s
              health. Using advanced imaging technology, our skilled technicians
              can provide detailed information about your heart&apos;s
              structure, function, and blood flow.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
