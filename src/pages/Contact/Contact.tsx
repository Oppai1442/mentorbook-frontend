import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { LoadingError } from "../../components/LoadingError";
import { getGeocode } from "../../services";

const Contact: React.FC = () => {
  const [geocodeData, setGeocodeData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeocode = async () => {
      try {
        const url = await getGeocode();
        setGeocodeData(url);
      } catch (error: any) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGeocode();
  }, []);

  const handleError = (error: any) => {
    if (error.response) {
      setError(`An error occurred: ${error.response.status}`);
    } else {
      setError(`Network error or no response: ${error}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        {loading && <LoadingError type="loading" message="Loading map" />}
        {error && (
          <LoadingError
            type="error"
            message="The map could not be loaded due to a server error."
          />
        )}
        {geocodeData && (<iframe
            src={geocodeData}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />)}
      </div>
      <div className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <div className={`d-sm-flex align-items-center ${styles.contactInfo}`}>
          <span
            className={`flex-shrink-0 d-flex mb-4 mb-sm-0 me-8 justify-content-center align-items-center bg-primary rounded ${styles.iconContainer}`}
            style={{ width: "48px", height: "48px" }}
          >
            <i className="fa-thin fa-phone"></i>
          </span>
          <span className="text-white">+84 3668 6xxxx</span>
        </div>
        <div className={`d-sm-flex align-items-center ${styles.contactInfo}`}>
          <span
            className={`flex-shrink-0 d-flex mb-4 mb-sm-0 me-8 justify-content-center align-items-center bg-primary rounded ${styles.iconContainer}`}
            style={{ width: "48px", height: "48px" }}
          >
            <i className="fa-light fa-envelope"></i>
          </span>
          <span className="text-white">support@oppai.com</span>
        </div>
        <div className={`d-sm-flex align-items-center ${styles.contactInfo}`}>
          <span
            className={`flex-shrink-0 d-flex mb-4 mb-sm-0 me-8 justify-content-center align-items-center bg-primary rounded ${styles.iconContainer}`}
            style={{ width: "48px", height: "48px" }}
          >
            <i className="fa-thin fa-location-dot"></i>
          </span>
          <span className="text-white">
            88 Phước Thiện, P, Thủ Đức, Hồ Chí Minh
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
