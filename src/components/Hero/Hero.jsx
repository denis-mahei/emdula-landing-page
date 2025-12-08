import css from "./Hero.module.css";
import Button from "../Button/Button.jsx";
import Icon from "../Icon/Icon.jsx";

const Hero = () => {
  return (
    <section className={css.heroSection}>
      <div className="container">
        <div className={css.heroColumn}>
          <div className={css.heroText}>
            <h1 className={css.heroTitle}>
              <span>Intelligent systems</span>
              <br />
              for real-world businesses
            </h1>
            <p className={css.heroSubtitle}>
              A new generation of AI-powered software for companies that are
              ready to move forward
            </p>
          </div>
          <div className={css.heroButtons}>
            <Button variant="primary" size="large">
              Get started
            </Button>
            <Button variant="secondary" size="large">
              Explore RealECon
            </Button>
          </div>
        </div>
        <div className={css.heroBanner}>
          <h2 className={css.heroBannerTitle}>
            Benefit of improving your business
          </h2>
          <ul className={css.bannerList}>
            <li className={css.bannerItem}>
              <div className={css.iconBg}>
                <Icon name="workflow" />
              </div>
              <p>Unified Workflows</p>
            </li>
            <li className={css.bannerItem}>
              <div className={css.iconBg}>
                <Icon name="automation" />
              </div>
              <p>Intelligent Automation</p>
            </li>
            <li className={css.bannerItem}>
              <div className={css.iconBg}>
                <Icon name="data" />
              </div>
              <p>Structured Data</p>
            </li>
            <li className={css.bannerItem}>
              <div className={css.iconBg}>
                <Icon name="time" />
              </div>
              <p>Real-Time Efficiency</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Hero;
