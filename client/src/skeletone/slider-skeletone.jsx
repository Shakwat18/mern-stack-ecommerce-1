import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SliderSkeleton = ({ count = 1}) => {
  return (
    <div className="container">
      <div className="row g-3">
        {Array.from({ length: count }).map((_, index) => (
          <div
            className="col-12 "
            key={index}
          >
            <div className=" d-flex p-5 h-100 border-0 shadow-sm">
              
              {/* Product Image */}
              <Skeleton
                height={220}
                className="d-block"
              />

              <div className="card-body">
                
                {/* Category */}
                <Skeleton
                  width="40%"
                  height={14}
                  className="mb-2"
                />

                {/* Product Name */}
                <Skeleton
                  width="90%"
                  height={20}
                  className="mb-2"
                />

                <Skeleton
                  width="65%"
                  height={20}
                  className="mb-3"
                />

                {/* Price */}
                <Skeleton
                  width="35%"
                  height={22}
                  className="mb-3"
                />

                {/* Button */}
                <Skeleton
                  width="100%"
                  height={38}
                  borderRadius={6}
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderSkeleton;