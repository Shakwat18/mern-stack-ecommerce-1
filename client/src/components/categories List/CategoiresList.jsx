import React from 'react'
import CategoriesSkeleton from '../../skeletone/categories-skeletone'
import productStore from '../../store/product.store'
import { NavLink} from 'react-router'
export default function CategoiresList() {
    const {categoryList}=productStore()
if(categoryList== null){
    <CategoriesSkeleton/>
}

console.log(categoryList)
  return (
   <div className="row g-4 row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 d-flex align-items-center justify-content-center">
  {categoryList?.map((category) => {
    return (
      <div key={category._id} className="col">
        <div 
          className="
            card h-100 border-0 rounded-4 overflow-hidden position-relative
            bg-white shadow-sm
            transition-all duration-300
            hover-shadow-lg hover-translate-y
            dark-bg-card dark-border-subtle
          "
          style={{ transition: 'all 0.3s ease' }}
        >
          {/* Image Container */}
          <div className="ratio ratio-4x3 bg-light dark-bg-darker overflow-hidden position-relative">
            <img
              src={category.img}
              alt={category.name}
              className="w-100 h-100 object-fit-cover transition-transform duration-500"
              style={{ transition: 'transform 0.5s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />

            {/* Gradient Overlay */}
            <div 
              className="position-absolute inset-0 bg-gradient-to-t from-dark opacity-0 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
            />

            {/* Floating Arrow Badge */}
            <div 
              className="
                position-absolute top-0 end-0 m-3
                d-flex align-items-center justify-content-center
                rounded-circle bg-white text-dark shadow-sm
                opacity-0 translate-y-n2 transition-all duration-300
              "
              style={{ width: '36px', height: '36px' }}
            >
              <i className="bi bi-arrow-up-right small"></i>
            </div>
          </div>

          {/* Card Body */}
          <div className="card-body d-flex flex-column justify-content-between p-4">
            <div>
              <h3 className="card-title fs-6 fw-bold text-dark text-truncate mb-2 text-capitalize">
                {category.name}
              </h3>
              <p className="card-text text-muted small line-clamp-2 mb-0" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {category.des}
              </p>
            </div>

            {/* Footer Link */}
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <NavLink to={`/category/${category._id}`} className="text-warning fw-semibold small">
                Explore  category
              </NavLink>
              <i className="bi bi-chevron-right text-muted small"></i>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>
  )
}
