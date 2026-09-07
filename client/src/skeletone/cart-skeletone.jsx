import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CartSkeleton = ({ count = 3 }) => {
  return (
    <section className="w-full px-4 py-6">
      <div className="mx-auto max-w-7xl">

        {/* Cart Title */}
        <div className="mb-6">
          <Skeleton width={130} height={30} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Cart Products */}
          <div className="space-y-4 lg:col-span-2">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className="
                  flex
                  flex-col
                  gap-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-4
                  sm:flex-row
                  sm:items-center
                  dark:border-[#0d3d47]
                  dark:bg-[#04252c]
                "
              >
                {/* Product Image */}
                <Skeleton
                  width={100}
                  height={100}
                  borderRadius={14}
                  className="shrink-0"
                />

                {/* Product Information */}
                <div className="flex-1">
                  <Skeleton
                    width="65%"
                    height={18}
                  />

                  <div className="mt-2">
                    <Skeleton
                      width="35%"
                      height={13}
                    />
                  </div>

                  <div className="mt-2">
                    <Skeleton
                      width="25%"
                      height={16}
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-2">
                  <Skeleton
                    width={32}
                    height={32}
                    borderRadius={8}
                  />

                  <Skeleton
                    width={35}
                    height={32}
                    borderRadius={8}
                  />

                  <Skeleton
                    width={32}
                    height={32}
                    borderRadius={8}
                  />
                </div>

                {/* Price */}
                <div className="sm:w-24 sm:text-right">
                  <Skeleton
                    width={75}
                    height={18}
                  />
                </div>

                {/* Delete */}
                <Skeleton
                  width={32}
                  height={32}
                  borderRadius={8}
                />
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div
            className="
              h-fit
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              dark:border-[#0d3d47]
              dark:bg-[#04252c]
            "
          >
            <Skeleton
              width={140}
              height={22}
            />

            <div className="my-5 space-y-4">

              <div className="flex justify-between">
                <Skeleton width={80} height={14} />
                <Skeleton width={65} height={14} />
              </div>

              <div className="flex justify-between">
                <Skeleton width={60} height={14} />
                <Skeleton width={55} height={14} />
              </div>

              <div className="flex justify-between">
                <Skeleton width={70} height={14} />
                <Skeleton width={60} height={14} />
              </div>

              <div className="border-t border-slate-200 pt-4 dark:border-[#0d3d47]">
                <div className="flex justify-between">
                  <Skeleton width={70} height={20} />
                  <Skeleton width={90} height={22} />
                </div>
              </div>

            </div>

            {/* Checkout Button */}
            <Skeleton
              width="100%"
              height={46}
              borderRadius={12}
            />

            {/* Continue Shopping */}
            <div className="mt-3 flex justify-center">
              <Skeleton
                width={130}
                height={14}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CartSkeleton;