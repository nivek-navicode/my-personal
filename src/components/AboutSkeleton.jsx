function AboutSkeleton(){
    return(
        <div className="max-w-4xl mx-auto p-6 pt-20 animate-pulse">
      {/* title  */}
      <div className="h-10 bg-gray-200 rounded-lg w-1/3 mx-auto mb-10"></div>


        {[1, 2].map((i) => (
        <div key={i} className="mb-10">
          {/*heading*/}
        <div className="flex items-center gap-3 mb-4">
        <div className="h-8 w-8 bg-gray-200 rounded-lg"></div>
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>   
          </div>
          
          {/* Card Content */}
          <div className="border border-gray-300 rounded-2xl bg-gray-200 p-6">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div> 
          <div className="h-4 bg-gray-100 rounded w-1/4 mb-4"></div>
          <div className="space-y-2">
          <div className="h-3 bg-gray-50 rounded w-full"></div>  
          <div className="h-3 bg-gray-50 rounded w-5/6"></div>    
          </div>
          </div>
        </div>
      ))}

        {/* skills*/}
        <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
        <div className="h-8 w-8 bg-gray-200 rounded-lg"></div>
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        </div>
        
        {/* skills card*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-32 bg-gray-200 border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center">
        <div className="h-10 w-10 bg-gray-200 rounded-lg mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>    
        <div className="h-3 bg-gray-100 rounded w-full"></div>   
        </div>
          ))}
        </div>
        </div>
        </div>
    );

}
export default AboutSkeleton;