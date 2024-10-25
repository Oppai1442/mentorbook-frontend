import React, { useState, useRef, useEffect } from "react";
import styles from "./MentorList.module.css";
import MultiRangeSlider from "../../components/multiRangerSlider/multiRangerSlider";
import { loadSvgs } from "../../utils";

const mentorsx = [
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
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80",
    description: "Experienced JavaScript developer with a passion for teaching.",
    facebook: "https://facebook.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe"
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
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80",
    description: "Expert in Python with extensive experience in data science.",
    facebook: "https://facebook.com/janesmith",
    twitter: "https://twitter.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith"
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
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80",
    description: "Passionate Java developer with a focus on backend systems.",
    facebook: "https://facebook.com/mikejohnson",
    twitter: "https://twitter.com/mikejohnson",
    linkedin: "https://linkedin.com/in/mikejohnson"
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
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80",
    description: "Frontend developer specializing in React and user experience.",
    facebook: "https://facebook.com/emilydavis",
    twitter: "https://twitter.com/emilydavis",
    linkedin: "https://linkedin.com/in/emilydavis"
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
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80",
    description: "Node.js developer with a knack for building scalable applications.",
    facebook: "https://facebook.com/alicebrown",
    twitter: "https://twitter.com/alicebrown",
    linkedin: "https://linkedin.com/in/alicebrown"
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
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80",
    description: "C# developer with a focus on enterprise solutions.",
    facebook: "https://facebook.com/robertwilson",
    twitter: "https://twitter.com/robertwilson",
    linkedin: "https://linkedin.com/in/robertwilson"
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
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80",
    description: "Ruby on Rails expert with a passion for agile methodologies.",
    facebook: "https://facebook.com/sophiaturner",
    twitter: "https://twitter.com/sophiaturner",
    linkedin: "https://linkedin.com/in/sophiaturner"
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
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80",
    description: "Go developer with a strong background in cloud technologies.",
    facebook: "https://facebook.com/daniellee",
    twitter: "https://twitter.com/daniellee",
    linkedin: "https://linkedin.com/in/daniellee"
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
    background: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80",
    description: "Swift developer with a focus on iOS applications.",
    facebook: "https://facebook.com/oliviamartinez",
    twitter: "https://twitter.com/oliviamartinez",
    linkedin: "https://linkedin.com/in/oliviamartinez"
  },
];

const skills = [
  { name: "JavaScript", description: "A versatile scripting language." },
  { name: "Python", description: "Great for data science and web development." },
  { name: "React", description: "A library for building user interfaces." },
  { name: "Node.js", description: "JavaScript runtime built on Chrome's V8 engine." },
  { name: "CSS", description: "Style sheets for styling web pages." },
  { name: "HTML", description: "The standard markup language for documents." },
  { name: "SQL1", description: "Language for managing databases." },
  { name: "SQL2", description: "Language for managing databases." },
  { name: "SQL3", description: "Language for managing databases." },
  { name: "SQL4", description: "Language for managing databases." },
  { name: "SQL5", description: "Language for managing databases." },
  { name: "SQL6", description: "Language for managing databases." },
  { name: "SQL7", description: "Language for managing databases." },
  { name: "SQL8", description: "Language for managing databases." },
  { name: "SQL9", description: "Language for managing databases." },
  { name: "SQL10", description: "Language for managing databases." },
  { name: "SQL11", description: "Language for managing databases." },
  { name: "SQL12", description: "Language for managing databases." },
  // Thêm nhiều kỹ năng hơn ở đây
];

