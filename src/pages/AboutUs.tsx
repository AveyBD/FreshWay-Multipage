import React from 'react'
import Img1 from "../assets/002.jpg"

const AboutUs = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex justify-center items-center lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12">
                    <h2 className="w-full font-bold text-green-700 lg:text-3xl text-4xl lg:leading-10 leading-9">আমাদের সম্পর্কে</h2>
                    <p className="font-normal text-base  px-4 leading-6 text-gray-600 mt-6">ফ্রেশওয়ে বর্তমানে বাংলাদেশে, কৃষি প্রক্রিয়া, পোল্ট্রি প্রযুক্তি, গরুর মাংস প্রক্রিয়াকরণ, স্টোরেজ সিস্টেম, প্যাকেজিং এবং পরিবহনের জন্য একটি ইএসজি (পরিবেশ, সামাজিক, এবং শাসন) অনুগত কৃষি পার্ক স্থাপন করছে। এই উদ্যোগের মাধ্যমে, সম্ভাবনাময় এবং দায়িত্বশীল কৃষি প্রযুক্তি অনুসন্ধান করা হচ্ছে, যা বাংলাদেশের কৃষিতে একটি নতুন যুগ উদ্ভাসিত করতে সাহায্য করবে। এই পার্ক বাংলাদেশে প্রযুক্তিগত উন্নতি, পরিবেশবান্ধব, এবং সমাজবাদী মানবাধিকারের মানকে অভিবৃদ্ধি করতে একটি মাধ্যম হিসেবে প্রকাশ করবে।</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <img className="lg:block hidden w-full" src={Img1} alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full" src={Img1} alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src={Img1} alt="people discussing on board" />
                </div>
            </div>

            <div className="relative mt-24">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div className="z-20 w-12 h-12 bg-green-700 rounded-full flex justify-center items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5V21" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 5V14" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                  
                    <svg className="z-20 bg-green-700 rounded-full" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <svg className="z-20 sm:block hidden bg-green-700 rounded-full" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        
                        <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-green-700" />
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">বাংলাদেশে জীবিকা নির্বাহ, কর্মসংস্থান ও জিডিপি অবদানে কৃষি খাত মূল চালিকাশক্তি। যদিও কৃষি এখনও দেশের জিডিপিতে তৃতীয় সবচেয়ে বেশি অবদানকারী খাত, তবে গত দশকে এর অবদান কমেছে; ২০১০ সালের ১৭% থেকে ২০২০ সালে ১২.৬%। </p>
                </div>
                <div>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">এই শিল্পটি রপ্তানি আয়েরও একটি গুরুত্বপূর্ণ উৎস এবং পোল্ট্রি ও গবাদি পশুরের খাদ্য, চামড়া, হিমায়িত খাবার, ডাবাবন্দ খাবার ইত্যাদির মতো অন্যান্য খাতের জন্য কাঁচামাল সরবরাহ করে। এটি বাংলাদেশী অর্থনীতির মেরুদণ্ড, অতীতে দারিদ্র্য হ্রাস ও খাদ্য নিরাপত্তা অর্জনে গুরুত্বপূর্ণ ভূমিকা পালন করেছে।</p>
                </div>
                <div className="sm:block hidden">
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">ভবিষ্যতে টেকসই বৃদ্ধি নিশ্চিত করার জন্য, খাতটিকে উচ্চ-প্রযুক্তি কৃষি ও মূল্য শৃঙ্খল বিকাশে যেতে হবে, যাতে খরচ কমাতে, উৎপাদন বাড়াতে এবং উচ্চ মানের পণ্য অর্জন করা যায়। কাটার পরে প্রতি বছর ২.৩৮ বিলিয়ন ডলার (৩০,০০০ কোটি টাকা) কৃষি ফসলের ক্ষতি হয় (দ্য বিজনেস স্ট্যান্ডার্ড), এই ক্ষতি কৃষি প্রক্রিয়াজাতকরণ, প্যাকেজিং, সংরক্ষণ ও উন্নত লজিস্টিকের মাধ্যমে কমানো সম্ভব।</p>
                </div>
            </div>
            <div className="sm:hidden block relative mt-8">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>

            <div className=" lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                <div className="w-full lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-green-700 pb-8">ফ্রেশওয়ের প্রভাব বিবৃতি </h2>
                    
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                        {/* <!-- Team Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg className="mr-6" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">ফ্রেশওয়ের ইএসজি-অনুগত কৃষি প্রযুক্তি শিল্প পার্কটি বাংলাদেশে একটি উদ্ভাবনী এবং টেকসই প্রকল্প, যা জাতিসংঘের টেকসই উন্নয়ন লক্ষ্যমাত্রা (এসডিজি) এবং ইউরোপীয় ইউনিয়নের (ইইউ) বিধিবিধানের সাথে সামঞ্জস্যপূর্ণ।</p>
                            </div>
                        </div>

                        {/* <!-- Board Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">টেকসই উন্নয়ন লক্ষ্যমাত্রার প্রতি অবদান:
                                SDG ১৩ - জলবায়ু ব্যবস্থা: সোলার প্যানেল থেকে সবুজ শক্তি ব্যবহারের মাধ্যমে এই প্রকল্পটি কার্বন নিঃসরণ কমিয়ে জলবায়ু পরিবর্তন মোকাবেলায় সহায়তা করবে। গ্যাস, গোবর এবং ফসলের বর্জ্য থেকে শক্তি উৎপাদনেও SDG ৭ - সাশ্রয়ী এবং পরিচ্ছন্ন শক্তি সমর্থন করা হয়।
                                SDG ৬ - পরিষ্কার পানি ও পয়ঃস্যানিটেশন এবং SDG ১২ - দায়িত্বশীল ভোগ ও উৎপাদন: বৃষ্টির পানি সংগ্রহ এবং পানি শোধন প্লান্ট ব্যবহারের মাধ্যমে ফ্রেশওয়ে বাংলাদেশের পানি সল্প সমস্যা মোকাবেলায় সহায়তা করবে এবং দায়িত্বশীল ভোগ ও উৎপাদনকে উন্নীত করবে।
                                SDG ২ - ক্ষুধা মুক্তি এবং SDG ১৫ - স্থলজীবন: টেকসই কৃষি পদ্ধতি প্রচারে এই প্রকল্পটি SDG ২ - ক্ষুধা মুক্তি এবং SDG ১৫ - স্থলজীবন সমর্থন করবে। এটি খাদ্য নিরাপত্তা বাড়ানো, দারিদ্র্য হ্রাস এবং টেকসই জমি ব্যবহারের পদ্ধতি উন্নীত করবে।</p>
                            </div>
                        </div>

                        {/* <!-- Press Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.5 10.5L18 19.5L31.5 10.5" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Press</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">ইউনিয়নের সাথে সামঞ্জস্য:
                                    ইইউ বিধিবিধানের সাথে মিলিতভাবে, ফ্রেশওয়ের প্রকল্পটি ইউরোপীয় গ্রিন ডিলের সাথে সামঞ্জস্যপূর্ণ, যার লক্ষ্য হল টেকসই অর্থনৈতিক বৃদ্ধি উন্নীত করা এবং জলবায়ু পরিবর্তন মোকাবেলা করা।ফ্রেশওয়ের ইএসজি-অনুগত কৃষি প্রযুক্তি শিল্প পার্ক শুধুমাত্র কৃষি খাতের উন্নয়নেই অবদান রাখবে না, বরং বাংলাদেশের টেকসই উন্নয়নেও গুরুত্বপূর্ণ ভূমিকা পালন করবে।</p>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}


export default AboutUs