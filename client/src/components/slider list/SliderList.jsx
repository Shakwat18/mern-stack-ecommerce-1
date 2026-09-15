import React from 'react'
import productStore from '../../store/product.store'
import SliderSkeleton from '../../skeletone/slider-skeletone'
import { NavLink } from 'react-router'


function SliderList() {
    const {sliderList}=productStore()
    if(sliderList== null ){
        return <SliderSkeleton/>
    }
  return (
 <div
  id="carouselExampleDark"
  className="carousel hero-bg carousel-dark slide"
  data-bs-ride="carousel"
>
  {/* Indicators */}
  <div className="carousel-indicators">
    {sliderList.map((item, index) => (
      <button
        key={item._id}
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to={index}
        className={index === 0 ? "active" : ""}
        aria-current={index === 0 ? "true" : undefined}
        aria-label={`Slide ${index + 1}`}
      />
    ))}
  </div>

  {/* Slides */}
  <div className="carousel-inner">
    {sliderList.map((item, index) => (
      <div
        key={item._id}
        className={`carousel-item ${index === 0 ? "active" : ""}`}
        data-bs-interval="5000"
      >
        <div className="container py-5">
          <div className="row align-items-center justify-content-center">

            {/* Text */}
            <div className="col-12 col-md-5 p-5">
              <h1 className="headline-1">
                {item.title}
              </h1>

              <p>
                {item.des}
              </p>

              <NavLink
                to={`/product/${item.productId}`}
                className="btn text-white btn-success px-5  "
              >
                Buy Now
              </NavLink>
            </div>

            {/* Image */}
            <div className="col-12 col-md-5 p-5">
              <img
                src={item.img}
                className="w-100"
                alt={item.title}
              />
            </div>

          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Previous */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span
      className="carousel-control-prev-icon"
      aria-hidden="true"
    />
    <span className="visually-hidden">
      Previous
    </span>
  </button>

  {/* Next */}
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span
      className="carousel-control-next-icon"
      aria-hidden="true"
    />
    <span className="visually-hidden">
      Next
    </span>
  </button>
</div>
  )
}

export default SliderList
