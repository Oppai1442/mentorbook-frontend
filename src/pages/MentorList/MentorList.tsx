import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "./MentorList.module.css";
import { loadSvgs } from "../../utils";
import { MultiRangeSlider } from "../../components/multiRangerSlider";
import { getAllMentors, getAllSkills } from "../../services";
import { Pagination } from "../../components/Pagination";
import { mentor, Skill } from "../../types/Model";
import ProfilePopup from "./ProfilePopup";
import { LoadingError } from "../../components/LoadingError";
import { useAuth } from "../../context";


const MentorList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, showAuthModal } = useAuth();

  const [svgData, setSvgData] = useState<{ [key: string]: string | null }>({});
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const minPriceRef = useRef(minPrice);
  const maxPriceRef = useRef(maxPrice);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const skillDropdownToggle = useRef<HTMLDivElement | null>(null);
  const skillContainerDropdownRef = useRef<HTMLDivElement | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [mentors, setMentors] = useState<mentor[]>([]);
  const [totalMentors, setTotalMentors] = useState<number>(0);
  const skillListRef = useRef<HTMLUListElement | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [sortOptions, setSortOptions] = useState({
    bookings: 'none',
    experience: 'none',
    rating: 'none',
    price: 'none',
  });

  const [selectedMentor, setSelectedMentor] = useState<mentor | null>(null);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (mentor: mentor) => {
    setSelectedMentor(mentor);
    setShowModal(true);
  };

  const [showChevronUp, setShowChevronUp] = useState(false);
  const [showChevronDown, setShowChevronDown] = useState(true);

  const handleScroll = (event: React.UIEvent<HTMLUListElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;

    setShowChevronUp(scrollTop > 0);
    setShowChevronDown(scrollTop < scrollHeight - clientHeight);
  };

  const scrollToTop = () => {
    if (skillListRef.current) {
      skillListRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const scrollToBottom = () => {
    if (skillListRef.current) {
      skillListRef.current.scrollTo({
        top: skillListRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const isSkillSelectedName = (skillName: string) => {
    return selectedSkills.find(skill => skill.name === skillName) !== undefined;
  };

  //cái này cần phải đứng trên cùng
  useEffect(() => {
    const init = async () => {
      try {
        const svgPaths = {
          facebookLogo: () => import('../../assets/svg/facebook-logo-30.svg'),
          twitterLogo: () => import('../../assets/svg/twitter-logo-30.svg'),
          linkedinLogo: () => import('../../assets/svg/linkedin-logo-30.svg'),
        };
        const svgMap = await loadSvgs(svgPaths);
        const skills = await getAllSkills();

        setSvgData(svgMap);
        if (skills) {
          setSkills(skills)
          loadDataFromUrl(skills);
        }
      } catch (error: any) {
      }
    };

    const loadDataFromUrl = async (skills: Skill[]) => {
      const query = new URLSearchParams(location.search);
      const skillsFromURL = query.get('skills')?.split(',').map(Number) || [];
      const minPriceFromURL = Number(query.get('minPrice')) || minPriceRef.current;
      const maxPriceFromURL = Number(query.get('maxPrice')) || maxPriceRef.current;
      const ratingsFromURL = query.get('ratings')?.split(',') || [];
      const pageFromURL = Number(query.get('page')) || 1;

      const sortFromUrl = {
        bookings: query.get('sortByBookings') || 'none',
        experience: query.get('sortByExperience') || 'none',
        rating: query.get('sortByRating') || 'none',
        price: query.get('sortByPrice') || 'none',
      }

      if (skills.length > 0) {
        const skillsWithNames = skillsFromURL.map(skillId => {
          const skill = skills.find(s => s.id === skillId);
          return skill ? { id: skill.id, name: skill.name, description: skill.description } : null;
        }).filter((skill): skill is Skill => skill !== null);

        setSelectedSkills(skillsWithNames);
      }

      setMinPrice(minPriceFromURL);
      setMaxPrice(maxPriceFromURL);
      setSelectedRatings(ratingsFromURL);
      setCurrentPage(pageFromURL);
      setSortOptions(sortFromUrl)
    }

    init();
  }, []);

  //Chuyển dữ liệu thành url 
  const updateUrl = () => {
    const query = new URLSearchParams();

    if (selectedSkills.length > 0) {
      query.set('skills', selectedSkills.map(skill => skill.id).sort((a, b) => a - b).join(','));
    }

    query.set('minPrice', String(minPrice));
    query.set('maxPrice', String(maxPrice));

    if (selectedRatings.length > 0) {
      query.set('ratings', selectedRatings.sort((a: any, b: any) => a - b).join(','));
    }
    query.set('page', String(currentPage))

    query.set('sortByBookings', sortOptions.bookings);
    query.set('sortByExperience', sortOptions.experience);
    query.set('sortByRating', sortOptions.rating);
    query.set('sortByPrice', sortOptions.price);

    setMentors([]);

    const getMentors = async () => {
      setLoading(true);
      try {
        const response = await getAllMentors({
          page: currentPage - 1,
          skillIds: selectedSkills.map(skill => skill.id).sort((a: any, b: any) => a - b),
          prices: {
            min: minPrice,
            max: maxPrice,
          },
          rating: selectedRatings.map(Number).sort((a: any, b: any) => a - b),
          sorting: {
            bookings: sortOptions.bookings,
            experience: sortOptions.experience,
            rating: sortOptions.rating,
            price: sortOptions.price,
          }
        });
        if (response) {
          setMentors(response.mentors);
          setTotalMentors(response.totalFound);
        }
      } catch (error: any) {
        console.error('An error occurred:', error);
        setError(error);
      }
      setLoading(false);
    }

    getMentors();
    navigate({ search: query.toString() });
  };

  const handlePageChange = (page: number) => {
    if (isLoggedIn) {
      setCurrentPage(page);
    } else {
      showAuthModal("signIn");
    }
  }

  // Hàm xử lý khi chọn kỹ năng
  const handleSkillSelect = (skillId: number) => {
    setSelectedSkills(prev => {
      const skillExists = prev.some(s => s.id === skillId);
      const skill = skills.find(s => s.id === skillId);

      if (!skill) {
        console.warn(`Kỹ năng với ID ${skillId} không tồn tại.`);
        return prev;
      }

      const updatedSkills = skillExists
        ? prev.filter(s => s.id !== skillId)
        : [...prev, { id: skill.id, name: skill.name, description: skill.description }];

      return updatedSkills;
    });
  };

  const handleRatingChange = (rating: string) => {
    setSelectedRatings(prev => {
      const newSelectedRatings = prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating];

      return newSelectedRatings;
    });
  };


  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  useEffect(() => {
    updateUrl();
  }, [selectedSkills, minPrice, maxPrice, selectedRatings, currentPage, sortOptions]);

  useEffect(() => {
    if (!isLoggedIn) {
      setCurrentPage(1);
    }
  }, [isLoggedIn])

  const handleSortChange = (sortType: string, sortMode: string) => {
    setSortOptions(prevOptions => ({
      ...prevOptions,
      [sortType]: sortMode,
    }));
  };

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.description.toLowerCase().includes(searchTerm.toLowerCase())
  );


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (skillContainerDropdownRef.current && !skillContainerDropdownRef.current.contains(event.target as Node) && skillDropdownToggle.current && !skillDropdownToggle.current.contains(event.target as Node)) {
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
            <div className={`${styles['card']} ${styles['mt-20']} ${styles['sidebar-container']}`}>
              <div className={`${styles['card-body']}`}>
                <h5 className={`${styles['card-title']}`}>Filter Mentors</h5>


                {/* Filter by Skill with Search */}
                <div className={`${styles['mb-3']}`}>
                  <label className={`${styles['form-label']}`}>Filter by Skill</label>
                  <div className={`${styles['dropdown']} ${styles['position-relative']}`}>
                    <div
                      ref={skillDropdownToggle}
                      className="form-control d-flex justify-content-between align-items-center cursor-pointer"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <span>{selectedSkills.length > 0 ? `${selectedSkills.length} selected` : "Select Skills"}</span>
                      <i className="fa fa-chevron-down"></i>
                    </div>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div
                        ref={skillContainerDropdownRef}
                        className={`dropdown-menu show w-100 mt-1 p-3 shadow-lg border-0 ${styles['dropdown-menu-custom']}`}
                      >
                        <div className="d-flex">
                          {/* Search & Skill List Section */}
                          <div className={`flex-grow-1 me-3 ${styles['skill-search-tab']}`}>
                            <input
                              type="text"
                              placeholder="Search skills..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="form-control mb-3"
                            />
                            <div className="position-relative">
                              {showChevronUp && (
                                <i
                                  className={`fa-thin fa-chevrons-up fa-beat-fade text-muted position-absolute top-0 start-50 translate-middle ${styles['z-3']} ${styles['cursor-pointer']}`}
                                  onClick={scrollToTop}
                                />
                              )}
                              <ul
                                ref={skillListRef}
                                onScroll={handleScroll}
                                className={`${styles['skill-list']} list-group overflow-auto`}
                                style={{ maxHeight: '18.75rem', padding: '1rem 0' }}
                              >
                                {filteredSkills.length > 0 ? (
                                  filteredSkills.map((skill, index) => (
                                    <li
                                      key={skill.id + '-' + index}
                                      className={`list-group-item d-flex justify-content-between align-items-center rounded 
                                          ${isSkillSelectedName(skill.name) ? 'bg-light' : ''}`}
                                      onClick={() => handleSkillSelect(skill.id)}
                                    >
                                      <span>
                                        <strong>{skill.name}</strong>
                                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>
                                          {skill.description}
                                        </p>
                                      </span>
                                      {isSkillSelectedName(skill.name) && (
                                        <span className="badge bg-primary">Selected</span>
                                      )}
                                    </li>
                                  ))
                                ) : (
                                  <li className="list-group-item text-muted">No skills found</li>
                                )}
                              </ul>
                              {showChevronDown && (
                                <i
                                  className={`fa-thin fa-chevrons-down fa-beat-fade text-muted position-absolute bottom-0 start-50 translate-middle ${styles['z-3']} ${styles['cursor-pointer']}`}
                                  onClick={scrollToBottom}
                                />
                              )}
                            </div>

                          </div>

                          {/* Selected Skills Section */}
                          <div className={`flex-shrink-0 ${styles['selected-skills-tab']}`} style={{ minWidth: '200px' }}>
                            <h6 className="mb-2 text-primary">Selected Skills</h6>
                            {selectedSkills.length > 0 ? (
                              <div className="d-flex flex-wrap mt-1 overflow-auto" style={{ maxHeight: '18.75rem' }}>
                                {selectedSkills.slice().reverse().map((skill) => (
                                  <span key={skill.id} className="badge bg-secondary me-2 mb-2 p-2">
                                    {skill.name}
                                    <button
                                      type="button"
                                      className="btn-close btn-close-white ms-1"
                                      aria-label="Remove"
                                      onClick={() => handleSkillSelect(skill.id)} // Gọi hàm để bỏ chọn kỹ năng
                                      style={{ fontSize: '8px' }}
                                    ></button>
                                  </span>
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
                      current={{
                        min: minPrice,
                        max: maxPrice
                      }}
                      onChange={({ min, max }) => {
                        handlePriceChange(min, max);
                      }}
                      showInput={true}
                      showButton={true}
                    />
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-3">
                  <label className="form-label">Rating</label>
                  <div className="d-flex flex-column">
                    {["5", "4", "3", "2", "1", "0"].map(rating => (
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
                            <i key={i} className="fa-solid fa-star me-1" style={{ color: "#FFD43B", }}></i>
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
              <label className={`${styles['mt-015']}`}>Sort by:</label>
              <div className="sort-bar d-flex justify-content-between align-items-center mb-4">
                <div className="sort-option d-flex align-items-center">
                  <label className="me-2">Bookings</label>
                  <select className="form-select me-3"
                    onChange={e => handleSortChange('bookings', e.target.value)}
                    value={sortOptions.bookings}>
                    <option value="none">Select an option</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                  </select>
                </div>
                <div className="sort-option d-flex align-items-center">
                  <label className="me-2">Experience</label>
                  <select className="form-select me-3"
                    onChange={e => handleSortChange('experience', e.target.value)}
                    value={sortOptions.experience}>
                    <option value="none">Select an option</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                  </select>
                </div>
                <div className="sort-option d-flex align-items-center">
                  <label className="me-2">Rating</label>
                  <select className="form-select me-3"
                    onChange={e => handleSortChange('rating', e.target.value)}
                    value={sortOptions.rating}>
                    <option value="none">Select an option</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                  </select>
                </div>
                <div className="sort-option d-flex align-items-center">
                  <label className="me-2">Price</label>
                  <select className="form-select"
                    onChange={e => handleSortChange('price', e.target.value)}
                    value={sortOptions.price}>
                    <option value="none">Select an option</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={`row ${styles['mentors-container']}`}>
              {loading && (<LoadingError
                type="loading"
                message="loading mentors list..."
              />)}
              {error && (
                <LoadingError
                  type="error"
                  message="The map could not be loaded due to a server error."
                />
              )}
              {mentors.length !== 0 && (mentors.map((mentor) => (
                <div key={mentor.userId} className={`${styles['col-12']} ${styles['col-md-6']} ${styles['col-lg-4']} ${styles['mb-6']}`}>
                  <div className={`${styles['card']}`}>
                    <img
                      className={`${styles['img']} ${styles['card-img-top']}`}
                      src={mentor.backgroundUrl}
                      alt=""
                    />
                    <div className={`${styles['mt-n8']} ${styles['card-body']} ${styles['text-center']}`}>
                      <img
                        className={`${styles['img']} ${styles['mb-6']} ${styles['img-fluid']} ${styles['rounded-2']}`}
                        src={mentor.avatarUrl}
                        style={{ width: 64, height: 64 }}
                        alt=""
                      />
                      <h6 className={`${styles['h6']} ${styles['card-title']} ${styles['mb-2']}`}>{mentor.fullName}</h6>
                      <p className={`${styles['p']} ${styles['card-text']}`}>{mentor.role}</p>
                      {/* <a className={`${styles['d-inline-block']} ${styles['mb-3']} ${styles['text-decoration-none']} ${styles['text-primary']}`} href="#">
                          {mentor.role}
                        </a> */}
                      {/* <div className={`${styles['d-flex']} ${styles['mb-6']} ${styles['justify-content-center']} ${styles['align-items-center']}`}>
                          <a className={`${styles['a']} ${styles['me-2']}`} href={mentor.facebook} target="_blank" rel="noopener noreferrer">
                            {svgData['facebookLogo'] && (<img
                              className={`${styles['img']} ${styles['img-fluid']}`}
                              src={svgData['facebookLogo']}
                              alt=""
                            />)}
                          </a>
                          <a className={`${styles['a']} ${styles['me-2']}`} href={mentor.twitter} target="_blank" rel="noopener noreferrer">
                            {svgData['twitterLogo'] && (<img
                              className={`${styles['img']} ${styles['img-fluid']}`}
                              src={svgData['twitterLogo']}
                              alt=""
                            />)}
                          </a>
                          <a className={`${styles['a']} ${styles['me-2']}`} href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                            {svgData['linkedinLogo'] && (<img
                              className={`${styles['img']} ${styles['img-fluid']}`}
                              src={svgData['linkedinLogo']}
                              alt=""
                            />)}
                          </a>
                        </div> */}
                      {/* <div className={`${styles['mb-8']} d-flex flex-wrap justify-content-center`}>
                          {mentor.skills.map((skill) => (
                            <a
                              key={skill.skillId}
                              className={`${styles['a']} ${styles['text-decoration-none']} ${styles['badge']} ${styles['bg-transparent']} ${styles['border']} ${styles['text-dark']} ${styles['fw-bold']} me-2 mb-2`}
                              href="#"
                            >
                              {skill.skillName}
                            </a>
                          ))}
                        </div> */}
                      <div className="d-flex justify-content-between text-center mb-2">
                        <div>
                          <p className={`mb-2 ${styles['h6']}`}>{mentor.rating} <i className="fa-solid fa-star-sharp" style={{ color: "#FFD43B" }} />
                          </p>
                          <p className="text-muted mb-0">Rating</p>
                        </div>
                        <div className="px-3">
                          <p className={`mb-2 ${styles['h6']}`}>{mentor.totalBooked}</p>
                          <p className="text-muted mb-0">Total booked</p>
                        </div>
                        <div>
                          <p className={`mb-2 ${styles['h6']}`}>{mentor.price}</p>
                          <p className="text-muted mb-0">Price (hour)</p>
                        </div>
                      </div>
                      <button
                        className={`${styles['a']} ${styles['btn']} ${styles['w-100']} ${styles['btn-outline-dark']} ${styles['d-flex']} ${styles['align-items-center']} ${styles['justify-content-center']}`}
                        onClick={() => handleShowModal(mentor)}
                      >
                        <i className={`fa-light fa-user ${styles['me-2']}`} />
                        <span>Profile</span>
                      </button>

                    </div>
                  </div>
                </div>
              )))}
              {showModal && selectedMentor && (
                <ProfilePopup mentor={selectedMentor} onClose={() => setShowModal(false)} />
              )}

            </div>

            {totalMentors > 0 && (<div className="d-flex justify-content-center mt-3">
              <Pagination
                totalItems={totalMentors}
                itemsPerPage={9}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorList;