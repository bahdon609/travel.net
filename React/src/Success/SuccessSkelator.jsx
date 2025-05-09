const SuccessSkelator = () => {
  return (
    <div className="my-4">
      <div>
        <div className="flex flex-col items-center space-x-2 mb-10">
          <div className="w-60 h-12 bg-gray-300"></div>
      
          <div className="w-32 h-3 bg-gray-300 mt-5"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-auto">
        {Array(12)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-gray-300 animate-pulse"
              style={{ height: "200px" }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default SuccessSkelator;

