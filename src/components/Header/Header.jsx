import Button from "../Button/Button.jsx";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container inner_container">
        <div>
          <img src="../../../public/icons/logo.png" alt="logo" />
        </div>
        <ul className={css.menuList}>
          <li className={css.menuListItem}>
            <a href="#" className={css.menuLink}>
              Products
            </a>
          </li>
          <li className={css.menuListItem}>
            <a href="#" className={css.menuLink}>
              About Us
            </a>
          </li>
          <li className={css.menuListItem}>
            <a href="#" className={css.menuLink}>
              Data & Security
            </a>
          </li>
          <li className={css.menuListItem}>
            <a href="#" className={css.menuLink}>
              Teams
            </a>
          </li>
          <li className={css.menuListItem}>
            <a href="#" className={css.menuLink}>
              Contact
            </a>
          </li>
        </ul>
        <Button variant="primary" size="normal">
          Get started
        </Button>
      </div>
    </header>
  );
};
export default Header;
