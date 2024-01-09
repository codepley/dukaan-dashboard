const OrderItem = () => {
  return (
    <div className="bg-black-100 border-solid border-b border-[rgba(0,0,0,0.1)] w-full h-[3rem] flex flex-row items-center overflow-scroll justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
      <div className="flex-1 bg-black-100 flex flex-col items-start justify-center text-primary-blue">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="flex flex-col items-start justify-center gap-[0.13rem]">
              <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.72rem] md:text-[0.88rem]">
                <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-black-100 flex flex-col items-start justify-center">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="flex flex-col items-start justify-center gap-[0.13rem]">
              <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.72rem] md:text-[0.88rem]">
                <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className=" ">7 July, 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-black-100 flex flex-col items-end justify-center text-right">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="flex flex-col items-start justify-center gap-[0.13rem]">
              <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.72rem] md:text-[0.88rem]">
                <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="relative leading-[1.25rem]">₹1,278.23</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-black-100 flex flex-col items-end justify-center text-right">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="flex flex-col items-start justify-center gap-[0.13rem]">
              <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.72rem] md:text-[0.88rem]">
                <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="relative leading-[1.25rem]">₹22</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
