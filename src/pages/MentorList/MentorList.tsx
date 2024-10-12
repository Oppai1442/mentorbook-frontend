import React, { useState } from "react";
import styles from "./MentorList.module.css";

const mentors = [
  {
    name: "John Doe",
    rating: 4.8,
    price: 50,
    available: true,
    skill: "JavaScript",
    image: "/john.jpg",
    experienceYears: 5,
    email: "john.doe@example.com",
    location: "Brooklyn, NY",
    avatar: "https://images.unsplash.com/photo-1566576912307-ffbc957001f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80"
  },
  {
    name: "Jane Smith",
    rating: 4.9,
    price: 75,
    available: false,
    skill: "Python",
    image: "/jane.jpg",
    experienceYears: 7,
    email: "jane.smith@example.com",
    location: "Palo Alto, CA",
    avatar: "https://images.unsplash.com/photo-1566576912307-ffbc957001f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80"
  },
  {
    name: "Mike Johnson",
    rating: 4.5,
    price: 40,
    available: true,
    skill: "Java",
    image: "/mike.jpg",
    experienceYears: 4,
    email: "mike.johnson@example.com",
    location: "Round Rock, TX",
    avatar: "https://images.unsplash.com/photo-1566576912307-ffbc957001f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80"
  },
  {
    name: "Emily Davis",
    rating: 4.7,
    price: 60,
    available: true,
    skill: "React",
    image: "/emily.jpg",
    experienceYears: 6,
    email: "emily.davis@example.com",
    location: "Santa Monica, CA",
    avatar: "https://images.unsplash.com/photo-1566576912307-ffbc957001f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80"
  },
  {
    name: "Alice Brown",
    rating: 4.6,
    price: 55,
    available: true,
    skill: "Node.js",
    image: "/alice.jpg",
    experienceYears: 3,
    email: "alice.brown@example.com",
    location: "Bellevue, WA",
    avatar: "https://images.unsplash.com/photo-1566576912307-ffbc957001f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80"
  },
  {
    name: "Robert Wilson",
    rating: 4.4,
    price: 45,
    available: false,
    skill: "C#",
    image: "/robert.jpg",
    experienceYears: 8,
    email: "robert.wilson@example.com",
    location: "Schaumburg, IL",
    avatar: "https://images.unsplash.com/photo-1566576912307-ffbc957001f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80"
  },
  {
    name: "Sophia Turner",
    rating: 4.7,
    price: 70,
    available: true,
    skill: "Ruby on Rails",
    image: "/sophia.jpg",
    experienceYears: 5,
    email: "sophia.turner@example.com",
    location: "Fort Lauderdale, FL",
    avatar: "https://images.unsplash.com/photo-1566576912307-ffbc957001f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80"
  },
  {
    name: "Daniel Lee",
    rating: 4.5,
    price: 65,
    available: true,
    skill: "Go",
    image: "/daniel.jpg",
    experienceYears: 4,
    email: "daniel.lee@example.com",
    location: "Cambridge, MA",
    avatar: "https://images.unsplash.com/photo-1566576912307-ffbc957001f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80"
  },
  {
    name: "Olivia Martinez",
    rating: 4.8,
    price: 80,
    available: true,
    skill: "Swift",
    image: "/olivia.jpg",
    experienceYears: 6,
    email: "olivia.martinez@example.com",
    location: "Boulder, CO",
    avatar: "https://images.unsplash.com/photo-1566576912307-ffbc957001f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80"
  },
];

const MentorList: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("rating");

  const sortedMentors = [...mentors].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    if (sortBy === "availability")
      return a.available === b.available ? 0 : a.available ? -1 : 1;
    return 0;
  });

  return (
    <section className={`${styles['py-6']}`}>
      <div className={`${styles['container']}`}>
        <div className={`${styles['row']}`}>
        {mentors.map((mentor) => (
          <div className={`${styles['col-12']} ${styles['col-md-6']} ${styles['col-lg-4']} ${styles['mb-6']}`}>
            <div className={`${styles['card']}`}>
              <img
                className={`${styles['img']} ${styles['card-img-top']}`}
                src={mentor.background}
                alt=""
              />
              <div className={`${styles['mt-n8']} ${styles['card-body']} ${styles['text-center']}`}>
                <img
                  className={`${styles['img']} ${styles['mb-6']} ${styles['img-fluid']} ${styles['rounded-2']}`}
                  src={mentor.avatar}
                  style={{ width: 64, height: 64 }}
                  alt=""
                />
                <h6 className={`${styles['h6']} ${styles['card-title']} ${styles['mb-2']}`}>{mentor.name}</h6>
                <p className={`${styles['p']} ${styles['card-text']}`}>Influencer &amp; Social Media Content</p>
                <a className={`${styles['a']} ${styles['d-inline-block']} ${styles['mb-6']} ${styles['text-decoration-none']}`} href="#">
                  {mentor.email}
                </a>
                <div className={`${styles['d-flex']} ${styles['mb-6']} ${styles['justify-content-center']} ${styles['align-items-center']}`}>
                  <a className={`${styles['a']} ${styles['me-2']}`} href="#">
                    <img
                      className={`${styles['img']} ${styles['img-fluid']}`}
                      src="sirius-assets/images/buttons/facebook.svg"
                      alt=""
                    />
                  </a>
                  <a className={`${styles['a']} ${styles['me-2']}`} href="#">
                    <img
                      className={`${styles['img']} ${styles['img-fluid']}`}
                      src="sirius-assets/images/buttons/twitter.svg"
                      alt=""
                    />
                  </a>
                  <a className={`${styles['a']} ${styles['me-2']}`} href="#">
                    <img
                      className={`${styles['img']} ${styles['img-fluid']}`}
                      src="sirius-assets/images/buttons/linkedin.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className={`${styles['mb-8']}`}>
                  <a
                    className={`${styles['a']} ${styles['text-decoration-none']} ${styles['badge']} ${styles['me-2']} ${styles['bg-transparent']} ${styles['border']} ${styles['text-dark']} ${styles['fw-bold']}`}
                    href="#"
                  >
                    Marketing
                  </a>
                  <a
                    className={`${styles['a']} ${styles['text-decoration-none']} ${styles['badge']} ${styles['bg-transparent']} ${styles['border']} ${styles['text-dark']} ${styles['fw-bold']}`}
                    href="#"
                  >
                    Development
                  </a>
                </div>
                <a
                  className={`${styles['a']} ${styles['btn']} ${styles['w-100']} ${styles['btn-outline-dark']} ${styles['d-flex']} ${styles['align-items-center']} ${styles['justify-content-center']}`}
                  href="#"
                >
                  <i className={`fa-light fa-user ${styles['me-2']}`} />

                  <span>Profile</span>
                </a>
              </div>
            </div>
          </div>
        ))}

          
        </div>
      </div>
    </section>

  );
};

export default MentorList;
