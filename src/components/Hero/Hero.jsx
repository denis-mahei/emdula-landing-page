import Button from "../Button/Button.jsx";
import Icon from "../Icon/Icon.jsx";

const Hero = () => {
  return (
    <section className='bg-linear-[180deg] from-grad-dark to-grad-light pt-41 pb-16.4'>
      <div className="container">
        <div className='max-w-[860px] mx-auto mb-20 text-center'>
          <div>
            <h1 className="font-bold text-7xl text-center text-white mb-6">
              <span className="text-primary-200main">Intelligent systems</span>
              <br />
              for real-world businesses
            </h1>
            <p className='text-[18px] leading-[1.55] text-center text-gray-200 mb-14'>
              A new generation of AI-powered software for companies that are
              ready to move forward
            </p>
          </div>
          <div className="flex justify-center gap-14">
            <Button variant="primary" size="large">
              Get started
            </Button>
            <Button variant="secondary" size="large">
              Explore RealECon
            </Button>
          </div>
        </div>
        <div className='rounded-[100px_100px_20px_20px] p-7 bg-primary-200main'>
          <h2 className='font-semibold text-[32px] text-center mb-4.5 text-white'>
            Benefit of improving your business
          </h2>
          <ul className='flex gap-6'>
            <li className='flex flex-col justify-center items-center w-[290px] py-2.5'>
              <div className='w-26 h-26 bg-white-500 rounded-full flex justify-center items-center mb-2.5'>
                <Icon name="workflow" />
              </div>
              <p className="text-[24px] text-white-1000">Unified Workflows</p>
            </li>
            <li className='flex flex-col justify-center items-center w-[290px] py-2.5'>
              <div className='w-26 h-26 bg-white-500 rounded-full flex justify-center items-center mb-2.5'>
                <Icon name="automation" />
              </div>
              <p className="text-[24px] text-white-1000">Intelligent Automation</p>
            </li>
            <li className='flex flex-col justify-center items-center w-[290px] py-2.5'>
              <div className='w-26 h-26 bg-white-500 rounded-full flex justify-center items-center mb-2.5'>
                <Icon name="data" />
              </div>
              <p className="text-[24px] text-white-1000">Structured Data</p>
            </li>
            <li className='flex flex-col justify-center items-center w-[290px] py-2.5'>
              <div className='w-26 h-26 bg-white-500 rounded-full flex justify-center items-center mb-2.5'>
                <Icon name="time" />
              </div>
              <p className="text-[24px] text-white-1000">Real-Time Efficiency</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Hero;
