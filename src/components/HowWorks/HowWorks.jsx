import Icon from '../Icon/Icon';

const HowWorks = () => {
  return (
    <section className="bg-secondary-1000" id="products">
      <div className="container">
        <h4 className="font-medium text-center text-5xl mb-10">
          How Emdula works across your operations
        </h4>
        <div className="flex flex-col gap-12">
          {/* cart - #1 */}
          <div className="w-full h-[425px] flex">
            <div className="bg-primary-200main w-[638px] h-[425px] py-12 px-20">
              <div className="bg-secondary-250 w-full h-full" />
            </div>
            <div className="p-12 bg-green-carts w-[656px] rounded-tr-xl rounded-br-xl">
              <h4 className="text-[32px] mb-4">
                AI-Powered Data Capture & Organization
              </h4>
              <p className="text-gray-200 mb-4">
                AI automatically processes calls, messages and notes, turning
                them into structured client profiles and actionable tasks —
                without manual typing
              </p>
              <ul className="flex flex-col gap-4 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
                <li>
                  <Icon name="checked" size={24} />
                  <p>Automatic speech-to-text for calls</p>
                </li>
                <li>
                  <Icon name="checked" size={24} />
                  <p>AI extraction of key client details</p>
                </li>
                <li>
                  <Icon name="checked" size={24} />
                  <p>Instant profile creation & updating</p>
                </li>
                <li>
                  <Icon name="checked" size={24} />
                  <p>Tasks and follow-ups generated automatically</p>
                </li>
              </ul>
            </div>
          </div>
          {/* cart - #2 */}
          <div className="w-full h-[425px] flex">
            <div className="p-12 bg-green-carts w-[656px] rounded-tl-xl rounded-bl-xl">
              <h4 className="text-[32px] mb-4">
                Intelligent Matching for Better Decisions
              </h4>
              <p className="text-gray-200 mb-4">
                The system analyzes client needs and instantly finds relevant
                offers without duplicates or noise, making every search fast and
                accurate
              </p>
              <ul className="flex flex-col gap-4 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
                <li>
                  <Icon name="checked" size={24} />
                  <p>AI-powered offer matching</p>
                </li>
                <li>
                  <Icon name="checked" size={24} />
                  <p>Duplicate elimination</p>
                </li>
                <li>
                  <Icon name="checked" size={24} />
                  <p>Relevant options only</p>
                </li>
                <li>
                  <Icon name="checked" size={24} />
                  <p>Works for properties and service businesses</p>
                </li>
              </ul>
            </div>
            <div className="bg-primary-200main w-[638px] h-[425px] py-12 px-20">
              <div className="bg-secondary-250 w-full h-full" />
            </div>
          </div>
          {/* cart - #3 */}
          <div className="w-full h-[425px] flex">
            <div className="bg-primary-200main w-[638px] h-[425px] py-12 px-20">
              <div className="bg-secondary-250 w-full h-full" />
            </div>
            <div className="p-12 bg-green-carts w-[656px] rounded-tr-xl rounded-br-xl">
              <h4 className="text-[32px] mb-4">
                A Clean, Connected CRM for Real Teams
              </h4>
              <p className="text-gray-200 mb-4">
                A single platform replaces scattered tools with modern, stable
                workflows designed for daily operations across different
                industries.
              </p>
              <ul className="flex flex-col gap-4 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
                <li>
                  <Icon name="checked" size={24} />
                  <p>Clear and intuitive interface</p>
                </li>
                <li>
                  <Icon name="checked" size={24} />
                  <p>Centralized client and asset management</p>
                </li>
                <li>
                  <Icon name="checked" size={24} />
                  <p>Smooth daily workflows</p>
                </li>
                <li>
                  <Icon name="checked" size={24} />
                  <p>Scalable foundation for growing teams</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowWorks;
