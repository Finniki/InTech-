import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navList}>
      <div className={styles.logo}>
        <img src="" />
        <h2 className={styles.name}></h2>
      </div>
      <ul className={styles.navLinks}>
        <div className={styles.dropdown}>
          <p className={styles.dropbtn}>CATEGORIES</p>
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
                    <i class="fa-sharp fa-light fa-envelope-open"></i>
                    Mail
                  </a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
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