const MentorList: React.FC = () => {
  const [svgData, setSvgData] = useState<{ [key: string]: string | null }>({});
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500000);
  const minPriceRef = useRef(minPrice);
  const maxPriceRef = useRef(maxPrice);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const filteredSkills = skills.filter(skill => skill.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSkillSelect = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };


  const handleSortChange = (a: string, b: string) => { };

  const handleRatingChange = (rating: string) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter(r => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  useEffect(() => {
    const svgPaths = {
      facebookLogo: () => import('../../assets/svg/facebook-logo-30.svg'),
      twitterLogo: () => import('../../assets/svg/twitter-logo-30.svg'),
      linkedinLogo: () => import('../../assets/svg/linkedin-logo-30.svg'),
    };

    const loadAndSetSvgs = async () => {
      const svgMap = await loadSvgs(svgPaths);
      setSvgData(svgMap);
    };

    loadAndSetSvgs();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <section className={`${styles['py-6']}`}>
      <div className={`${styles['container']}`}>
        <div className={`row`}>


          {/* Sidebar */}
          <div className={`${styles['col-12']} ${styles['col-md-4']} ${styles['col-lg-3']} ${styles['mb-6']} ${styles['w-25']}`}>
            <div className={`${styles['card']} ${styles['mt-20']}`}>
              <div className={`${styles['card-body']}`}>
                <h5 className={`${styles['card-title']}`}>Filter Mentors</h5>


                {/* Filter by Skill with Search */}
                <div className={`${styles['mb-3']}`}>
                  <label className={`${styles['form-label']}`}>Filter by Skill</label>
                  <div className={`${styles['dropdown']} ${styles['position-relative']}`}>
                    <div
                      className="form-control d-flex justify-content-between align-items-center cursor-pointer"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <span>{selectedSkills.length > 0 ? `${selectedSkills.length} selected` : "Select Skills"}</span>
                      <i className="fa fa-chevron-down"></i>
                    </div>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div ref={dropdownRef} className={`dropdown-menu show w-100 mt-1 ${styles['dropdown-menu-custom']}`}>
                        <div className="d-flex">
                          <div className={`flex-grow-1 me-2 ${styles['skill-search-tab']}`}>
                            <input
                              type="text"
                              placeholder="Search skills..."
                              value={searchTerm}
                              onChange={e => setSearchTerm(e.target.value)}
                              className="form-control mb-2"
                            />
                            <ul className={`${styles['skill-list']} list-group`}>
                              {filteredSkills.length > 0 ? (
                                filteredSkills.map(skill => (
                                  <li
                                    key={skill.name}
                                    className={`list-group-item d-flex justify-content-between align-items-center ${selectedSkills.includes(skill.name) ? 'bg-light' : ''}`}
                                    onClick={() => handleSkillSelect(skill.name)}
                                  >
                                    <span>
                                      <strong>{skill.name}</strong>
                                      <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>
                                        {skill.description}
                                      </p>
                                    </span>
                                    {selectedSkills.includes(skill.name) && (
                                      <span className="badge bg-primary">Selected</span>
                                    )}
                                  </li>
                                ))
                              ) : (
                                <li className="list-group-item text-muted">No skills found</li>
                              )}
                            </ul>
                          </div>

                          {/* Phần kỹ năng đã chọn */}
                          <div className={`flex-shrink-0 ${styles['selected-skills-tab']}`}>
                            <strong>Selected Skills:</strong>
                            {selectedSkills.length > 0 ? (
                              <div className="d-flex flex-wrap mt-1">
                                {selectedSkills.map(skill => (
                                  <div key={skill} className={`badge bg-secondary me-2 ${styles['mb-2']}`}>
                                    {skill}
                                    <button
                                      type="button"
                                      className="btn-close btn-close-white"
                                      aria-label="Close"
                                      onClick={() => handleSkillSelect(skill)}
                                    ></button>
                                  </div>

                                ))}
                              </div>
                            ) : (
                              <p className="text-muted mt-2">No skills selected</p>
                            )}
                          </div>

                        </div>
                      </div>
                    )}
                  </div>
                </div>


                {/* Price Range Slider */}
                <div className="mb-3">
                  <label htmlFor="priceRange" className="form-label">Price Range</label>
                  <div className={`align-items-center ${styles['range-slider-container']}`}>
                    <MultiRangeSlider
                      min={minPriceRef.current}
                      max={maxPriceRef.current}
                      onChange={({ min, max }) => {
                        setMinPrice(min);
                        setMaxPrice(max);
                      }}
                      showInput={true}
                    />
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-3">
                  <label className="form-label">Rating</label>
                  <div className="d-flex flex-column">
                    {["All", "5", "4", "3", "2", "1", "0"].map(rating => (
                      <div key={rating} className="d-flex align-items-center mb-2">
                        {/* Checkbox */}
                        <input
                          type="checkbox"
                          checked={selectedRatings.includes(rating)}
                          onChange={() => handleRatingChange(rating)}
                          className="form-check-input me-2"
                        />

                        {/* Label text */}
                        <label className="form-check-label me-3">
                          {rating === "All" ? "All Ratings" : `${rating} Stars`}
                        </label>

                        {/* Stars with extra margin */}
                        <div className="d-flex">
                          {rating !== "All" && [...Array(Number(rating))].map((_, i) => (
                            <i key={i} className="fa-solid fa-star me-1"></i>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </div>
          </div>

          {/* Mentor List */}
          <div className="col-12 col-md-8 col-lg-9">
            <div className="d-flex justify-content-between mb-3">
              <label>Sort by:</label>
              <div className="sort-bar d-flex justify-content-between align-items-center mb-4">
                <div className="sort-option d-flex align-items-center">
                  <label className="me-2">Name</label>
                  <select className="form-select me-3" onChange={e => handleSortChange('name', e.target.value)}>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                  </select>
                </div>
                <div className="sort-option d-flex align-items-center">
                  <label className="me-2">Experience</label>
                  <select className="form-select me-3" onChange={e => handleSortChange('experience', e.target.value)}>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                  </select>
                </div>
                <div className="sort-option d-flex align-items-center">
                  <label className="me-2">Rating</label>
                  <select className="form-select me-3" onChange={e => handleSortChange('rating', e.target.value)}>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                  </select>
                </div>
                <div className="sort-option d-flex align-items-center">
                  <label className="me-2">Price</label>
                  <select className="form-select" onChange={e => handleSortChange('price', e.target.value)}>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              {mentorsx.map((mentor) => (
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
                          {svgData['facebookLogo'] && (<img
                            className={`${styles['img']} ${styles['img-fluid']}`}
                            src={svgData['facebookLogo']}
                            alt=""
                          />)}
                        </a>
                        <a className={`${styles['a']} ${styles['me-2']}`} href="#">
                          {svgData['twitterLogo'] && (<img
                            className={`${styles['img']} ${styles['img-fluid']}`}
                            src={svgData['twitterLogo']}
                            alt=""
                          />)}
                        </a>
                        <a className={`${styles['a']} ${styles['me-2']}`} href="#">
                          {svgData['linkedinLogo'] && (<img
                            className={`${styles['img']} ${styles['img-fluid']}`}
                            src={svgData['linkedinLogo']}
                            alt=""
                          />)}
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

        </div>
      </div>
    </section>
  );
};

export default MentorList;