import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = ({ count = 8 }) => {
  return (
    <div className="container py-4">
      <div className="row g-3 g-md-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            className="col-6 col-sm-6 col-md-4 col-lg-3"
            key={index}
          >
            <div className="card h-100 border-0 shadow-sm overflow-hidden">

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
                  className="mb-1"
                />

                <Skeleton
                  width="65%"
                  height={20}
                  className="mb-3"
                />

                {/* Rating */}
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Skeleton width={80} height={16} />
                  <Skeleton width={30} height={14} />
                </div>

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

export default ProductSkeleton;