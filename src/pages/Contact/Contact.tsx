import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import useFetch from "../../hooks/useFetch";
import { getGeocode } from "../../services/mapService";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        subject: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý gửi dữ liệu ở đây
        console.log(formData);
    };

    const { data, loading, error } = useFetch(getGeocode);

    // return (
    //     <div className={`container ${styles.contactContainer}`}>
    //         <h1>Contact Us</h1>
    //         <form onSubmit={handleSubmit}>
    //             <div className="mb-3">
    //                 <label htmlFor="name" className="form-label">
    //                     Name
    //                 </label>
    //                 <input
    //                     type="text"
    //                     className="form-control"
    //                     id="name"
    //                     name="name"
    //                     value={formData.name}
    //                     onChange={handleChange}
    //                     required
    //                 />
    //             </div>
    //             <div className="mb-3">
    //                 <label htmlFor="email" className="form-label">
    //                     Email
    //                 </label>
    //                 <input
    //                     type="email"
    //                     className="form-control"
    //                     id="email"
    //                     name="email"
    //                     value={formData.email}
    //                     onChange={handleChange}
    //                     required
    //                 />
    //             </div>
    //             <div className="mb-3">
    //                 <label htmlFor="subject" className="form-label">
    //                     Subject
    //                 </label>
    //                 <input
    //                     type="text"
    //                     className="form-control"
    //                     id="subject"
    //                     name="subject"
    //                     value={formData.subject}
    //                     onChange={handleChange}
    //                     required
    //                 />
    //             </div>
    //             <div className="mb-3">
    //                 <label htmlFor="message" className="form-label">
    //                     Message
    //                 </label>
    //                 <textarea
    //                     className="form-control"
    //                     id="message"
    //                     name="message"
    //                     rows={5}
    //                     value={formData.message}
    //                     onChange={handleChange}
    //                     required
    //                 />
    //             </div>
    //             <button type="submit" className="btn btn-primary">
    //                 Send
    //             </button>
    //         </form>

    //         <div className={styles.contactInfo}>
    //             <h2>Contact Information</h2>
    //             <p>
    //                 <strong>Phone:</strong> (123) 456-7890
    //             </p>
    //             <p>
    //                 <strong>Email:</strong> support@example.com
    //             </p>
    //             <p>
    //                 <strong>Address:</strong> 123 Main St, Anytown, USA
    //             </p>
    //         </div>

    //         <div className={styles.map}>
    //             <h2>Our Location</h2>
    //             {loading && <p>Loading map...</p>}
    //             {error && <p>Error fetching map: {error}</p>}
    //             {data && data.url && (
    //                 <iframe
    //                     title="Google Maps Location"
    //                     src={data.url}
    //                     width="100%"
    //                     height="300"
    //                     style={{ border: 0 }}
    //                     allowFullScreen
    //                     loading="lazy"
    //                     referrerPolicy="no-referrer-when-downgrade"
    //                 />
    //             )}
    //         </div>
    //     </div>
    // );

    return (
        <div className={styles.container}>
            {loading && <p>Loading map...</p>}
            {error && <p>Error fetching map: {error}</p>}
            {data && data.url && (
                <div className={styles.mapContainer}>
                    <iframe
                        src={data.url}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            )}
            <div className={styles.contactContainer}>
                <h1>Contact Us</h1>
                <div className={`d-sm-flex align-items-center ${styles.contactInfo}`}>
                    <span
                        className={`flex-shrink-0 d-flex mb-4 mb-sm-0 me-8 justify-content-center align-items-center bg-primary rounded ${styles.iconContainer}`}
                        style={{ width: "48px", height: "48px" }}
                    >
                        <i className="fa-thin fa-phone"></i>
                    </span>
                    <span className="text-white" data-config-id="auto-txt-3-2">
                        +84 3668 6xxxx
                    </span>
                </div>
                <div className={`d-sm-flex align-items-center ${styles.contactInfo}`}>
                    <span
                        className={`flex-shrink-0 d-flex mb-4 mb-sm-0 me-8 justify-content-center align-items-center bg-primary rounded ${styles.iconContainer}`}
                        style={{ width: "48px", height: "48px" }}
                    >
                        <i className="fa-light fa-envelope"></i>
                    </span>
                    <span className="text-white" data-config-id="auto-txt-3-2">
                        support@oppai.com
                    </span>
                </div>
                <div className={`d-sm-flex align-items-center ${styles.contactInfo}`}>
                    <span
                        className={`flex-shrink-0 d-flex mb-4 mb-sm-0 me-8 justify-content-center align-items-center bg-primary rounded ${styles.iconContainer}`}
                        style={{ width: "48px", height: "48px" }}
                    >
                        <i className="fa-thin fa-location-dot"></i>
                    </span>
                    <span className="text-white" data-config-id="auto-txt-3-2">
                        88 Phước Thiện, P, Thủ Đức, Hồ Chí Minh
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
