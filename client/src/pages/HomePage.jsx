import React from 'react'
import Layout from '../components/layout/Layout'
import FeaturesSkeleton from '../skeletone/feature-skeletone'
import BrandSkeleton from '../skeletone/brands-skeletone'
import CartSkeleton from '../skeletone/cart-skeletone'
import SliderSkeletone from '../skeletone/slider-skeletone'
import CategoriesSkeleton from '../skeletone/categories-skeletone'
import ProductSkeleton from '../skeletone/product-skeletone'

function HomePage() {
  return (
    <Layout>
      <SliderSkeletone/>
      <FeaturesSkeleton/>
     <CategoriesSkeleton/>
     <ProductSkeleton/>
     <BrandSkeleton/>
    </Layout>
  )
}

export default HomePage
