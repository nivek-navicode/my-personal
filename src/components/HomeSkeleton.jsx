function HomeSkeleton() {
  return (
    <div className="min-h-screen pt-20 flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/*content text skeleton */}
        <div className="order-2 md:order-1 space-y-6 animate-pulse text-center md:text-left">
          {/*intern  */}
          <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto md:mx-0"></div>
          {/*Nivethitha kirupakaran */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <div className="h-12 bg-gray-300 rounded w-3/4 "></div>
            <div className="h-12 bg-gray-300 rounded w-1/2 "></div>
          </div>
          {/*paragraph */}
          <div className="space-y-2 flex flex-col items-center md:items-start ">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            <div className="h-4 bg-gray-200 rounded w-3/6"></div>
          </div>
          {/*button */}
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <div className="h-12 bg-gray-300 rounded-xl w-32 sm:mx-0"></div>
            <div className="h-12 bg-gray-200 rounded-xl w-32 sm:mx-0"></div>
          </div>

        </div>

        {/*image skeleton */}
        <div className="flex justify-center animate-pulse order-1 md:order-2 ">
         
           
            {/* image box */}
            <div className="w-64 h-80 md:w-80 md:h-[450px] bg-gray-300 rounded-3xl border-8 border-white shadow-lg"></div>
          </div>

        </div>
      </div>
    
  );
}

export default HomeSkeleton;