import React from 'react'
import IMG1 from "../../assets/2.jpg";
import IMG2 from "../../assets/2.jpg";
import IMG3 from "../../assets/3.jpg";
import Line from "../../assets/line.png"
import Line1 from "../../assets/line4.png"
import Line2 from "../../assets/line5.png"
import IMG4 from "../../assets/header.png";

import { PiListMagnifyingGlassFill } from "react-icons/pi";
import { MdHealthAndSafety } from "react-icons/md";
import { GiRoastChicken, GiChicken } from "react-icons/gi";



const SupplyChain = () => {
  return (
<div className='bg-emerald-700 text-white'>
        <section className="relative overflow-hidden ">
                        <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
                            <div className=" mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                <div className='  '>

                    <div className='flex flex-row-reverse justify-between'>
                        <div className='pr-16 text-3xl font-bold flex flex-col gap-4 font-saira text-white'>
                            <div className='flex gap-4 pb-4 ' >
                            <img src={Line} className='w-14 h-4 pt-2' />
                                <p className='font-saira text-lg'>
                                পণ্য এবং সেবা        
                                </p>
                        </div>
                            <span className=''>আমরা যা যা নিয়ে  </span>
                            <span>কাজ করি</span>
                         </div>
                            <img src={Line2} className='w-[800px]'/>
                        </div>
                    </div>



            <div className="relative mt-12 lg:mt-20">
                <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-26 lg:px-40">
                    <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48"
                        fill="none">
                        <path
                            d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                            stroke="#D4D4D8" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 12" />
                    </svg>
                </div>
                <div
                    className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-4 gap-x-12">
                    <div>
                        <div
                            className="flex items-center justify-center w-28 h-20 mx-auto transform hover:scale-125 transition-transform duration-300 ease-in-out">
                            <span className="  rounded-full p-2">
                            <PiListMagnifyingGlassFill className=' rounded-full bg-white p-2 text-green-950' size={60} />
                            </span>
                        </div>

                        <h3
                            className="mt-4 sm:mt-6 text-xl  leading-tight text-neutral-200 dark:text-white md:mt-10">
                            পর্যবেক্ষণাধীনে এবং এন্টিবায়োটিক ফ্রি  ডিম
                        </h3>
                       
                    </div>
                    <div>
                    <div
                            className="flex items-center justify-center w-28 h-20 mx-auto transform hover:scale-125 transition-transform duration-300 ease-in-out">
                            <span className="  rounded-full p-2">
                            <MdHealthAndSafety className=' rounded-full bg-white p-2 text-green-950' size={60} />
                            </span>
                        </div>

                        <h3
                            className="mt-4 sm:mt-6 text-xl  leading-tight text-neutral-200 dark:text-white md:mt-10">
                            এন্টিবায়োটিক ফ্রি, <br/>হেভি মেটাল ফ্রি মুরগি
                        </h3>
                        
                    </div>
                    <div>
                    <div
                            className="flex items-center justify-center w-28 h-20 mx-auto transform hover:scale-125 transition-transform duration-300 ease-in-out">
                            <span className="  rounded-full p-2">
                            <GiChicken className=' rounded-full bg-white p-2 text-green-950' size={60} />
                            </span>
                        </div>

                        <h3
                            className="mt-4 sm:mt-6 text-xl  leading-tight text-neutral-200 dark:text-white md:mt-10">
                            DOC - Day old Chicks (একদিন বয়সী মুরগির বাচ্চা)
                        </h3>
                       
                    </div>
                    <div >
                    <div
                            className="flex items-center justify-center w-28 h-20 mx-auto transform hover:scale-125 transition-transform duration-300 ease-in-out">
                            <span className="  rounded-full p-2">
                            <GiRoastChicken className=' rounded-full bg-white p-2 text-green-950' size={60} />
                            </span>
                        </div>

                        <h3
                            className="mt-4 sm:mt-6 text-xl  leading-tight text-neutral-200 dark:text-white md:mt-10">
                            পোল্ট্রি খাদ্য
                        </h3>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default SupplyChain