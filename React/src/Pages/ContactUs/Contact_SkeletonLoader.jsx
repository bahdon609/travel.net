// SkeletonParallaxLoader.js
import Skeleton from 'react-loading-skeleton';

const SkeletonParallaxLoader = ({textWidth,type}) => {
  return (
   <div>
     <div
      style={{
        height: "35vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EEEEEE", // Placeholder background color
      }}
    >
      <div
        className="text-center text-white"
        style={{
          backgroundColor: "#E0E0E0",
          padding: " 20px",
          width:'900px'
        }}
      >
           <Skeleton width={textWidth || 900} height={40} className="mb-4 w-[500px]" />
           <Skeleton width={textWidth || 1000} height={30} className="mb-4 w-[500px]" />
      </div>
    </div>
    
   </div>
  );
};

export default SkeletonParallaxLoader;
