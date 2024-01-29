import IMG2 from "../../assets/egg1.jpg";
import IMG3 from "../../assets/egg2.jpg";
import IMG4 from "../../assets/egg3.jpg";
import IMG1 from "../../assets/egg.png";

const OurEggs = () => {
  return (
    <div className='py-16'>
        <h1 className='text-center text-3xl pt-2 font-bold '> 
        কেন আমাদের উৎপাদিত ডিম অন্যদের থেকে উন্নতমানের </h1>
        <div className='flex justify-center items-center gap-4 pt-4 pb-5'>
             <hr className="px-12 border-t-4 border-amber-500" />
            <img src={IMG1} className='w-6'/>
              <hr className="px-12 border-t-4 border-amber-500" />
        </div>
         <section>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-9">
            <div className="col-span-4 lg:col-span-3">
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
  
 
    <img src={IMG2} alt="card image" className="aspect-video w-full  hover:border-amber-500 hover:border-8" />
  <div className="p-6">
    <header>
      <h3 className="text-lg font-medium text-center text-slate-700">১০০% জীবাণুমুক্ত</h3>
     
    </header>
  </div>
</div>
            </div>
            <div className="col-span-4 lg:col-span-3">
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
  
  <figure>
    <img src={IMG3} alt="card image" className="aspect-video w-full hover:border-amber-500 hover:border-8" />
  </figure>
  
  <div className="p-6">
    <header>
      <h3 className="text-lg font-medium text-center text-slate-700">অ্যান্টিবায়োটিক মুক্ত</h3>
      
    </header>
  </div>
</div>
            </div>
            <div className="col-span-4 lg:col-span-3">
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
  
  <figure>
    <img src={IMG4} alt="card image" className="aspect-video w-full hover:border-amber-500 hover:border-8" />
  </figure>
  
  <div className="p-6">
    <header>
      <h3 className="text-lg font-medium text-center text-slate-700">সূম্পর্ণ স্বয়ংক্রিয়</h3>

    </header>
  </div>
</div>
            </div>
         
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurEggs