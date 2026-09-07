import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BrandSkeleton = ({ count = 6 }) => {
  return (
    <section className="w-full px-4 py-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mb-5">
          <Skeleton width={150} height={24} />
        </div>

        {/* Brands */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className="
                flex
                h-28
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-white
                p-4
                transition
                dark:border-[#0d3d47]
                dark:bg-[#04252c]
              "
            >
              <Skeleton
                width="75%"
                height={55}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSkeleton;