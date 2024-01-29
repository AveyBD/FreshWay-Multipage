import IMG1 from '../assets/Antibiotic-Free Egg.jpg'
import IMG2 from '../assets/Free-Range Egg.jpg'
import IMG3 from '../assets/Poultry Feed.jpg'
import IMG4 from '../assets/Cattle Feed.jpg'
import IMG5 from '../assets/Fish Feed.jpg'
import IMG6 from '../assets/Color Chicken.jpg'
import IMG7 from '../assets/DOC.jpg'

const Product = () => {
  return (
    <div className='pt-28 pb-5 flex flex-col gap-5'>


          {/* 1 */}
        <div className="container px-6 m-auto ">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 ">
            <div className="col-span-4 lg:col-span-6 flex flex-col justify-center ">
              <h1 className='text-4xl font-bold pb-5'>অ্যান্টিবায়োটিক-মুক্ত ডিম</h1>
              <p className='text-md text-justify'>আমরা আপনাদের স্বাস্থ্য ও কল্যাণকে সবার উপরে রাখি, তাই উচ্চ-মানের, অ্যান্টিবায়োটিক-মুক্ত ডিম সরবরাহ করি। আমাদের ডিম নিয়ন্ত্রিত ও পরিচ্ছন্ন পরিবেশে লালিত মুরগি থেকে সংগৃহীত হয়, যা আপনাকে এবং আপনার পরিবারের জন্য স্বাস্থ্যকর পছন্দ নিশ্চিত করে।</p>
            </div>
            <div className="col-span-4 lg:col-span-6"><img src={IMG1} /></div>
          </div>
        </div>

        {/* 2 */}
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              <img src={IMG2} />
            </div>
            <div className="col-span-4 lg:col-span-6 flex flex-col justify-center ">
              <h1 className='text-4xl text-right font-bold pb-5'>অনবৃত খামারের ডিম</h1>
              <p className='text-md text-justify'>আমাদের অনবৃত খামারের ডিমের ঐশ্বর্যময় স্বাদ ও পুষ্টিগুণ উপভোগ করুন। আমাদের মুরগীরা প্রাকৃতিক ও মুক্ত পরিবেশে বাস করে, ফলে ডিমগুলি কেবল সুস্বাদুই নয়, পুষ্টিতেও সমৃদ্ধ।</p>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6 flex flex-col justify-center ">
              <h1 className='text-4xl font-bold pb-5'>পোলট্রি ফিড</h1>
              <p className='text-md text-justify'>আমাদের বিশেষভাবে তৈরি পোলট্রি খাদ্য সরাসরি আমাদের মুরগিদের পুষ্টি চাহিদা পূরণের জন্য তৈরি। আমরা বিশ্বাস করি, সুষম ও স্বাস্থ্যকর ডায়েটের মাধ্যমে আমাদের পাখিদের কল্যাণ নিশ্চিত করা ও তাদের সর্বোত্তম বৃদ্ধি নিশ্চিত করা যায়।</p>
            </div>
            <div className="col-span-4 lg:col-span-6">
              <img src={IMG3} />
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              <img src={IMG4} />
            </div>
            <div className="col-span-4 lg:col-span-6 flex flex-col justify-center ">
              <h1 className='text-4xl font-bold pb-5'>গবাদি পশুর খাদ্য</h1>
              <p className='text-md text-justify'>
            গবাদি পশুর খাদ্য
            আমরা উচ্চমানের, অ্যান্টিবায়োটিক-মুক্ত ডিম সরবরাহ করে গ্রাহকদের স্বাস্থ্য ও কল্যাণকে সবার ঊর্ধ্বে রাখি। আমাদের ডিমগুলি নিয়ন্ত্রিত ও পরিচ্ছন্ন পরিবেশে লালিত মুরগী থেকে আসে, যা আপনাকে এবং আপনার পরিবারের জন্য স্বাস্থ্যকর পছন্দ নিশ্চিত করে।</p>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6 flex flex-col justify-center ">
              <h1 className='text-4xl font-bold pb-5'>মাছের খাদ্য</h1>
              <p className='text-md text-justify'>
                মাছের খাদ্য
                আমাদের জলচাষ কার্যক্রমে, আমরা টেকসই ও পুষ্টিকর মাছের খাদ্য উন্নয়নে গুরুত্ব দিই। এটি আমাদের মাছের স্বাস্থ্য নিশ্চিত করে, যা গ্রাহকদের জন্য উচ্চমানের সামুদ্রিক খাদ্য পণ্য সরবরাহ করে।</p>
            </div>
            <div className="col-span-4 lg:col-span-6">
              <img src={IMG5} />
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              <img src={IMG6} />
            </div>
            <div className="col-span-4 lg:col-span-6 flex flex-col justify-center ">
              <h1 className='text-4xl font-bold pb-5'>রঙিন মুরগি / পোলট্রি  মুরগি</h1>
              <p className='text-md text-justify'>আমাদের মুরগিগুলো, বিশেষ করে রঙিন মুরগি, নৈতিক পদ্ধতিতে লালন করা হয়। ফলে, এদের মাংস সুস্বাদু ও কোমল হয়। এই স্বতন্ত্র স্বাদের অভিজ্ঞতা নিন!</p>
            </div>
          </div>
        </div>

        {/* 7 */}
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
    
            <div className="col-span-4 lg:col-span-6 flex flex-col justify-center ">
              <h1 className='text-4xl font-bold pb-5'>DOC - ডে-ওল্ড চিক</h1>
              <p className='text-md text-justify'>আমাদের সেরা জাতের "ডে-ওল্ড চিক" (DOC) দিয়ে আপনার খামার গড়ে তুলুন! সাবধানে যত্ন নেওয়া ও উন্নত জাতের এই DOC গুলো ভবিষ্যতের শক্তিশালী ও স্বাস্থ্যবান মুরগী তৈরির নিশ্চয়তা দেয়।</p>
            </div>

            <div className="col-span-4 lg:col-span-6">
              <img src={IMG7} />
            </div>
          </div>
        </div>
        
      
    </div>
  )
}

export default Product