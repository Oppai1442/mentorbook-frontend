import React, { useState } from 'react';
import styles from './FAQs.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Mentor Booking?",
    answer: "Mentor Booking is a platform that connects mentors and mentees for learning and development."
  },
  {
    question: "How do I book a mentor?",
    answer: "You can book a mentor by selecting a mentor from our list, checking their availability, and confirming the appointment."
  },
  {
    question: "What are the payment methods?",
    answer: "We accept various payment methods including credit cards, PayPal, and bank transfers."
  },
  {
    question: "Can I reschedule my appointment?",
    answer: "Yes, you can reschedule your appointment up to 24 hours before the scheduled time."
  },
  {
    question: "Is there a cancellation policy?",
    answer: "Yes, cancellations must be made at least 48 hours in advance to avoid charges."
  },
  {
    question: "How can I contact support?",
    answer: "You can contact support via our contact form or directly through email at support@mentorbooking.com."
  },
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqsContainer}>
      <h1 className="text-center text-light">Frequently Asked Questions</h1>
      <div className={styles.faqsList}>
        {faqs.map((faq, index) => (
          <div key={index} className={`card ${styles.card} mb-3`}>
            <div className="card-header" onClick={() => toggleFAQ(index)}>
              <h5 className="mb-0">
                <button className={`btn btn-link ${styles.faqButton}`}>
                  {faq.question}
                </button>
              </h5>
            </div>
            {activeIndex === index && (
              <div className="card-body">
                <p className="card-text">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;