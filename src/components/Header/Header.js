import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import HeroComponent from "../HeroComponent/HeroComponent";

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <HeroComponent />
    </header>
  );
};

export default Header;
