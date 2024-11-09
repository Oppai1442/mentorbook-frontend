import React from 'react';
import styles from './ToS.module.css'; // CSS Module

const ToS: React.FC = () => {
  return (
    <div className={`${styles.tosContainer}`}>
      <h1 className="text-center my-4">
        <i className="fas fa-file-contract"></i> Terms of Service
      </h1>
      <p className={`${styles.firstLine} ${styles.p}`}>
        Website is an educational project and holds no real-world value; any real interaction is of no consequence, and the owner holds no liability.
      </p>
      
      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-shield-alt"></i> General Terms
        </h2>
        <p className={`${styles.p}`}>
          These Terms of Service ("Terms") govern your access to and use of the MentorNest ("Website"). By using the Website, you agree to these Terms and any applicable laws. If you do not agree, you should stop using the Website immediately.
        </p>
        <p className={`${styles.p}`}>
          We may revise these Terms at any time, and by continuing to use the Website after changes are made, you agree to be bound by the updated Terms. You are responsible for reviewing these Terms periodically for changes.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-user-lock"></i> User Responsibilities
        </h2>
        <p className={`${styles.p}`}>
          By accessing this Website, you confirm that you are at least 18 years old, or if you are a minor, you have obtained permission from your legal guardian. You agree to provide accurate information during the registration process and keep your account details confidential.
        </p>
        <p className={`${styles.p}`}>
          You agree not to use the Website for any illegal or unauthorized purpose, including violating any applicable laws in your jurisdiction. Misuse of the Website may result in suspension or termination of your account.
        </p>
        <p className={`${styles.p}`}>
          Users are responsible for maintaining the confidentiality of their login credentials. You must notify us immediately of any unauthorized use of your account or any other breach of security.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-gavel"></i> Intellectual Property
        </h2>
        <p className={`${styles.p}`}>
          All content on this Website, including but not limited to text, graphics, logos, icons, and software, is the property of the Website owner or its licensors and is protected by copyright, trademark, and other intellectual property laws.
        </p>
        <p className={`${styles.p}`}>
          You may not reproduce, distribute, modify, create derivative works from, or publicly display any part of the Website without prior written consent from the Website owner. Any unauthorized use of the content may violate intellectual property laws and result in legal action.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-exclamation-triangle"></i> Limitation of Liability
        </h2>
        <p className={`${styles.p}`}>
          The Website and its services are provided "as is" without any warranties, whether express or implied. We do not guarantee that the Website will be available at all times, error-free, or free from viruses or other harmful components.
        </p>
        <p className={`${styles.p}`}>
          The Website owner shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Website. This includes but is not limited to damages for loss of profits, goodwill, data, or other intangible losses.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-user-shield"></i> Privacy Policy
        </h2>
        <p className={`${styles.p}`}>
          Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. By using the Website, you consent to the collection and use of your personal information as outlined in the Privacy Policy.
        </p>
        <p className={`${styles.p}`}>
          We take reasonable measures to protect your personal information, but we cannot guarantee the security of any data transmitted over the internet. You acknowledge that there are risks associated with transmitting information online and agree to assume those risks.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-ban"></i> Prohibited Activities
        </h2>
        <p className={`${styles.p}`}>
          You agree not to engage in any of the following prohibited activities while using the Website:
        </p>
        <ul className={`${styles.ul}`}>
          <li className={`${styles.li}`}>Using automated systems (e.g., bots) to access the Website without permission.</li>
          <li className={`${styles.li}`}>Attempting to disrupt or interfere with the proper functioning of the Website.</li>
          <li className={`${styles.li}`}>Engaging in any form of harassment, intimidation, or abusive behavior.</li>
          <li className={`${styles.li}`}>Uploading or distributing harmful or malicious software, viruses, or other destructive code.</li>
          <li className={`${styles.li}`}>Violating the rights of others, including their privacy and intellectual property rights.</li>
        </ul>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-file-alt"></i> Content and Use
        </h2>
        <p className={`${styles.p}`}>
          You retain ownership of any content you submit or post on the Website. However, by submitting content, you grant the Website a non-exclusive, royalty-free, worldwide license to use, modify, reproduce, and display such content.
        </p>
        <p className={`${styles.p}`}>
          We reserve the right to remove or modify any user-submitted content at our discretion. This includes content that violates these Terms or is deemed inappropriate for any reason.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-handshake"></i> Governing Law and Dispute Resolution
        </h2>
        <p className={`${styles.p}`}>
          These Terms shall be governed by and construed in accordance with the laws of [Your Country]. Any disputes arising from these Terms or the use of the Website shall be resolved through binding arbitration in [Your Jurisdiction], unless otherwise required by law.
        </p>
        <p className={`${styles.p}`}>
          If any part of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.
        </p>
      </section>

      <section className="my-4">
        <h2 className={`text-uppercase ${styles.h2}`}>
          <i className="fas fa-sync-alt"></i> Modifications and Termination
        </h2>
        <p className={`${styles.p}`}>
          We reserve the right to modify, suspend, or terminate the Website or any part of it at any time, without notice or liability. We may also terminate your access to the Website if you violate these Terms or engage in any illegal activity.
        </p>
        <p className={`${styles.p}`}>
          Upon termination, all provisions of these Terms shall continue to apply, including but not limited to intellectual property rights, disclaimers of liability, and indemnification.
        </p>
      </section>

      <footer className="text-center my-4">
        <p className={`${styles.footerText} ${styles.p}`}>
          <i className="fas fa-copyright"></i> 2024 MentorNest. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ToS;
