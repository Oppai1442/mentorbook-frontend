import React, { useState } from 'react';
import styles from './FAQs.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const faqs = [
        {
            question: "Làm thế nào để đặt lịch hẹn?",
            shortAnswer: "Để đặt lịch hẹn, bạn chỉ cần truy cập vào trang đặt lịch và chọn thời gian phù hợp.",
            fullAnswer: ""
        },
        {
            question: "Có thể hủy lịch hẹn không?",
            shortAnswer: "Có, bạn có thể hủy lịch hẹn trong vòng 24 giờ trước thời điểm đã đặt.",
            fullAnswer: ""
        },
        {
            question: "Tôi có thể thay đổi thông tin cá nhân không?",
            shortAnswer: "Có, bạn có thể thay đổi thông tin cá nhân thông qua trang hồ sơ của mình.",
            fullAnswer: "ax"
        }
    ];

    const toggleAccordion = (index: number) => {
      if (isAnimating) return; // Ngăn chặn click khi đang animating
      setIsAnimating(true);
      
      // Đặt activeIndex
      setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  
      // Đặt lại isAnimating sau khoảng thời gian tương ứng với thời gian chuyển tiếp
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Thời gian phải đồng bộ với thời gian transition CSS
    };

    return (
        <section className="py-24 py-md-40">
          <div className="container">
            <div className="text-center border-bottom border-secondary-light pb-5 mb-20">
              <h2 className="text-dark mt-8 mb-20">FAQ's</h2>
              <div>
                <a
                  className="btn btn-white"
                  href="#"
                  style={{ boxShadow: "8px 80px 138px rgba(0, 0, 0, 0.20)" }}
                >
                  Software
                </a>
                <a className="btn" href="#">
                  Application
                </a>
                <a className="btn" href="#">
                  Payments
                </a>
              </div>
            </div>
            <div className="mw-4xl mx-auto">
              <div className="accordion" id=""> 
                {faqs.map((faq, index) => (
                  <div className="accordion-item border-0 border-bottom border-secondary-light bg-transparent rounded-0" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button collapsed bg-transparent ${styles['.accordion-button']}`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={activeIndex === index}
                        aria-controls={`collapse${index}`}
                      >
                        <div className="d-flex align-items-center">
                          <div className="me-4 me-md-8">
                            <span
                              className={`d-flex justify-content-center align-items-center rounded-circle h6 ${activeIndex === index ? 'bg-primary text-white' : 'bg-primary-light'}`}
                              style={{ width: 48, height: 48 }}
                            >
                              {index + 1}
                            </span>
                          </div>
                          <div className="pe-2">
                            <div className="d-flex align-items-center">
                              <h3 className={`h5 mb-0 ${activeIndex === index ? 'text-primary' : ''}`}>
                                {faq.question}
                                </h3>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body pb-8">
                        <div className="ms-md-6 ms-xl-20 ps-6 ps-md-12 py-2 mw-md mw-xl-2xl border-start">
                          <p className="mb-8 fw-bold">
                            {faq.shortAnswer}
                          </p>
                          <p>
                            {faq.fullAnswer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

    );
};

export default FAQs;