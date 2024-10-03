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
    <div className="container">
      <div className="sideBar"></div>
      <div className="row">
        {mentors.map((mentor) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className={`position-relative border rounded-2 ${styles.mentor}`}
            >
              <a
                className="position-absolute top-0 end-0 mt-3 me-3"
                href="https://shuffle.dev/#"
              >
                <i
                  className={`fa-regular fa-ellipsis-stroke ${styles.mentorMoreInfo}`}
                />
              </a>
              <div className={`${styles.mentorInfo} text-center `}>
                <img
                  className="img-fluid rounded-2 mb-6"
                  style={{ width: 64, height: 64 }}
                  src={mentor.image}
                  alt="avatar"
                />
                <h6 className={`${styles.mentorName}`}>
                  {mentor.name}
                </h6>
                <p className="mb-3">
                  {mentor.skill}
                </p>
                <span
                  className={`badge mb-4 text-primary ${styles["bg-primary-light"]} ${styles.mentorRate}`}
                >
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#FFD43B" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#FFD43B" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#FFD43B" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#FFD43B" }}
                  />
                </span>
                <p>
                  {" "}
                  I distinguish three main text objectives could be merely to
                  inform people. A second could be persuade people. You want
                  people to bay objective.{" "}
                </p>
              </div>
              <div
                className={`d-flex align-items-center justify-content-between mb-4`}
              >
                <div className="d-flex align-items-center">
                  <i className="fa-light fa-compass me-3"></i>
                  <p className="mb-0">
                    Location
                  </p>
                </div>
                <p className="mb-0">
                  {mentor.location}
                </p>
              </div>
              <div
                className={`d-flex align-items-center justify-content-between mb-4`}
              >
                <div className="d-flex align-items-center">
                  <svg
                    className="me-3"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 3H14V12.4444C14 12.5918 13.9473 12.7331 13.8536 12.8373C13.7598 12.9415 13.6326 13 13.5 13H2.5C2.36739 13 2.24021 12.9415 2.14645 12.8373C2.05268 12.7331 2 12.5918 2 12.4444V3Z"
                      stroke="#7A899B"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 3L8 8L2 3"
                      stroke="#7A899B"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mb-0">
                    Email address
                  </p>
                </div>
                <p className="mb-0">
                  {mentor.email}
                </p>
              </div>
              <div className="d-flex mb-4 align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <svg
                    className="me-3"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 5H2.5C2.22386 5 2 5.22386 2 5.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V5.5C14 5.22386 13.7761 5 13.5 5Z"
                      stroke="#7A899B"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 4V3C11 2.73478 10.8736 2.48043 10.6485 2.29289C10.4235 2.10536 10.1183 2 9.8 2H6.2C5.88174 2 5.57652 2.10536 5.35147 2.29289C5.12643 2.48043 5 2.73478 5 3V4"
                      stroke="#7A899B"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 8H14"
                      stroke="#7A899B"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mb-0">
                    Company
                  </p>
                </div>
                <p className="mb-0">
                  Nintendo
                </p>
              </div>
              <a
                className={`btn me-3 w-100 btn-primary d-flex align-items-center justify-content-center ${styles.mentorChat}`}
                href="https://shuffle.dev/#"
              >
                <svg
                  className="me-2"
                  width={17}
                  height={16}
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M2.6946 11.4494C1.85561 10.0351 1.56179 8.36309 1.86831 6.74744C2.17483 5.1318 3.06061 3.68362 4.35932 2.67485C5.65803 1.66607 7.28032 1.1661 8.92158 1.2688C10.5628 1.37151 12.1101 2.06983 13.273 3.23264C14.4358 4.39545 15.1341 5.94275 15.2368 7.58401C15.3395 9.22526 14.8396 10.8476 13.8308 12.1463C12.822 13.445 11.3738 14.3308 9.75821 14.6373C8.14256 14.9438 6.47059 14.65 5.05624 13.811L5.05626 13.811L2.72397 14.4773C2.62747 14.5049 2.52536 14.5062 2.42821 14.481C2.33106 14.4558 2.24242 14.4051 2.17145 14.3342C2.10049 14.2632 2.0498 14.1745 2.02462 14.0774C1.99945 13.9803 2.00071 13.8781 2.02829 13.7816L2.69466 11.4494L2.6946 11.4494Z"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.25 6.59375H10.75"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.25 9.40625H10.75"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width={16}
                        height={16}
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>Message</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorList;
