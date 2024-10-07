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

      <Footer />
    </>
  );
}
