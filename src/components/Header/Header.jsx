import Button from '../Button/Button.jsx';

const Header = () => {
  return (
    <header className="w-full fixed z-40 backdrop-blur-sm shadow-header bg-header">
      <div className="container inner_container">
        <a href="/" className="transition-transform hover:scale-110">
          <img src="/icons/logo.png" alt="Emdula logo" />
        </a>
        <ul className="flex gap-9 [&_li]:py-8 [&]">
          <li>
            <a href="#products" className="menuLink">
              Products
            </a>
          </li>
          <li>
            <a href="#about" className="menuLink">
              About Us
            </a>
          </li>
          <li>
            <a href="#our-vision" className="menuLink">
              Data & Security
            </a>
          </li>
          <li>
            <a href="#teams" className="menuLink">
              Teams
            </a>
          </li>
          <li>
            <a href="#contact" className="menuLink">
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
