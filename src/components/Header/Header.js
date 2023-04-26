import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="" />
        <div className={styles.name}></div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
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
            <a link="#">About</a>
          </li>
          <li>
            <div className={styles.dropdown}>
              <p className={styles.dropbtn}>Contacts</p>
              <div className={styles.dropdownContent}>
                <ul>
                  <li>
                    <a href="#">Mail</a>
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
    </header>
  );
};

export default Header;
