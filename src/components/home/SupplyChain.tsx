import React from 'react'

import IMG1 from "../../assets/001.jpg";
import IMG2 from "../../assets/002.jpg";
import IMG3 from "../../assets/hen2.jpg";
import IMG4 from "../../assets/header.png";


const SupplyChain = () => {
  return (
    <>
    {/*<!-- Component: Four columns even layout --> */}
    <section>
        <h1 className='text-center py-9 text-4xl font-semibold'>The Freshway Supply Chain</h1>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-3">{/*<!-- Component: E-commerce card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={IMG2}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
        <div className="flex justify-end p-6 pt-0">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>About</span>
          </button>
        </div>
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              Title
            </h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto dignissimos quasi consequuntur facere atque, veniam eos numquam eaque nisi quibusdam ipsam possimus ab harum est assumenda repudiandae iusto doloribus!
          </p>
           
          </header>
         
        </div>
        {/*  <!-- Action base sized basic button --> */}
        
      </div>
      {/*<!-- End E-commerce card --> */}</div>
          <div className="col-span-4 lg:col-span-3"> <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={IMG1}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
        <div className="flex justify-end p-6 pt-0">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>About</span>
          </button>
        </div>
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              Title
            </h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto dignissimos quasi consequuntur facere atque, veniam eos numquam eaque nisi quibusdam ipsam possimus ab harum est assumenda repudiandae iusto doloribus!
          </p>
             
          </header>
          
        </div>
        {/*  <!-- Action base sized basic button --> */}
        
      </div></div>
          <div className="col-span-4 lg:col-span-3"> <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={IMG3}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
        <div className="flex justify-end p-6 pt-0">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>About</span>
          </button>
        </div>
        <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              Title
            </h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto dignissimos quasi consequuntur facere atque, veniam eos numquam eaque nisi quibusdam ipsam possimus ab harum est assumenda repudiandae iusto doloribus!
          </p>
             
          </header>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        
      </div></div>
          <div className="col-span-4 lg:col-span-3"> <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={IMG4}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
        <div className="flex justify-end p-6 pt-0">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>About</span>
          </button>
        </div>
        <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              Title
            </h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto dignissimos quasi consequuntur facere atque, veniam eos numquam eaque nisi quibusdam ipsam possimus ab harum est assumenda repudiandae iusto doloribus!
          </p>
             
          </header>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        
      </div></div>
        </div>
      </div>
    </section>
    {/*<!-- End Four columns even layout --> */}
  </>
  )
}

export default SupplyChain