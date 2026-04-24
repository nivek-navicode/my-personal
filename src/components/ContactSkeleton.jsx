function ContactSkeleton (){
    return(
        <div className="flex flex-col items-center justify-center mt-20 animate-pulse">

  {/* Title */}
  <div className="h-10 w-48 bg-gray-300 rounded mb-6"></div>

  {/* Icons */}
  <div className="flex gap-6 mb-6 grid grid-cols-1 md:grid-cols-3">
    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
  </div>

  {/* Name */}
  <div className="h-5 w-40 bg-gray-300 rounded mb-2"></div>

  {/* Location */}
  <div className="h-4 w-32 bg-gray-300 rounded"></div>

</div>
    );
}

export default ContactSkeleton;