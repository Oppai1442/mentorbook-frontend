// Settings.tsx
import React from 'react';
import styles from './Settings.module.css'

const Settings: React.FC = () => {


  return (
    <>
      <div className={`${styles['row']}`}>
        <div className={`${styles['col-12']} ${styles['col-xl-8']}`}>
          <div className={`${styles['card']} ${styles['card-body']} ${styles['border-0']} ${styles['shadow']} ${styles['mb-4']}`}>
            <h2 className={`${styles['h2']} ${styles['h5']} ${styles['mb-4']}`}>General information</h2>
            <form>
              <div className={`${styles['row']}`}>
                <div className={`${styles['col-md-6']} ${styles['mb-3']}`}>
                  <div>
                    <label className={`${styles['label']}`} htmlFor="first_name">First Name</label>
                    <input
                      className={`${styles['input']} ${styles['form-control']}`}
                      id="first_name"
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>
                <div className={`${styles['col-md-6']} ${styles['mb-3']}`}>
                  <div>
                    <label className={`${styles['label']}`} htmlFor="last_name">Last Name</label>
                    <input
                      className={`${styles['input']} ${styles['form-control']}`}
                      id="last_name"
                      type="text"
                      placeholder="Also your last name"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles['row']} ${styles['align-items-center']}`}>
                <div className={`${styles['col-md-6']} ${styles['mb-3']}`}>
                  <label className={`${styles['label']}`} htmlFor="birthday">Birthday</label>
                  <div className={`${styles['input-group']}`}>
                    <span className={`${styles['input-group-text']}`}>
                      <i className={`${styles['icon']} ${styles['icon-xs']} fa-solid fa-calendar-week`}></i>
                    </span>
                    <input
                      data-datepicker=""
                      className={`${styles['input']} ${styles['form-control']} ${styles['datepicker-input']}`}
                      id="birthday"
                      type="text"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
                <div className={`${styles['col-md-6']} ${styles['mb-3']}`}>
                  <label className={`${styles['label']}`} htmlFor="gender">Gender</label>
                  <select
                    className={`${styles['select']} ${styles['form-select']} ${styles['mb-0']}`}
                    id="gender"
                    aria-label="Gender select example"
                  >
                    <option>Gender</option>
                    <option value={1}>Female</option>
                    <option value={2}>Male</option>
                  </select>
                </div>
              </div>
              <div className={`${styles['row']}`}>
                <div className={`${styles['col-md-6']} ${styles['mb-3']}`}>
                  <div className={`${styles['form-group']}`}>
                    <label className={`${styles['label']}`} htmlFor="email">Email</label>
                    <input
                      className={`${styles['input']} ${styles['form-control']}`}
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>
                <div className={`${styles['col-md-6']} ${styles['mb-3']}`}>
                  <div className={`${styles['form-group']}`}>
                    <label className={`${styles['label']}`} htmlFor="phone">Phone</label>
                    <input
                      className={`${styles['input']} ${styles['form-control']}`}
                      id="phone"
                      type="number"
                      placeholder="+12-345 678 910"
                    />
                  </div>
                </div>
              </div>
              <h2 className={`${styles['h2']} ${styles['h5']} ${styles['my-4']}`}>Location</h2>
              <div className={`${styles['row']}`}>
                <div className={`${styles['col-sm-9']} ${styles['mb-3']}`}>
                  <div className={`${styles['form-group']}`}>
                    <label className={`${styles['label']}`} htmlFor="address">Address</label>
                    <input
                      className={`${styles['input']} ${styles['form-control']}`}
                      id="address"
                      type="text"
                      placeholder="Enter your home address"
                    />
                  </div>
                </div>
                <div className={`${styles['col-sm-3']} ${styles['mb-3']}`}>
                  <div className={`${styles['form-group']}`}>
                    <label className={`${styles['label']}`} htmlFor="number">Number</label>
                    <input
                      className={`${styles['input']} ${styles['form-control']}`}
                      id="number"
                      type="number"
                      placeholder="No."
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles['row']}`}>
                <div className={`${styles['col-sm-4']} ${styles['mb-3']}`}>
                  <div className={`${styles['form-group']}`}>
                    <label className={`${styles['label']}`} htmlFor="city">City</label>
                    <input
                      className={`${styles['input']} ${styles['form-control']}`}
                      id="city"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className={`${styles['col-sm-4']} ${styles['mb-3']}`}>
                  <label className={`${styles['label']}`} htmlFor="state">State</label>
                  <div
                    className={`${styles['choices']}`}
                    data-type="select-one"
                    role="combobox"
                    tabIndex={0}
                    aria-autocomplete="list"
                    aria-haspopup="true"
                    aria-expanded="false"
                    dir="ltr"
                  >
                    <div className={`${styles['choices__inner']}`}>
                      <select
                        className={`${styles['select']} ${styles['form-select']} ${styles['w-100']} ${styles['mb-0']} ${styles['choices__input']} ${styles['is-hidden']}`}
                        id="state"
                        name="state"
                        aria-label="State select example"
                        tabIndex={-1}
                        aria-hidden="true"
                        data-choice="active"
                      >
                        <option value="State">
                          State
                        </option>
                      </select>
                      <div className={`${styles['choices__list']} ${styles['choices__list--single']}`}>
                        <div
                          className={`${styles['choices__item']} ${styles['choices__item--selectable']}`}
                          data-item=""
                          data-id={1}
                          data-value="State"
                          aria-selected="true"
                        >
                          State
                        </div>
                      </div>
                    </div>


                    <div
                      className={`${styles['choices__list']} ${styles['choices__list--dropdown']}`}
                      aria-expanded="false"
                    >
                      <input
                        type="text"
                        className={`${styles['input']} ${styles['choices__input']} ${styles['choices__input--cloned']}`}
                        autoComplete="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        role="textbox"
                        aria-autocomplete="list"
                        placeholder=""
                      />
                      <div className={`${styles['choices__list']}`} dir="ltr" role="listbox">
                        <div
                          className={`${styles['choices__item']} ${styles['choices__item--choice']} ${styles['choices__item--selectable']} ${styles['is-highlighted']}`}
                          data-select-text="Press to select"
                          data-choice=""
                          data-id={1}
                          data-value="AL"
                          data-choice-selectable=""
                          id="choices--state-item-choice-1"
                          role="option"
                          aria-selected="true"
                        >
                          Alabama
                        </div>
                        <div
                          className={`${styles['choices__item']} ${styles['choices__item--choice']} ${styles['choices__item--selectable']}`}
                          data-select-text="Press to select"
                          data-choice=""
                          data-id={2}
                          data-value="AK"
                          data-choice-selectable=""
                          id="choices--state-item-choice-2"
                          role="option"
                        >
                          Alaska
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles['col-sm-4']}`}>
                  <div className={`${styles['form-group']}`}>
                    <label className={`${styles['label']}`} htmlFor="zip">ZIP</label>
                    <input
                      className={`${styles['input']} ${styles['form-control']}`}
                      id="zip"
                      type="tel"
                      placeholder="ZIP"
                    />
                  </div>
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
                  <h3 className={`${styles['h3']} ${styles['h6']} ${styles['mb-1']}`}>Company News</h3>
                  <p className={`${styles['p']} ${styles['small']} ${styles['pe-4']}`}>
                    Get Rocket news, announcements, and product updates
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
                  data-background="../assets/img/profile-cover.jpg"
                  style={{ background: 'url("../assets/img/profile-cover.jpg")' }}
                />
                <div className={`${styles['card-body']} ${styles['pb-5']}`}>
                  <img
                    src="./volt10_files/profile-picture-1.jpg"
                    className={`${styles['img']} ${styles['avatar-xl']} ${styles['rounded-circle']} ${styles['mx-auto']} ${styles['mt-n7']} ${styles['mb-4']}`}
                    alt="Neil Portrait"
                  />
                  <h4 className={`${styles['h4']} ${styles['h3']}`}>Neil Sims</h4>
                  <h5 className={`${styles['h5']} ${styles['fw-normal']}`}>Senior Software Engineer</h5>
                  <p className={`${styles['p']} ${styles['text-gray']} ${styles['mb-4']}`}>New York, USA</p>
                  <div
                    className={`${styles['btn']} ${styles['btn-sm']} ${styles['btn-gray-800']} ${styles['d-inline-flex']} ${styles['align-items-center']} ${styles['me-2']}`}
                  >
                    <i className={`${styles['icon-xs']} ${styles['me-1']} fa-solid fa-user-plus`}></i>
                    Connect
                  </div>
                  <div
                    className={`${styles['btn']} ${styles['btn-sm']} ${styles['btn-secondary']}`}
                  >
                    Send Message
                  </div>
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
                      src="./volt10_files/profile-picture-3.jpg"
                      alt="change avatar"
                    />
                  </div>
                  <div className={`${styles['file-field']}`}>
                    <div className={`${styles['d-flex']} ${styles['justify-content-xl-center']} ${styles['ms-xl-3']}`}>
                      <div className={`${styles['d-flex']}`}>
                      <i className={`${styles['icon']} ${styles['text-gray-500']} ${styles['me-2']} fa-solid fa-paperclip-vertical fa-2xl`} ></i>
                      <input className={`${styles['input']}`} type="file" />
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
                      src="./volt10_files/profile-cover.jpg"
                      alt="change cover"
                    />
                  </div>
                  <div className={`${styles['file-field']}`}>
                    <div className={`${styles['d-flex']} ${styles['justify-content-xl-center']} ${styles['ms-xl-3']}`}>
                      <div className={`${styles['d-flex']}`}>
                        <i className={`${styles['icon']} ${styles['text-gray-500']} ${styles['me-2']} fa-solid fa-paperclip-vertical fa-2xl`} ></i>
                        <input className={`${styles['input']}`} type="file" />
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
      <div
        className={`${styles['datepicker']} ${styles['datepicker-dropdown']} ${styles['datepicker-orient-bottom']} ${styles['datepicker-orient-left']}`}
        style={{ top: "228.333px", left: "341.215px" }}
      >
        <div className={`${styles['datepicker-picker']}`}>
          <div className={`${styles['datepicker-header']}`}>
            <div className={`${styles['datepicker-title']}`} style={{ display: "none" }} />
            <div className={`${styles['datepicker-controls']}`}>
              <button type="button" className={`${styles['button']} ${styles['btn']} ${styles['prev-btn']}`}>
                «
              </button>
              <button type="button" className={`${styles['button']} ${styles['btn']} ${styles['view-switch']}`}>
                November 2024
              </button>
              <button type="button" className={`${styles['button']} ${styles['btn']} ${styles['next-btn']}`}>
                »
              </button>
            </div>
          </div>
          <div className={`${styles['datepicker-main']}`}>
            <div className={`${styles['datepicker-view']}`}>
              <div className={`${styles['days']}`}>
                <div className={`${styles['days-of-week']}`}>
                  <span className={`${styles['dow']}`}>Su</span>
                  <span className={`${styles['dow']}`}>Mo</span>
                  <span className={`${styles['dow']}`}>Tu</span>
                  <span className={`${styles['dow']}`}>We</span>
                  <span className={`${styles['dow']}`}>Th</span>
                  <span className={`${styles['dow']}`}>Fr</span>
                  <span className={`${styles['dow']}`}>Sa</span>
                </div>
                <div className={`${styles['datepicker-grid']}`}>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['prev']}`}
                    data-date={1729962000000}
                  >
                    27
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['prev']}`}
                    data-date={1730048400000}
                  >
                    28
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['prev']}`}
                    data-date={1730134800000}
                  >
                    29
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['prev']}`}
                    data-date={1730221200000}
                  >
                    30
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['prev']}`}
                    data-date={1730307600000}
                  >
                    31
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['focused']}`}
                    data-date={1730394000000}
                  >
                    1
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1730480400000}>
                    2
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1730566800000}>
                    3
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1730653200000}>
                    4
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1730739600000}>
                    5
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1730826000000}>
                    6
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1730912400000}>
                    7
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1730998800000}>
                    8
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1731085200000}>
                    9
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1731171600000}>
                    10
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1731258000000}>
                    11
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1731344400000}>
                    12
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1731430800000}>
                    13
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1731517200000}>
                    14
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1731603600000}>
                    15
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1731690000000}>
                    16
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1731776400000}>
                    17
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1731862800000}>
                    18
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1731949200000}>
                    19
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1732035600000}>
                    20
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1732122000000}>
                    21
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1732208400000}>
                    22
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1732294800000}>
                    23
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1732381200000}>
                    24
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1732467600000}>
                    25
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1732554000000}>
                    26
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1732640400000}>
                    27
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1732726800000}>
                    28
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1732813200000}>
                    29
                  </span>
                  <span className={`${styles['datepicker-cell']} ${styles['day']}`} data-date={1732899600000}>
                    30
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['next']}`}
                    data-date={1732986000000}
                  >
                    1
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['next']}`}
                    data-date={1733072400000}
                  >
                    2
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['next']}`}
                    data-date={1733158800000}
                  >
                    3
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['next']}`}
                    data-date={1733245200000}
                  >
                    4
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['next']}`}
                    data-date={1733331600000}
                  >
                    5
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['next']}`}
                    data-date={1733418000000}
                  >
                    6
                  </span>
                  <span
                    className={`${styles['datepicker-cell']} ${styles['day']} ${styles['next']}`}
                    data-date={1733504400000}
                  >
                    7
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles['datepicker-footer']}`}>
            <div className={`${styles['datepicker-controls']}`}>
              <button
                type="button"
                className={`${styles['button']} ${styles['btn']} ${styles['today-btn']}`}
                style={{ display: "none" }}
              >
                Today
              </button>
              <button
                type="button"
                className={`${styles['button']} ${styles['btn']} ${styles['clear-btn']}`}
                style={{ display: "none" }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;