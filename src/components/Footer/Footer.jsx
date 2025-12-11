import Button from '../Button/Button.jsx';

const Footer = () => {
  return (
    <section className="bg-secondary-1000 pb-8" id="contact">
      <div className="container">
        <div className="flex justify-between items-center pb-12">
          <h6 className="text-5xl font-medium max-w-[798px] leading-14">
            Let’s talk about your operations — and how AI can improve them
          </h6>
          <Button variant="primary" size="normal">
            Book a conversation
          </Button>
        </div>
        <div className="flex justify-between border-b border-t border-white-250 py-12">
          <div className="max-w-[413px]">
            <img src="/icons/logo-emdula.png" alt="logo-emdula" />
            <p className="text-[18px] text-gray-200 leading-7 mt-6 mb-10">
              We are a team of engineers and product builders creating
              AI-powered CRM and workflow systems for real-world businesses.
            </p>
            <address className="not-italic">
              <p className="font-semibold text-[20px] leading-6 text-white-1000 mb-1.5">
                Contact us
              </p>
              <a
                className="text-gray-200  hover:text-white-1000"
                href="mailto:support@emdula.com"
              >
                support@emdula.com
              </a>
            </address>
          </div>
          <div className="flex gap-35 [&_ul>li>p]:mb-6 [&_ul>li>p]:text-[20px] [&_ul>li>p]:leading-6 [&_ul>li>p]:font-semibold  [&_ul>li:not(:last-child)]:mb-4">
            <ul>
              <li>
                <p>Menu</p>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footerLink" className="footerLink">
                  RealIECon
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Contact
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <p>Solutions</p>
              </li>
              <li>
                <a href="#" className="footerLink">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Terms of Service
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <p>Social Media</p>
              </li>
              <li>
                <a href="https://www.linkedin.com/" className="footerLink">
                  Linked In
                </a>
              </li>
              <li>
                <a href="https://www.x.com/" className="footerLink">
                  X
                </a>
              </li>
              <li>
                <a href="https://www.gitlab.com/" className="footerLink">
                  GitLab
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="pt-12 text-gray-200 text-center text-[18px] leading-7 ">
          Copyright © 2025 Emdula. All rights reserved.
        </p>
      </div>
    </section>
  );
};
export default Footer;
