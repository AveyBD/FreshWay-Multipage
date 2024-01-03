import IMG from '../assets/logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail} from "react-icons/io";

const Footer = () => {
  return (
    <>
      {/*    <!-- Component: Five Columns Footer with Logo --> */}
      <footer className="w-full text-slate-500">
        {/*      <!-- Main footer --> */}
        <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-3 gap-6 md:grid-cols-8 lg:grid-cols-10">
              <div
                className="col-span-4 md:col-span-8 lg:col-span-4"
              >
                <a
                  className="mb-6 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 text-slate-700 focus:outline-none flex-col py-8"
                 
                >
                  <img src={IMG} className='w-60 '/>
                  <p className='text-lime-500 font-extrabold text-4xl'>Group</p>
                </a>
              </div>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-product-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-product-5-logo"
                >
                  About Freshway Group
                </h3>
                <ul>
                  

                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Plant Based Food
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Technology
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-docs-5-logo"
              >
                <h3
                  className="mb-1 text-base font-medium text-slate-700"
                  id="footer-docs-5-logo"
                >
                 Corporate Head Office
                </h3>
                    <a
                      href=""
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      House-3, Road-7, Block-C, Niketon Housing Society, Gulshan-1,Dhaka 1212
                    </a>
                  
                 

                <h3
                  className="mb-1 text-base font-medium text-slate-700 pt-5"
                  id="footer-docs-5-logo"
                >
                 Factory
                </h3>
                  <div className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      BSCIC Industrial Area, Joypurhat
                    </a>
                  </div>
                 
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-about-5-logo"
              >
                <h3
                  className="mb-4 text-base font-medium text-slate-700"
                  id="footer-about-5-logo"
                >
                  Contact Us
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 flex"
                    >
                    <FaPhoneAlt size='18'  className='pt-1' />  +8801717825482
                    </a>
                  </li>
                 
                  <li className="mb-2 leading-6 ">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 flex"
                    >
                    <IoIosMail size='20'  className='pt-1'/>  obaidullah.abm@gmail.com
                    </a>
                  </li>
                  
                  
                
                </ul>
              </nav>
             
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Five Columns Footer with Logo --> */}
    </>
  )
}


export default Footer