import Accordion from '../Accordion/Accordion';
import Icon from '../Icon/Icon';

const FAQ = () => {
  
  return (
    <section className="bg-secondary-1000">
      <div className="container">
        <h4 className="font-medium text-center text-5xl leading-14 text-white-1000 mb-10">
          Frequently Asked Questions
        </h4>
        <div className='flex flex-col'>
            <Accordion title="What is Emdula?" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam!"/>
            <Accordion title="What is RealECon?" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam!"/>
            <Accordion title="Who are your solutions for?" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam!"/>
            <Accordion title="Do your systems integrate with our existing tools?" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam!"/>
            <Accordion title="How do you use AI inside your products?" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam!"/>
            <Accordion title="How can we get in touch with your team?" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam!"/>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
