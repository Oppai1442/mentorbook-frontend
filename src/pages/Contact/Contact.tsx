import React, { useEffect, useState } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const [mapSrc, setMapSrc] = useState<string>('');

    useEffect(() => {
      const fetchMapData = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/maps/geocode');
          const data = await response.json();
          // Giả sử API trả về URL dưới dạng một trường 'url'
          setMapSrc(data.url);
        } catch (error) {
          console.error('Error fetching map data:', error);
        }
      };
  
      fetchMapData();
    }, []);

    return (
        <div className={`container ${styles.contactContainer}`}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>

            <div className={styles.contactInfo}>
                <h2>Contact Information</h2>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> support@example.com</p>
                <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
            </div>

            <div className={styles.map}>
                <h2>Our Location</h2>
                <iframe
                    title="Google Maps Location"
                    
                    src={mapSrc}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
};

export default Contact;