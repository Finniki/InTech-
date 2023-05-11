import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <nav className={styles.navList}>
      <div className={styles.logo}>
        <img src="" />
        <h2 className={styles.name}></h2>
      </div>
      <ul className={styles.navLinks}>
        <div className={styles.dropdown}>
          <p className={styles.dropbtn}>SERIES</p>
          <div className={styles.dropdownContent}>
            <ul>
              <li>
                <a href="#">New to tech</a>
              </li>
              <li>
                <a href="#">Reveal</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
        </div>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <div className={styles.dropdown}>
            <p className={styles.dropbtn}>Contacts</p>
            <div className={styles.dropdownContent}>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} /> Mail
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
