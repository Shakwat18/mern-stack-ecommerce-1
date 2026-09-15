import React from 'react'
import productStore from '../../store/product.store'
import BrandSkeleton from '../../skeletone/brands-skeletone'

export default function BrandList() {
    const {brandList}=productStore()
if(brandList== null){
    return <BrandSkeleton/>
}
  return (
    <div>
      
    </div>
  )
}
