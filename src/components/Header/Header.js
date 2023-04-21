import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src="" />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a link="#">About</a>
          </li>
          <li>
            <div class="dropdown">
              <p class="dropbtn">Contacts</p>
              <div class="dropdown-content">
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
