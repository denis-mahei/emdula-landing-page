import css from "./HowWorks.module.css";
import Icon from "../Icon/Icon";

const HowWorks = () => {
  return (
    <section className={css.howWorksSection}>
      <div className="container">
        <h4 className={css.title}>How Emdula works across your operations</h4>
        <ul className={css.cartList}>
          <li>
            <div className={css.cartItemGreen}>
              <div className={css.cartItemGreenInner} />
            </div>
            <div className={css.cartItemText}>
              <h5>AI-Powered Data Capture & Organization</h5>
              <p>
                AI automatically processes calls, messages and notes, turning
                them into structured client profiles and actionable tasks —
                without manual typing
              </p>
              <ul className={css.howWorksList}>
                <li className={css.howWorksListItem}>
                  <Icon name='checked'/>
                  <p>Automatic speech-to-text for calls</p>
                </li>
                <ul>
                  <li></li>
                </ul>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default HowWorks;
