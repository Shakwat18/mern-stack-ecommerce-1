import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FeaturesSkeleton = ({ count = 4 }) => {
  return (
    <section className="container py-4">
      <div className="row g-3">
        {Array.from({ length: count }).map((_, index) => (
          <div
            className="col-12 col-sm-6 col-lg-3"
            key={index}
          >
            <div
              className="
                d-flex
                align-items-center
                gap-3
                p-3
                h-100
                bg-white
                border
                rounded-3
              "
            >
              {/* Feature Icon */}
              <Skeleton
                circle
                width={52}
                height={52}
              />

              {/* Feature Content */}
              <div className="flex-grow-1">
                <Skeleton
                  width="75%"
                  height={15}
                  className="mb-1"
                />

                <Skeleton
                  width="95%"
                  height={11}
                />

                <Skeleton
                  width="65%"
                  height={11}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSkeleton;