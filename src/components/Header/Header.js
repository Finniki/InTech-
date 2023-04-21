import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a link="#">About</a>
          </li>
          <li>
            <div class={styles.dropdown}>
              <p class={styles.dropbtn}>Contacts</p>
              <div class={styles.dropdownContent}>
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
