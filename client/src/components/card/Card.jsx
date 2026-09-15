import React from 'react'

export default function Card({name, img, des}) {
const icon= 'f'
  return (
 <div className="col-md-4 m-3">
        <div 
          className="card h-100 border-0 rounded-4 p-4 bg-white shadow-sm position-relative overflow-hidden"
          style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 1rem 2.5rem -0.5rem rgba(0, 0, 0, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0, 0, 0, 0.075)';
          }}
        >
          {/* Top Icon or Image Container */}
          <div className="mb-4">
            <div 
              className="d-inline-flex align-items-center justify-content-center rounded-3 bg-light text-warning shadow-sm"
              style={{ width: '56px', height: '56px' }}
            >
              {img ? (
                <img 
                  src={img} 
                  alt={name} 
                  className="w-100 h-100 object-fit-cover rounded-3" 
                />
              ) : (
                <i className={`bi ${icon || 'bi-star'} fs-4`}></i>
              )}
            </div>
          </div>

          {/* Feature Body */}
          <div className="p-0">
            <h3 className="h5 fw-bold text-dark mb-2 tracking-tight">
              {name}
            </h3>
            <p className="text-muted small lh-base mb-0">
              {des}
            </p>
          </div>

          {/* Subtle Decorative Hover Glow Accent */}
          <div 
            className="position-absolute top-0 start-0 w-100 bg-warning opacity-0"
            style={{ height: '3px', transition: 'opacity 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
          />
        </div>
      </div>
  )
}
