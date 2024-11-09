import React, { useEffect, useState } from 'react';
import styles from './Settings.module.css';
import { useAuth } from '../../../context';
import { User } from '../../../types/Model';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { userUploadProfile } from '../../../services';

const Settings: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [userData, setUserData] = useState<User | null>(user);

  useEffect(() => {
    if (user) {
      setUserData(user);
      if (user.birthDate) {
        setBirthDate(new Date(user.birthDate));
      }
    }
  }, [user]);

  const handleDateChange = (date: Date | null) => {
    setBirthDate(date);
    setUserData((prevData) =>
      prevData && date ? { ...prevData, birthDate: date } : prevData
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = event.target;


    setUserData((prevData) => prevData ? { ...prevData, [id]: value } : null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (userData) {
      updateProfile(userData);
    }
  };

  const handleProfilePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const formData = new FormData();
      formData.append("image", event.target.files[0]);

      try {
        const response = await userUploadProfile(formData);
        
        if (response && userData) {
            const newAvatarUrl = response.url;
            setUserData((prevData) => prevData ? { ...prevData, avatarUrl: newAvatarUrl } : null);
            updateProfile(userData);
        }
      } catch (error) {
        console.error("Failed to upload profile photo:", error);
      }
    }
  };

  // Xử lý upload ảnh cho cover photo
  const handleCoverPhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const formData = new FormData();
      formData.append("image", event.target.files[0]);

      // try {
      //   const response = await axios.post("/api/images/upload", formData, {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   });
      //   const newBackgroundUrl = `/api/images/uploads/${event.target.files[0].name}`;
      //   setUserData((prevData) => prevData ? { ...prevData, backgroundUrl: newBackgroundUrl } : null);
      //   updateProfile({ ...userData, backgroundUrl: newBackgroundUrl });
      // } catch (error) {
      //   console.error("Failed to upload cover photo:", error);
      // }
    }
  };

  return (
    <>
      <div className={`${styles['row']}`}>
        <div className={`${styles['col-12']} ${styles['col-xl-8']}`}>
          <div className={`${styles['card']} ${styles['card-body']} ${styles['border-0']} ${styles['shadow']} ${styles['mb-4']}`}>
            <h2 className={`${styles['h2']} ${styles['h5']} ${styles['mb-4']}`}>General information</h2>
            <form onSubmit={handleSubmit}>
              <div className={`${styles['row']}`}>
                <div className={`${styles['mb-3']}`}>
                  <label className={`${styles['label']}`} htmlFor="fullName">Full Name</label>
                  <input
                    className={`${styles['input']} ${styles['form-control']}`}
                    id="fullName"
                    type="text"
                    value={userData?.fullName || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className={`${styles['row']} ${styles['align-items-center']}`}>
                <div className={`${styles['col-md-6']} ${styles['mb-3']}`}>
                  <label className={`${styles['label']}`} htmlFor="birthday">Birthday</label>
                  <div className={`${styles['input-group']}`}>
                    <span className={`${styles['input-group-text']}`}>
                      <i className={`${styles['icon']} ${styles['icon-xs']} fa-solid fa-calendar-week`}></i>
                    </span>
                    <DatePicker
                      selected={birthDate}
                      onChange={handleDateChange}
                      dateFormat="yyyy/MM/dd"
                      className={`${styles['datePicker']} ${styles['form-control']}`}
                      placeholderText="yyyy/mm/dd"
                      showPopperArrow={false}
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                      minDate={new Date(1950, 0, 1)}
                      maxDate={new Date()}
                    />
                  </div>
                </div>

                <div className={`${styles['col-md-6']} ${styles['mb-3']}`}>
                  <label className={`${styles['label']}`} htmlFor="gender">Gender</label>
                  <select
                    className={`${styles['select']} ${styles['form-select']} ${styles['mb-0']}`}
                    id="gender"
                    value={userData?.gender || ""}
                    onChange={handleInputChange}
                    aria-label="Gender select example"
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className={`${styles['row']}`}>
                <div className={`${styles['col-md-6']} ${styles['mb-3']}`}>
                  <label className={`${styles['label']}`} htmlFor="email">Email</label>
                  <input
                    className={`${styles['input']} ${styles['form-control']}`}
                    id="email"
                    type="email"
                    value={userData?.email || ""}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                  />
                </div>
                <div className={`${styles['col-md-6']} ${styles['mb-3']}`}>
                  <label className={`${styles['label']}`} htmlFor="phone">Phone</label>
                  <input
                    className={`${styles['input']} ${styles['form-control']}`}
                    id="phone"
                    type="text"
                    value={userData?.phone || ""}
                    onChange={handleInputChange}
                    placeholder="+12-345 678 910"
                  />
                </div>
              </div>

              <div className={`${styles['mt-3']}`}>
                <button
                  className={`${styles['button']} ${styles['btn']} ${styles['btn-gray-800']} ${styles['mt-2']} ${styles['animate-up-2']}`}
                  type="submit"
                >
                  Save all
                </button>
              </div>
            </form>
          </div>
          <div className={`${styles['card']} ${styles['card-body']} ${styles['border-0']} ${styles['shadow']} ${styles['mb-4']} ${styles['mb-xl-0']}`}>
            <h2 className={`${styles['h2']} ${styles['h5']} ${styles['mb-4']}`}>Alerts &amp; Notifications</h2>
            <ul className={`${styles['ul']} ${styles['list-group']} ${styles['list-group-flush']}`}>
              <li className={`${styles['li']} ${styles['list-group-item']} ${styles['d-flex']} ${styles['align-items-center']} ${styles['justify-content-between']} ${styles['px-0']} ${styles['border-bottom']}`}>
                <div>
                  <h3 className={`${styles['h3']} ${styles['h6']} ${styles['mb-1']}`}>News Notification</h3>
                  <p className={`${styles['p']} ${styles['small']} ${styles['pe-4']}`}>
                    Get Rocket news, announcements, and changes
                  </p>
                </div>
                <div>
                  <div className={`${styles['form-check']} ${styles['form-switch']}`}>
                    <input
                      className={`${styles['input']} ${styles['form-check-input']}`}
                      type="checkbox"
                      id="user-notification-1"
                    />
                    <label
                      className={`${styles['label']} ${styles['form-check-label']}`}
                      htmlFor="user-notification-1"
                    />
                  </div>
                </div>
              </li>
              <li className={`${styles['li']} ${styles['list-group-item']} ${styles['d-flex']} ${styles['align-items-center']} ${styles['justify-content-between']} ${styles['px-0']} ${styles['border-bottom']}`}>
                <div>
                  <h3 className={`${styles['h3']} ${styles['h6']} ${styles['mb-1']}`}>Account Activity</h3>
                  <p className={`${styles['p']} ${styles['small']} ${styles['pe-4']}`}>
                    Get important notifications about you or activity you've missed
                  </p>
                </div>
                <div>
                  <div className={`${styles['form-check']} ${styles['form-switch']}`}>
                    <input
                      className={`${styles['input']} ${styles['form-check-input']}`}
                      type="checkbox"
                      id="user-notification-2"
                    />
                    <label
                      className={`${styles['label']} ${styles['form-check-label']}`}
                      htmlFor="user-notification-2"
                    />
                  </div>
                </div>
              </li>
              <li className={`${styles['li']} ${styles['list-group-item']} ${styles['d-flex']} ${styles['align-items-center']} ${styles['justify-content-between']} ${styles['px-0']}`}>
                <div>
                  <h3 className={`${styles['h3']} ${styles['h6']} ${styles['mb-1']}`}>Meetups Near You</h3>
                  <p className={`${styles['p']} ${styles['small']} ${styles['pe-4']}`}>
                    Get an email when a Dribbble Meetup is posted close to my
                    location
                  </p>
                </div>
                <div>
                  <div className={`${styles['form-check']} ${styles['form-switch']}`}>
                    <input
                      className={`${styles['input']} ${styles['form-check-input']}`}
                      type="checkbox"
                      id="user-notification-3"
                    />
                    <label
                      className={`${styles['label']} ${styles['form-check-label']}`}
                      htmlFor="user-notification-3"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles['col-12']} ${styles['col-xl-4']}`}>
          <div className={`${styles['row']}`}>
            <div className={`${styles['col-12']} ${styles['mb-4']}`}>
              <div className={`${styles['card']} ${styles['shadow']} ${styles['border-0']} ${styles['text-center']} ${styles['p-0']}`}>
                <div
                  className={`${styles['profile-cover']} ${styles['rounded-top']}`}
                  data-background={userData?.backgroundUrl}
                  style={{ background: `url(${userData?.backgroundUrl})` }}
                />
                <div className={`${styles['card-body']} ${styles['pb-5']}`}>
                  <img
                    src={userData?.avatarUrl}
                    className={`${styles['img']} ${styles['avatar-xl']} ${styles['rounded-circle']} ${styles['mx-auto']} ${styles['mt-n7']} ${styles['mb-4']}`}
                    alt="Neil Portrait"
                  />
                  <h4 className={`${styles['h4']} ${styles['h3']}`}>{userData?.fullName}</h4>
                  <h5 className={`${styles['h5']} ${styles['fw-normal']}`}>Senior Software Engineer</h5>
                  <p className={`${styles['p']} ${styles['text-gray']} ${styles['mb-4']}`}>New York, USA</p>
                  {/* <div
                    className={`${styles['btn']} ${styles['btn-sm']} ${styles['btn-gray-800']} ${styles['d-inline-flex']} ${styles['align-items-center']} ${styles['me-2']}`}
                  >
                    <i className={`${styles['icon-xs']} ${styles['me-1']} fa-solid fa-user-plus`}></i>
                    Connect
                  </div>
                  <div
                    className={`${styles['btn']} ${styles['btn-sm']} ${styles['btn-secondary']}`}
                  >
                    Send Message
                  </div> */}
                </div>
              </div>
            </div>
            <div className={`${styles['col-12']}`}>
              <div className={`${styles['card']} ${styles['card-body']} ${styles['border-0']} ${styles['shadow']} ${styles['mb-4']}`}>
                <h2 className={`${styles['h2']} ${styles['h5']} ${styles['mb-4']}`}>Select profile photo</h2>
                <div className={`${styles['d-flex']} ${styles['align-items-center']}`}>
                  <div className={`${styles['me-3']}`}>
                    {/* Avatar */}
                    <img
                      className={`${styles['img']} ${styles['rounded']} ${styles['avatar-xl']}`}
                      src={userData?.avatarUrl}
                      alt="change avatar"
                    />
                  </div>
                  <div className={`${styles['file-field']}`}>
                    <div className={`${styles['d-flex']} ${styles['justify-content-xl-center']} ${styles['ms-xl-3']}`}>
                      <div className={`${styles['d-flex']}`}>
                        <i className={`${styles['icon']} ${styles['text-gray-500']} ${styles['me-2']} fa-solid fa-paperclip-vertical fa-2xl`} ></i>
                        <input className={`${styles['input']}`} type="file"
                          accept="image/png, image/jpeg, image/jpg"
                          onChange={handleProfilePhotoUpload} />
                        <div className={`${styles['d-md-block']} ${styles['text-left']}`}>
                          <div className={`${styles['fw-normal']} ${styles['text-dark']} ${styles['mb-1']}`}>
                            Choose Image
                          </div>
                          <div className={`${styles['text-gray']} ${styles['small']}`}>
                            JPG, GIF or PNG. Max size of 800K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles['col-12']} ${styles['col-sm-6']} ${styles['col-xl-12']}`}>
              <div className={`${styles['card']} ${styles['card-body']} ${styles['border-0']} ${styles['shadow']} ${styles['mb-4']}`}>
                <h2 className={`${styles['h2']} ${styles['h5']} ${styles['mb-4']}`}>Select cover photo</h2>
                <div className={`${styles['d-flex']} ${styles['align-items-center']}`}>
                  <div className={`${styles['me-3']}`}>
                    {/* Avatar */}
                    <img
                      className={`${styles['img']} ${styles['rounded']} ${styles['avatar-xl']}`}
                      src={userData?.backgroundUrl}
                      alt="change cover"
                    />
                  </div>
                  <div className={`${styles['file-field']}`}>
                    <div className={`${styles['d-flex']} ${styles['justify-content-xl-center']} ${styles['ms-xl-3']}`}>
                      <div className={`${styles['d-flex']}`}>
                        <i className={`${styles['icon']} ${styles['text-gray-500']} ${styles['me-2']} fa-solid fa-paperclip-vertical fa-2xl`} ></i>
                        <input className={`${styles['input']}`} type="file"
                          accept="image/png, image/jpeg, image/jpg"
                          onChange={handleCoverPhotoUpload} />
                        <div className={`${styles['d-md-block']} ${styles['text-left']}`}>
                          <div className={`${styles['fw-normal']} ${styles['text-dark']} ${styles['mb-1']}`}>
                            Choose Image
                          </div>
                          <div className={`${styles['text-gray']} ${styles['small']}`}>
                            JPG, GIF or PNG. Max size of 800K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;