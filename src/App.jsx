import { useEffect, useState } from "react"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"


function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleSidebar() {
    setShowSidebar(!showSidebar);
  }

  useEffect(() => {
    if(window.screen.width > 864){
      setShowSidebar(true);
    }
  }, [])

  return (
    <div className="relative bg-black-98 w-full min-h-[92.63rem] text-left text-[1.25rem] text-black-12 font-caption-regular">
      <Navbar handleSidebar={handleSidebar} />
      <Dashboard />
      <Sidebar showSidebar={showSidebar} handleSidebar={handleSidebar} />
    </div>
  )
}

<div className="flex bg-red-400 w-full flex-col items-center justify-center">
            
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
                      {/* <div className="flex flex-row items-start justify-start gap-[0.5rem]">
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
                      </div> */}
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

export default App
