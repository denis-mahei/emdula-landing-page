import css from "./OurVision.module.css";
import Icon from "../Icon/Icon.jsx";
const OurVision = () => {
  return (
    <section className="bg-light-background">
      <div className="container">
        <div className='rounded-xl bg-white-1000 p-10 shadow-[0_0_0_0_rgba(0,0,0,0),0_0_0_0_rgba(0,0,0,0),0_1px_2px_0_rgba(0,0,0,0.05)]'>
          <h3 className='text-center text-secondary-1000 text-5xl font-medium mb-17'>Our vision and what we build</h3>
          <ul className='flex gap-14 [&_li]:bg-green-small-carts [&_li]:rounded-xl [&_li]:p-[34px_24px_24px]'>
            <li>
              <div className={css.iconBg}>
                <Icon name="diagram-s" />
              </div>
              <h3 className='font-semibold text-[20px] text-secondary-1000'>A smarter way to run operations</h3>
              <p className='text-gray-400 leading-[1.5]'>
                We design modern, AI-ready systems that simplify daily processes
                and remove the friction created by outdated tools.
              </p>
            </li>
            <li>
              <div className={css.iconBg}>
                <Icon name="oper-platform-s" />
              </div>
              <h3 className='font-semibold text-[20px] text-secondary-1000'>Modern operations platform</h3>
              <p className='text-gray-400 leading-[1.5]'>
                Our platform connects clients, assets and workflows in one
                place. It keeps operations organized and easy to manage
              </p>
            </li>
            <li>
              <div className={css.iconBg}>
                <Icon name="smart-crm-s" />
              </div>
              <h3 className='font-semibold text-[20px] text-secondary-1000'>Smart CRM for service teams</h3>
              <p className='text-gray-400 leading-[1.5]'>
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
