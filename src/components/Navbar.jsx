/* eslint-disable react/prop-types */
import { IoMenu } from "react-icons/io5";
const Navbar = ({handleSidebar}) => {
  return (
    <div className="absolute top-[0rem] left-0 w-full md:left-[14rem] bg-black-100 box-border md:w-[76rem] flex flex-row items-center justify-start py-[0.75rem] px-[2rem] gap-[1rem] border-b-[1px] border-solid border-black-85 font-body-1-medium">
      <div onClick={handleSidebar} className='md:hidden cursor-pointer'> <IoMenu/> </div>
      <div className="flex-1 flex flex-col sm:flex-row items-center justify-start sm:gap-[1rem]">
        <div className="overflow-hidden flex flex-row items-center justify-start">
          <div className="relative leading-[1.75rem] font-medium text-[0.7rem] md:text-[0.9375rem]">Payments</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0.38rem] text-[0.5rem] md:text-[0.75rem] text-black-30">
          <img
            className="relative w-[0.88rem] h-[0.88rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/question.svg"
          />
          <div className="relative leading-[1rem]">How it works</div>
        </div>
      </div>

      <div className="self-stretch rounded-md bg-black-95 w-[10rem] sm:w-[25rem] flex flex-row items-center justify-start py-[0.56rem] px-[1rem] box-border gap-[0.5rem] text-[0.94rem] text-black-50">
        <img
          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/search.svg"
        />
        <div className="relative text-nowrap overflow-hidden leading-[1.38rem]">
          Search features, tutorials, etc.
        </div>
      </div>

      <div className="flex-1 flex flex-row items-start justify-end">
        <div className="flex flex-row items-start justify-start gap-[0.75rem]">
          <div className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0 object-cover bg-black-90 rounded-full flex justify-center items-center">
          <img
            className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/menu1.svg"
          />
          </div>
          <img
            className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/menu2.svg"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
