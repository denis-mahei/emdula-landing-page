import Icon from '../Icon/Icon';

const Teams = () => {
  return (
    <section id="teams">
      <div className="container">
        <h4 className="font-medium text-5xl text-secondary-1000 mb-10 text-center">
          Why teams trust Emdula
        </h4>
        <ul
          className="flex flex-wrap gap-6 
               [&_li]:w-[calc(33.333%-16px)] 
               [&_li]:py-7.5
               [&_li]:px-6
               [&_li]:bg-white-1000
               [&_li]:rounded-lg
               text-secondary-1000 
               [&_li]:flex [&_li]:flex-col
               [&_li_p:first-of-type]:font-medium 
               [&_li_p:first-of-type]:text-[19px] 
               [&_li_p:first-of-type]:leading-[1.37] 
               [&_li_p:first-of-type]:mt-5 
               [&_li_p:first-of-type]:mb-3
               [&_li_p:last-of-type]:text-[15px] 
               [&_li_p:last-of-type]:leading-6"
        >
          <li>
            <Icon name="teams" size={60} />
            <p>Built with industry teams</p>
            <p>
              Our systems are built with real operators, ensuring every feature
              solves a true operational need.
            </p>
          </li>
          <li>
            <Icon name="modern" size={60} />
            <p>Modern, scalable foundation</p>
            <p>
              We invest in stable, long-term architecture instead of patching
              legacy workflows or rushing features.
            </p>
          </li>
          <li>
            <Icon name="ai" size={60} />
            <p>Purposeful AI automation</p>
            <p>
              We use AI only where it removes manual work and creates real
              efficiency gains.
            </p>
          </li>
          <li>
            <Icon name="interface" size={60} />
            <p>Clear, intuitive interface</p>
            <p>
              The platform is clear, intuitive and easy to use even for
              non-technical staff.
            </p>
          </li>
          <li>
            <Icon name="adapts" size={60} />
            <p>Adapts to your workflows</p>
            <p>
              We integrate with your current tools so you can transition
              smoothly without disruption.
            </p>
          </li>
          <li>
            <Icon name="diagram" size={60} />
            <p>Continuous, real-world improvement</p>
            <p>
              We refine the system using real-world feedback, keeping your
              operations modern and aligned.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Teams;
