import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BrandSkeleton = ({ count = 8 }) => {
  return (
    <div className="container py-4">
      <div className="row g-3 g-md-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            className="col-6 col-sm-6 col-md-4 col-lg-3"
            key={index}
          >
            <div className="card h-100 border-0 shadow-sm text-center overflow-hidden">
              
              {/* Brand Logo */}
              <div className="p-3">
                <Skeleton
                  circle
                  width={90}
                  height={90}
                />
              </div>

              {/* Brand Info */}
              <div className="card-body pt-0">
                <Skeleton
                  width="70%"
                  height={20}
                  className="mb-2"
                />

                <Skeleton
                  width="45%"
                  height={14}
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSkeleton;