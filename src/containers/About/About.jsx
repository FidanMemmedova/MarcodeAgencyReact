import React from "react";
import styles from "./About.module.css";
import commonStyles from "../../assets/styles/commonStyles.module.css";

const About = () => {
  return (
    <>
      <div id={styles.whoAreWe}>
        <div className={styles.bg}></div>
        <div className={commonStyles.cont}>
          <div className={styles.contRow}>
            <div className={styles.left}>
              <h2 className={styles.title}>Biz kimik?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <button className={[styles.btn,styles.openForm]}>
                Konsultasiya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 39 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.47803 19.9994C6.47803 19.105 7.20312 18.3799 8.09756 18.3799H30.7711C31.6655 18.3799 32.3906 19.105 32.3906 19.9994C32.3906 20.8939 31.6655 21.619 30.7711 21.619H8.09756C7.20312 21.619 6.47803 20.8939 6.47803 19.9994Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.2893 7.5183C18.9218 6.88583 19.9472 6.88583 20.5797 7.5183L31.9164 18.8551C32.5489 19.4875 32.5489 20.513 31.9164 21.1454L20.5797 32.4822C19.9472 33.1146 18.9218 33.1146 18.2893 32.4822C17.6568 31.8497 17.6568 30.8243 18.2893 30.1918L28.4809 20.0002L18.2893 9.80867C17.6568 9.1762 17.6568 8.15076 18.2893 7.5183Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className={styles.right}>
              <div className={styles.bigCircle}>
                <div className={styles.smallCircle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="67"
                    viewBox="0 0 24 87"
                    fill="none"
                    className={styles.arrow}
                  >
                    <path
                      d="M10.9393 86.0607C11.5251 86.6464 12.4749 86.6464 13.0607 86.0607L22.6066 76.5147C23.1924 75.9289 23.1924 74.9792 22.6066 74.3934C22.0208 73.8076 21.0711 73.8076 20.4853 74.3934L12 82.8787L3.51472 74.3934C2.92893 73.8076 1.97919 73.8076 1.3934 74.3934C0.807611 74.9792 0.807611 75.9289 1.3934 76.5147L10.9393 86.0607ZM10.5 0L10.5 85H13.5L13.5 0L10.5 0Z"
                      fill="#F15958"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.words}>
                <a href="#whoAreWe" className={styles.about}>
                  Haqqımızda
                </a>
                <a href="#services" className={styles.services}>
                  Xidmətlər
                </a>
                <a href="#portfolio" className={styles.portfolio}>
                  Portfolio
                </a>
                <a href="#ourTeam" className={styles.ourTeam}>
                  Komandamız
                </a>
                <a href="#digitalWorld" className={[styles.contact,styles.openForm]}>
                  Əlaqə
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
