"use client";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import doctorsStyles from "./doctorsStyles.module.scss";
import componentStyles from "../components/componentStyles.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import API_URL from "../admin/config";

export default function Doctors() {
  const router = useRouter();

  const [doctors, setDoctors] = useState([]); // To store doctor data
  const [loading, setLoading] = useState(true); // To track loading state

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${API_URL}/api/doctors`); // Replace with your actual backend URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDoctors(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchDoctors(); // Call the fetch function
  }, []); // Empty dependency array to run on mount;

  return (
    <>
      <div className={doctorsStyles.container_1}>
        <Navbar />

        <div className={doctorsStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Your Healthcare Heroes</p>
        </div>

        <div className={doctorsStyles.profile_wrapper}>
          <div>
            {loading ? (
              <p>Loading...</p> // Show loading message while fetching
            ) : (
              <div className={doctorsStyles.profile_wrapper}>
                {doctors.map((doctor) => (
                  <div key={doctor._id} className={componentStyles.doc_profile}>
                    <h4 className={componentStyles.doc_name}>{doctor.name}</h4>
                    <p className={componentStyles.doc_department}>
                      {doctor.speciality}
                    </p>
                    <button
                      className={componentStyles.primary_button_1}
                      onClick={() => {
                        router.push(
                          `/doctors/appointments?doctorName=${encodeURIComponent(doctor.name)}`,
                        );
                      }}
                    >
                      Book an Appoinment
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={doctorsStyles.caption}>
          Meet the experts who will guide you on your journey to health.
        </div>
      </div>

      {/*<div className={doctorsStyles.container_2}>
        <div className={doctorsStyles.profile_wrapper}>
          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Dr. Senyonja Henry</h4>
            <p className={componentStyles.doc_department}>Radiographer</p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Co. Saboomu Lydia</h4>
            <p className={componentStyles.doc_department}>Clinician</p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Okello Emmanuel</h4>
            <p className={componentStyles.doc_department}>
              Registered comprehensive nurse
            </p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>
        </div>

        <div className={doctorsStyles.caption}>
          Trust in the expertise of our compassionate and skilled healthcare
          providers
        </div>
      </div>

      <div className={doctorsStyles.container_3}>
        <div className={doctorsStyles.profile_wrapper}>
          <div className={componentStyles.doc_profile}>
            <h4 className={componentStyles.doc_name}>Komakech Phillip</h4>
            <p className={componentStyles.doc_department}>
              Registered comprehensive nurse
            </p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile}>
            <h4 className={componentStyles.doc_name}>Nyakaisiki Patience</h4>
            <p className={componentStyles.doc_department}>
              Registered Comprehensive midwife
            </p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile}>
            <h4 className={componentStyles.doc_name}>Nabadda Sarah</h4>
            <p className={componentStyles.doc_department}>
              Registered Comprehensive midwife
            </p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>
        </div>

        <div className={doctorsStyles.caption}>
          Your health is in good hands with our dedicated team of healthcare
          providers.
        </div>
      </div>

      <div className={doctorsStyles.container_4}>
        <div className={doctorsStyles.profile_wrapper}>
          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Nakate Viola</h4>
            <p className={componentStyles.doc_department}>
              Registered comprehensive nurse
            </p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Kizza Apollo</h4>
            <p className={componentStyles.doc_department}>
              Laboratory technician
            </p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Otulu Augustine</h4>
            <p className={componentStyles.doc_department}>
              Laboratory assistant
            </p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>
        </div>

        <div className={doctorsStyles.caption}>
          Your health is in good hands with our expert doctors.
        </div>
      </div>

      <div className={doctorsStyles.container_5}>
        <div className={doctorsStyles.profile_wrapper}>
          <div className={componentStyles.doc_profile}>
            <h4 className={componentStyles.doc_name}>Nakazzi Prossy</h4>
            <p className={componentStyles.doc_department}>
              Laboratory assistant
            </p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile}>
            <h4 className={componentStyles.doc_name}>Kaudha Eseza</h4>
            <p className={componentStyles.doc_department}>Enrolled nurse</p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile}>
            <h4 className={componentStyles.doc_name}>Owomukama Justin</h4>
            <p className={componentStyles.doc_department}>Enrolled nurse</p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>
        </div>

        <div className={doctorsStyles.caption}>
          Our team of experienced physicians and specialists is dedicated to
          providing the highest quality care.
        </div>
      </div>

      <div className={doctorsStyles.container_6}>
        <div className={doctorsStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Specialists</p>
        </div>
        <div className={doctorsStyles.profile_wrapper}>
          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Dr. Simba Mathius</h4>
            <p className={componentStyles.doc_department}>General surgeon </p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Dr. Kyazze</h4>
            <p className={componentStyles.doc_department}>Orthopedic surgeon</p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Dr.Were Eric</h4>
            <p className={componentStyles.doc_department}>Physician</p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>
        </div>

        <div className={doctorsStyles.profile_wrapper}>
          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Dr. Kyazze</h4>
            <p className={componentStyles.doc_department}>Orthopedic surgeon</p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Dr.Odhimbo Brian</h4>
            <p className={componentStyles.doc_department}>Dental surgeon</p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>

          <div className={componentStyles.doc_profile_blue}>
            <h4 className={componentStyles.doc_name}>Dr.Were Eric</h4>
            <p className={componentStyles.doc_department}>Physician</p>
            <div className={componentStyles.doc_tags}>
              <p>Cardio</p>
              <p>ERP</p>
              <p>Eyes</p>
            </div>

            <button className={componentStyles.primary_button_1}>
              Book an Appoinment
            </button>
          </div>
        </div>
      </div>
*/}
      <Footer />
    </>
  );
}
