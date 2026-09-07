import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategoriesSkeleton = ({ count = 4}) => {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-3"
            key={index}
          >
            <div className="card border-0 shadow-sm h-100">
              
              {/* Image Placeholder */}
              <Skeleton
                height={180}
                className="w-100"
                style={{ borderRadius: "8px 8px 0 0" }}
              />

              <div className="card-body text-center">
                
                {/* Category Name */}
                <Skeleton
                  width="70%"
                  height={20}
                  className="mb-2"
                />

                {/* Optional product count */}
                <Skeleton
                  width="45%"
                  height={15}
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSkeleton;