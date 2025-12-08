import css from "./OurVision.module.css";
import Icon from "../Icon/Icon.jsx";
const OurVision = () => {
  return (
    <section>
      <div className="container">
        <div className={css.innerSection}>
          <h3 className={css.title}>Our vision and what we build</h3>
          <ul className={css.list}>
            <li className={css.listItem}>
              <div className={css.iconBg}>
                <Icon name="diagram-s" />
              </div>
              <h4 className={css.listTitle}>A smarter way to run operations</h4>
              <p className={css.listText}>
                We design modern, AI-ready systems that simplify daily processes
                and remove the friction created by outdated tools.
              </p>
            </li>
            <li className={css.listItem}>
              <div className={css.iconBg}>
                <Icon name="oper-platform-s" />
              </div>
              <h4 className={css.listTitle}>Modern operations platform</h4>
              <p className={css.listText}>
                Our platform connects clients, assets and workflows in one
                place. It keeps operations organized and easy to manage
              </p>
            </li>
            <li className={css.listItem}>
              <div className={css.iconBg}>
                <Icon name="smart-crm-s" />
              </div>
              <h4 className={css.listTitle}>Smart CRM for service teams</h4>
              <p className={css.listText}>
                We create CRM tools for salons and service companies.
                Scheduling, clients and daily tasks in one system.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default OurVision;
