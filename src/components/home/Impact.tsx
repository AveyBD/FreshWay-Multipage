import React from 'react'
import IMG1 from "../../assets/001.jpg";

const Impact = () => {
  return (
    <div >
        <section className='mt-12 pb-8 bg-lime-600'>
            <h1 className='py-8 text-4xl text-center font-bold text-white'>পরিবেশে আমাদের প্রভাব</h1>
        <div className="container px-6 m-auto ">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4"><div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
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
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              The easy way to go
            </h3>
            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
          </header>
          <p>
            Experience the simple pleasures of a world with no cars, and only
            gentle walks through palm tree forests, and fallen coconuts. An
            island that’s home to extraordinary cliffs, swelling oceans, and
            mammoth manta rays.
          </p>
        </div>
      </div></div>
            <div className="col-span-4"><div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
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
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              The easy way to go
            </h3>
            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
          </header>
          <p>
            Experience the simple pleasures of a world with no cars, and only
            gentle walks through palm tree forests, and fallen coconuts. An
            island that’s home to extraordinary cliffs, swelling oceans, and
            mammoth manta rays.
          </p>
        </div>
      </div></div>
            <div className="col-span-4"><div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
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
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              The easy way to go
            </h3>
            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
          </header>
          <p>
            Experience the simple pleasures of a world with no cars, and only
            gentle walks through palm tree forests, and fallen coconuts. An
            island that’s home to extraordinary cliffs, swelling oceans, and
            mammoth manta rays.
          </p>
        </div>
      </div></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Impact