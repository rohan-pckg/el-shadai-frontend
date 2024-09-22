import Navbar from "../components/navbar";
import Footer from "../components/footer";
import servicesStyles from "./servicesStyles.module.scss";
import componentStyles from "../components/componentStyles.module.scss";

import Image from "next/image";
import Link from "next/link";

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
              trained surgeons and medical professionals.
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
              as cardiology, dermatology, and gynaecology.
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
              treatment.
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
              dedicated team of doctors and nurses.
            </div>
          </div>
        </div>
      </div>

      <div className={servicesStyles.container_2}>
        <div className={servicesStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Departments</p>
        </div>
        <div className={servicesStyles.content_wrapper}>
          <table className={servicesStyles.table1}>
            <thead>
              <tr>
                <th>Medical</th>
                <th>Out Patient</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Gynaecology</td>
                <td>Antenatal care</td>
              </tr>

              <tr>
                <td>Physician</td>
                <td>Postnatal care</td>
              </tr>

              <tr>
                <td>Ophthalmology</td>
                <td>Yellow Fever Vaccination</td>
              </tr>

              <tr>
                <td>Orthopaedics</td>
                <td>Child Health Care</td>
              </tr>

              <tr>
                <td>Surgery</td>
                <td>Immunization</td>
              </tr>

              <tr>
                <td>Dermatology</td>
                <td>Family Planning</td>
              </tr>

              <tr>
                <td>Paediatrics</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <table className={servicesStyles.table2}>
            <thead>
              <tr>
                <th>Pathology</th>
                <th>Radiology</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PCR Testing</td>
                <td>X-ray</td>
              </tr>

              <tr>
                <td>Doppler</td>
                <td>Echo</td>
              </tr>

              <tr>
                <td>Laboratory services</td>
                <td>Physiotherapy</td>
              </tr>

              <tr>
                <td>General Medicine</td>
                <td>CT scan</td>
              </tr>

              <tr>
                <td>HIV Testing</td>
                <td>Ultrasound scan</td>
              </tr>

              <tr>
                <td></td>
                <td>ECG</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={servicesStyles.container_3}>
        <div className={servicesStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Online Services</p>
        </div>

        <div className={componentStyles.redirect_block}>
          <div className={componentStyles.block_info}>
            Book Ambulance in case of Emergency!
          </div>
          <Link href="/about">
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
          <Link href="/about">
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

      <div className={servicesStyles.container_4}>
        <div className={componentStyles.redirect_block}>
          <div className={componentStyles.block_info}>
            Check out all the <strong>Departments</strong> in Detail.
          </div>
          <Link href="/about">
            <button className={componentStyles.secondary_button_blue}>
              Dowload Pdf
              <Image
                src="/download.svg"
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
