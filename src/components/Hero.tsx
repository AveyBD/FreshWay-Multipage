import { useEffect } from "react"
import Glide from "@glidejs/glide"

import IMG1 from "../assets/Free-Range Egg.jpg";
import IMG2 from "../assets/hero3.png";
import IMG3 from "../assets/hero5.png";

export const Hero = () => {

  useEffect(() => {
    // Ensure 'Glide' is used as a type from TypeScript declarations
    const slider = new (Glide as unknown as typeof Glide)(".glide-01", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();
  
    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
    {/*<!-- Component: Slider with controls inside --> */}
    <div className="relative w-full glide-01">
      {/*    <!-- Slides --> */}
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
          <li>
            <div className='w-full h-full  text-white'>
              < img src={IMG2} alt='/' className='w-full h-full object-cover from-black' />

              <div className='max-w-[1140px] m-auto'>
                  <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col p-4'>
                      <div className='flex gap-3'>
                          <hr className=' '/>
                          <p className='text-xl'></p>
                      </div>
                      <h1 className='font-bold text-4xl '></h1>
                      <h1 className='font-bold text-4xl '> </h1>
                      <p className='py-3'>
                         
                      </p>
                  </div>
              </div>
          </div>
          </li>
          <li>
            <img
             src={IMG1}
            />
          </li>
          <li>
            <img
              src={IMG3}
            />
          </li>
        </ul>
      </div>
      {/*    <!-- Controls --> */}
      <div
        className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
        data-glide-el="controls"
      >
        <button
          className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir="<"
          aria-label="prev slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <title>prev slide</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button
          className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir=">"
          aria-label="next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <title>next slide</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
    {/*<!-- End Slider with controls inside --> */}
  </>
  )
}
