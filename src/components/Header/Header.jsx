import Button from "../Button/Button.jsx";

const Header = () => {
  return (
    <header className='w-full absolute backdrop-blur-sm shadow-header bg-header'>
      <div className="container inner_container">
        <div>
          <img src="/icons/logo.png" alt="logo" />
        </div>
        <ul className='flex gap-9 [&_li]:py-8 [&]'>
          <li>
            <a href="#" className='menuLink'>
              Products
            </a>
          </li>
          <li>
            <a href="#" className='menuLink'>
              About Us
            </a>
          </li>
          <li>
            <a href="#" className='menuLink'>
              Data & Security
            </a>
          </li>
          <li>
            <a href="#" className='menuLink'>
              Teams
            </a>
          </li>
          <li>
            <a href="#" className='menuLink'>
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
