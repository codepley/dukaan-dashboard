const Dashboard = () => {
  return (
    <div className="absolute top-[6rem] left-[16rem] w-[72rem] flex flex-col items-start justify-start gap-[2rem] font-body-1-medium">
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative leading-[1.75rem] font-medium">
              Overview
            </div>
            <div className="flex flex-row items-center justify-start text-[1rem] text-black-30">
              <div className="relative w-[8.56rem] h-[2.25rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded bg-black-100 box-border w-[8.56rem] h-[2.25rem] border-[1px] border-solid border-black-85" />
                <div className="absolute top-[0.38rem] left-[0.88rem] leading-[1.5rem]">
                  Last Month
                </div>
                <img
                  className="absolute top-[0.63rem] left-[6.69rem] w-[1rem] h-[1rem] overflow-hidden object-cover"
                  alt=""
                  src="/lastMonthArrow.svg"
                />
              </div>
            </div>
          </div>
          <div className="hidden flex-row items-start justify-start gap-[0.75rem] text-[0.88rem] text-black-100 font-body-1-medium">
            <div className="rounded-21xl bg-primary-blue flex flex-row items-center justify-start py-[0.38rem] px-[1rem] gap-[0.38rem]">
              <div className="relative leading-[1.25rem] font-medium">
                Razorpay
              </div>
            </div>
            <div className="rounded-21xl bg-black-90 flex flex-row items-center justify-start py-[0.38rem] px-[1rem] gap-[0.63rem] text-black-50">
              <div className="relative leading-[1.25rem] font-medium">{`COD orders (Dukaan Delivery) `}</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] text-[1rem] text-black-30">
          <div className="flex-1 flex flex-row items-center justify-center">
            <div className="flex-1 rounded-spacing-spacing-04 bg-black-100 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] flex flex-col items-start justify-start p-[1.25rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <div className="relative leading-[1.5rem]">Online orders</div>
                </div>
                <div className="relative text-[2rem] leading-[2.38rem] font-medium text-black-12">
                  231
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-spacing-spacing-04 bg-black-100 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] flex flex-col items-start justify-start p-[1.25rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <div className="relative leading-[1.5rem]">Amount received</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[1rem] text-[2rem] text-black-12">
                <div className="flex-1 flex flex-row items-center justify-between">
                  <div className="relative leading-[2.38rem] font-medium">
                    ₹23,92,312.19
                  </div>
                  <div className="hidden flex-row items-start justify-start text-[0.88rem] text-primary-blue">
                    <div className="relative [text-decoration:underline] leading-[1.25rem] font-medium">
                      View 23 orders
                    </div>
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start text-[1rem] text-primary-blue">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative [text-decoration:underline] leading-[1.5rem] font-medium">
                      3,231 orders
                    </div>
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/outlined--chevron-right@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-[1.25rem]">
        <div className="relative leading-[1.75rem] font-medium">
          Transactions | This Month
        </div>

        <div className="rounded-lg bg-black-100 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] overflow-hidden flex flex-col items-end justify-start pt-[0.75rem] px-[0.75rem] pb-[1.5rem] text-[0.75rem]">

          <div className="flex flex-col items-end justify-start gap-[0.75rem] text-[0.88rem] text-black-60">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="w-[15.5rem] flex flex-row items-start justify-start">
                <div className="flex-1 rounded bg-black-100 flex flex-row items-center justify-start py-[0.63rem] px-[1rem] gap-[0.5rem] border-[1px] border-solid border-black-85">
                  <img
                    className="relative w-[0.88rem] h-[0.88rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/search.svg"
                  />
                  <div className="flex-1 relative leading-[1.25rem]">
                    Search by order ID...
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.75rem] text-[1rem] text-black-30 font-body-1-medium">
                <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                  <div className="flex flex-row items-center justify-end gap-[0.75rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                      <div className="rounded bg-black-100 flex flex-row items-center justify-start py-[0.38rem] px-[0.75rem] gap-[0.38rem] border-[1px] border-solid border-black-85">
                        <div className="relative leading-[1.5rem]">Sort</div>
                        <img
                          className="relative w-[1rem] h-[1rem] object-cover"
                          alt=""
                          src="/sort.svg"
                        />
                      </div>
                    </div>
                    <div className="relative w-[2.25rem] h-[2.25rem]">
                      <div className="absolute top-[0rem] right-[0rem] rounded box-border w-[2.25rem] h-[2.25rem] border-[1px] border-solid border-black-85" />
                      <img
                        className="absolute top-[0.5rem] right-[0.5rem] w-[1.25rem] h-[1.25rem] object-cover"
                        alt=""
                        src="/download.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded bg-black-95 w-[70.5rem] flex flex-row items-center justify-start py-[0.63rem] px-[0.75rem] box-border gap-[2.5rem] text-[0.75rem] text-black-30">
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-center">
                <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                      <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                          <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                            <div className="relative leading-[1.25rem] font-medium">
                              Order ID
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 overflow-hidden flex flex-col items-start justify-center">
                <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                      <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                          <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                            <div className="relative leading-[1.25rem] font-medium">
                              Order date
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="relative w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/triangleicon@2x.png"
                  />
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-col items-end justify-center text-right">
                <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                      <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                          <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                            <div className="relative leading-[1.25rem] font-medium">
                              Order amount
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-col items-end justify-center text-right">
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.25rem] mt-[-0.06rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                        <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                          <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                            <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                              <div className="relative leading-[1.25rem] font-medium">
                                Transaction fees
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="relative w-[0.88rem] h-[0.88rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/info.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>
          <div className="bg-black-100 border-solid border-[rgba(0,0,0,0.1)] border-b w-[70.5rem] h-[3rem] flex flex-row items-center justify-start py-[0.88rem] px-[0.75rem] box-border relative gap-[2.5rem]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="relative leading-[1.25rem] font-medium">{`#281209 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>

              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className=" ">
                            7 July, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.5rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">
                            ₹1,278.23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[1rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                    <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.25rem]">₹22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[5.63rem] opacity-[0] mt-[-0.06rem]">
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                  <div className="relative rounded-[50%] w-[0rem] h-[0rem]" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[0.75rem] bottom-[-0.06rem] left-[0.75rem] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
          </div>

          

          <div className="flex w-full flex-col items-center justify-center">
            
            <div className="flex flex-col items-center justify-center text-center text-[0.88rem] text-black-30 w-full font-body-1-medium mt-[1.5rem]">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-center justify-start gap-[1.5rem]">
                      <div className="rounded bg-black-100 flex flex-row items-center justify-center py-[0.38rem] pr-[0.75rem] pl-[0.38rem] gap-[0.38rem] border-[1px] border-solid border-black-85">
                        <img
                          className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 object-contain"
                          alt=""
                          src="/previous.svg"
                        />
                        <div className="flex flex-row items-start justify-start">
                          <div className="relative leading-[1.25rem] font-medium">
                            Previous
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                        <div className="rounded w-[1.75rem] h-[1.75rem] flex flex-col items-center justify-center py-[0.13rem] px-[0rem] box-border">
                          <div className="self-stretch relative leading-[1.25rem]">
                            1
                          </div>
                        </div>
                        <div className="rounded w-[1.75rem] h-[1.75rem] flex flex-col items-center justify-center py-[0.13rem] px-[0rem] box-border">
                          <div className="self-stretch relative leading-[1.25rem]">
                            ...
                          </div>
                        </div>
                        <div className="rounded bg-primary-blue w-[1.75rem] h-[1.75rem] flex flex-col items-center justify-center py-[0.38rem] px-[0.5rem] box-border text-black-100">
                          <div className="relative leading-[1.25rem] font-medium">
                            10
                          </div>
                        </div>
                        <div className="rounded w-[1.75rem] h-[1.75rem] flex flex-col items-center justify-center py-[0.13rem] px-[0rem] box-border">
                          <div className="self-stretch relative leading-[1.25rem]">
                            11
                          </div>
                        </div>
                        <div className="rounded w-[1.75rem] h-[1.75rem] flex flex-col items-center justify-center py-[0.13rem] px-[0rem] box-border">
                          <div className="self-stretch relative leading-[1.25rem]">
                            12
                          </div>
                        </div>
                        <div className="rounded w-[1.75rem] h-[1.75rem] flex flex-col items-center justify-center py-[0.13rem] px-[0rem] box-border">
                          <div className="self-stretch relative leading-[1.25rem]">
                            13
                          </div>
                        </div>
                        <div className="rounded w-[1.75rem] h-[1.75rem] flex flex-col items-center justify-center py-[0.13rem] px-[0rem] box-border">
                          <div className="self-stretch relative leading-[1.25rem]">
                            14
                          </div>
                        </div>
                        <div className="rounded w-[1.75rem] h-[1.75rem] flex flex-col items-center justify-center py-[0.13rem] px-[0rem] box-border">
                          <div className="self-stretch relative leading-[1.25rem]">
                            15
                          </div>
                        </div>
                        <div className="rounded w-[1.75rem] h-[1.75rem] flex flex-col items-center justify-center py-[0.13rem] px-[0rem] box-border">
                          <div className="self-stretch relative leading-[1.25rem]">
                            16
                          </div>
                        </div>
                        <div className="rounded w-[1.75rem] h-[1.75rem] flex flex-col items-center justify-center py-[0.13rem] px-[0rem] box-border">
                          <div className="self-stretch relative leading-[1.25rem]">
                            17
                          </div>
                        </div>
                        <div className="rounded w-[1.75rem] h-[1.75rem] flex flex-col items-center justify-center py-[0.13rem] px-[0rem] box-border">
                          <div className="self-stretch relative leading-[1.25rem]">
                            18
                          </div>
                        </div>
                      </div>
                      <div className="rounded bg-black-100 flex flex-row items-center justify-center py-[0.38rem] pr-[0.38rem] pl-[0.75rem] gap-[0.38rem] border-[1px] border-solid border-black-85">
                        <div className="flex flex-row items-start justify-start">
                          <div className="relative leading-[1.25rem] font-medium">
                            Next
                          </div>
                        </div>
                        <img
                          className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/next.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
