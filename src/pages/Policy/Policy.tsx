import React from 'react';
import styles from './Policy.module.css'; // CSS Module

const Policy: React.FC = () => {
  return (
    <div className={`${styles.policyContainer}`}>
      <h1 className="text-center my-4">
        <i className="fas fa-shield-alt"></i> Privacy Policy
      </h1>
      
      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-info-circle"></i> Introduction
        </h2>
        <p className={`${styles.p}`}>
          At MentorNest ("we", "us", "our"), your privacy is our priority. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you access or use our website. By using our website, you consent to the data practices described in this policy.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-database"></i> Information We Collect
        </h2>
        <p className={`${styles.p}`}>We collect several types of information from and about users of our website, including:</p>
        <ul className={`${styles.ul}`}>
          <li className={`${styles.li}`}>
            <strong>Personal Information:</strong> Information by which you may be personally identified, such as your name, email address, phone number, and any other identifier you provide through registration forms or other means.
          </li>
          <li className={`${styles.li}`}>
            <strong>Usage Data:</strong> Information about your interaction with our website, such as the pages visited, time spent on the website, links clicked, and other diagnostic data.
          </li>
          <li className={`${styles.li}`}>
            <strong>Device Information:</strong> Information related to your device, including your IP address, browser type, device type, operating system, and language preferences.
          </li>
          <li className={`${styles.li}`}>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to collect information about your browsing behavior on our website.
          </li>
        </ul>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-user-secret"></i> How We Use Your Information
        </h2>
        <p className={`${styles.p}`}>Your personal information is used to:</p>
        <ul className={`${styles.ul}`}>
          <li className={`${styles.li}`}>Provide, operate, and maintain the website.</li>
          <li className={`${styles.li}`}>Improve your experience on the website by personalizing content and features.</li>
          <li className={`${styles.li}`}>Respond to your inquiries, requests, or support needs.</li>
          <li className={`${styles.li}`}>Send you promotional materials, newsletters, or other information related to our services (with your consent).</li>
          <li className={`${styles.li}`}>Analyze trends, monitor usage, and enhance the performance of the website.</li>
          <li className={`${styles.li}`}>Comply with legal obligations or resolve disputes.</li>
        </ul>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-handshake"></i> Sharing and Disclosure of Information
        </h2>
        <p className={`${styles.p}`}>
          We do not sell, trade, or rent your personal information to third parties. However, we may share your information under the following circumstances:
        </p>
        <ul className={`${styles.ul}`}>
          <li className={`${styles.li}`}>
            <strong>With Service Providers:</strong> We may share your information with third-party service providers who perform functions on our behalf, such as website hosting, data analytics, and payment processing.
          </li>
          <li className={`${styles.li}`}>
            <strong>For Legal Reasons:</strong> We may disclose your information if required by law or if we believe in good faith that such disclosure is necessary to comply with legal obligations or protect the safety of our users.
          </li>
          <li className={`${styles.li}`}>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal information may be transferred as part of the transaction.
          </li>
        </ul>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-lock"></i> Data Security
        </h2>
        <p className={`${styles.p}`}>
          We take reasonable measures to protect the security of your personal information. We use administrative, technical, and physical safeguards to protect your data from unauthorized access, alteration, or destruction.
        </p>
        <p className={`${styles.p}`}>
          However, no method of data transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-user-shield"></i> Your Rights
        </h2>
        <p className={`${styles.p}`}>Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul className={`${styles.ul}`}>
          <li className={`${styles.li}`}><strong>Right to Access:</strong> You can request a copy of the personal information we hold about you.</li>
          <li className={`${styles.li}`}><strong>Right to Rectification:</strong> You have the right to request correction of any inaccuracies in your personal information.</li>
          <li className={`${styles.li}`}><strong>Right to Erasure:</strong> You can request that we delete your personal information, subject to certain exceptions.</li>
          <li className={`${styles.li}`}><strong>Right to Restrict Processing:</strong> You may request that we limit the processing of your personal information under certain circumstances.</li>
          <li className={`${styles.li}`}><strong>Right to Data Portability:</strong> You can request a copy of your personal information in a machine-readable format to transfer to another service.</li>
          <li className={`${styles.li}`}><strong>Right to Object:</strong> You may object to our processing of your personal information in certain circumstances.</li>
        </ul>
        <p className={`${styles.p}`}>
          To exercise any of these rights, please contact us using the contact details provided in this Privacy Policy.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-globe"></i> International Data Transfers
        </h2>
        <p className={`${styles.p}`}>
          If you are located outside of the country where we are based, please note that your information may be transferred, processed, and stored in the country where we operate. By using our website, you consent to such transfers, processing, and storage of your information in other jurisdictions.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-child"></i> Children's Privacy
        </h2>
        <p className={`${styles.p}`}>
          Our website is not intended for individuals under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information as soon as possible.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-user"></i> Updates to This Privacy Policy
        </h2>
        <p className={`${styles.p}`}>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the updated policy on our website or by other appropriate means.
        </p>
        <p className={`${styles.p}`}>
          Your continued use of the website after any such changes will signify your acceptance of the updated policy. We encourage you to review this Privacy Policy periodically.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-envelope"></i> Contact Us
        </h2>
        <p className={`${styles.p}`}>
          If you have any questions or concerns about this Privacy Policy or our data practices, you can contact us at:
        </p>
        <p className={`${styles.p}`}>
          <strong>Email:</strong> privacy@mentorbooking.com
        </p>
        <p className={`${styles.p}`}>
          <strong>Address:</strong> 123 Mentor Avenue, Tech City, [Country]
        </p>
      </section>

      <footer className="text-center my-4">
        <p className={`styles.footerText ${styles.p}`}>
          <i className="fas fa-copyright"></i> 2024 MentorNest. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Policy;
