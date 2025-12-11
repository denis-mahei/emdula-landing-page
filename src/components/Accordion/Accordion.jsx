import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="border-b border-b-white-250">
      <div
        onClick={toggleOpen}
        className="flex items-center justify-between py-6"
      >
        <h4 className="font-medium ">{title}</h4>
        {!isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      {isOpen && <p className="text-light-gray mb-6">{content}</p>}
    </div>
  );
};

export default Accordion;
