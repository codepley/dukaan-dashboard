/* eslint-disable react/prop-types */
const Sidebar = ({showSidebar, handleSidebar}) => {
  return (
    <div className={`absolute md:${showSidebar ? 'flex' : 'flex'} ${showSidebar ? 'flex' : 'hidden'} top-[0rem] left-[0rem] h-[105rem] md:h-full w-full flex-col items-start justify-start text-[0.94rem] text-black-100 font-body-1-medium`}>
      <div className="flex-1 bg-secondary-navbar w-full md:w-[14rem] flex flex-col items-center justify-start py-[1rem] px-[0.63rem] box-border gap-[1rem]">
        <div className="flex-1 flex flex-col items-center justify-start gap-[1.5rem]">
        <div onClick={handleSidebar} className="md:hidden cursor-pointer text-lg">Close</div>
          <div className="w-[12rem] flex flex-row items-center justify-start relative gap-[0.75rem]">
            <div className="relative rounded bg-black-100 w-[2.5rem] h-[2.5rem] z-[0]" />
            <div className="flex-1 flex flex-col items-start justify-center gap-[0.25rem] z-[1]">
              <div className="self-stretch relative leading-[1.38rem] font-medium">
                Nishyan
              </div>
              <div className="self-stretch relative text-[0.81rem] [text-decoration:underline] leading-[1rem] opacity-[0.8]">
                Visit store
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[0.03rem] left-[0.03rem] rounded w-[2.44rem] h-[2.44rem] object-cover z-[2]"
              alt=""
              src="/sidebar/image.png"
            />
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover z-[3]"
              alt=""
              src="/sidebar/down.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem] text-[0.88rem]">
            <div className="rounded w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover opacity-[0.8]"
                alt=""
                src="/sidebar/home.svg"
              />
              <div className="relative leading-[1.25rem] font-medium opacity-[0.8]">
                Home
              </div>
            </div>
            <div className="rounded w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover opacity-[0.8]"
                alt=""
                src="/sidebar/orders.svg"
              />
              <div className="relative leading-[1.25rem] font-medium opacity-[0.8]">
                Orders
              </div>
            </div>
            <div className="rounded w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover opacity-[0.8]"
                alt=""
                src="/sidebar/products.svg"
              />
              <div className="relative leading-[1.25rem] font-medium opacity-[0.8]">
                Products
              </div>
            </div>
            <div className="rounded w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover opacity-[0.8]"
                alt=""
                src="/sidebar/delivery.svg"
              />
              <div className="relative leading-[1.25rem] font-medium opacity-[0.8]">
                Delivery
              </div>
            </div>
            <div className="rounded w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover opacity-[0.8]"
                alt=""
                src="/sidebar/marketing.svg"
              />
              <div className="relative leading-[1.25rem] font-medium opacity-[0.8]">
                Marketing
              </div>
            </div>
            <div className="rounded w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover opacity-[0.8]"
                alt=""
                src="/sidebar/analytics.svg"
              />
              <div className="relative leading-[1.25rem] font-medium opacity-[0.8]">
                Analytics
              </div>
            </div>
            <div className="rounded bg-gray w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/sidebar/payments.svg"
              />
              <div className="relative leading-[1.25rem] font-medium">
                Payments
              </div>
            </div>
            <div className="rounded w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover opacity-[0.8]"
                alt=""
                src="/sidebar/tools.svg"
              />
              <div className="relative leading-[1.25rem] font-medium opacity-[0.8]">
                Tools
              </div>
            </div>
            <div className="rounded w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover opacity-[0.8]"
                alt=""
                src="/sidebar/discounts.svg"
              />
              <div className="relative leading-[1.25rem] font-medium opacity-[0.8]">
                Discounts
              </div>
            </div>
            <div className="rounded w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover opacity-[0.8]"
                alt=""
                src="/sidebar/audience.svg"
              />
              <div className="relative leading-[1.25rem] font-medium opacity-[0.8]">
                Audience
              </div>
            </div>
            
            
            <div className="rounded w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover opacity-[0.8]"
                alt=""
                src="/sidebar/appearance.svg"
              />
              <div className="relative leading-[1.25rem] font-medium opacity-[0.8]">
                Appearance
              </div>
            </div>
            <div className="rounded w-[13rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.75rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover opacity-[0.8]"
                alt=""
                src="/sidebar/plugins.svg"
              />
              <div className="relative leading-[1.25rem] font-medium opacity-[0.8]">
                Plugins
              </div>
            </div>
          </div>
        </div>
        <div className="rounded bg-darkslategray w-[12rem] flex flex-col items-start justify-start py-[0.38rem] px-[0.75rem] box-border text-[0.81rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="rounded bg-gray flex flex-row items-start justify-start p-[0.38rem]">
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/sidebar/availableCredit.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.13rem]">
              <div className="relative leading-[1rem] opacity-[0.8]">
                Available credits
              </div>
              <div className="relative text-[1rem] leading-[1.5rem] font-medium">
                222.10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
