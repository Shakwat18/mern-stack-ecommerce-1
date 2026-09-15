import React from 'react'
import productStore from '../../store/product.store'
import ProductSkeleton from '../../skeletone/product-skeletone'
import { NavLink } from 'react-router'

export default function Product() {
    const {productByRemark}=productStore()
    if(productByRemark==null){
        return <ProductSkeleton/>
    }

  return (
    <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 mt-6">
  {productByRemark.map((product) => {
    const id= product._id
    return (
      <div key={product._id} className="col">
        <div 
          className="card h-100 border-0 rounded-4 overflow-hidden bg-white shadow-sm position-relative group p-2"
          style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 1.5rem 3rem -0.75rem rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0, 0, 0, 0.075)';
          }}
        >
          {/* Top Badges & Image Container */}
          <div className="ratio ratio-4x3 bg-light overflow-hidden position-relative">
            {/* Discount / Remark Badge */}
            {product.remark && (
              <span className="position-absolute top-0 start-0 m-3 z-2 badge bg-dark bg-opacity-75 backdrop-blur px-3 py-2 rounded-pill fw-medium small text-white shadow-sm">
                {product.remark}
              </span>
            )}

            {/* Product Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-100 h-100 object-fit-cover"
              style={{ transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />

            {/* Quick Action Overlay Button */}
            <button 
              className="position-absolute bottom-0 end-0 m-3 z-2 btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center shadow-sm"
              style={{ width: '40px', height: '40px', transition: 'all 0.2s ease' }}
              onClick={() => console.log('View product', product._id)}
              aria-label="View product details"
            >
              <i className="bi bi-eye text-dark"></i>
            </button>
          </div>

          {/* Card Content Body */}
          <div className="card-body d-flex flex-column justify-content-between p-4">
            <div>
              {/* Brand & Rating Header */}
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-muted small text-uppercase fw-semibold tracking-wider">
                  {product.brand?.brandName}
                </span>
                <div className="d-flex align-items-center gap-1 text-warning small fw-bold">
                  <i className="bi bi-star-fill text-warning"></i>
                  <span>{product.star}</span>
                </div>
              </div>

              {/* Product Title */}
              <h3 className="card-title fs-6 fw-bold text-dark text-truncate mb-2">
                {product.title}
              </h3>

              {/* Short Description */}
              <p className="card-text text-muted small mb-3" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {product.shortDes}
              </p>
            </div>

            {/* Pricing and Footer Action */}
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-auto">
              <div className="d-flex align-items-baseline gap-2">
                <span className="fs-5 fw-bold text-dark">
                  ${product.discount ? product.disPrice : product.price}
                </span>
                {product.discount && (
                  <span className="text-muted text-decoration-line-through small">
                    ${product.price}
                  </span>
                )}
              </div>

             <NavLink to={`/product/${id}`}>
               <button  className="btn btn-dark btn-sm rounded-pill px-3 py-2 fw-medium d-flex align-items-center gap-1">
                <span>Buy{product.name}</span>
                <i className="bi bi-arrow-right small"></i>
              </button>       
             </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>
  )
}
