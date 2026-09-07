import React from 'react'
import Layout from '../components/layout/Layout'
import FeaturesSkeleton from '../skeletone/feature-skeletone'
import BrandSkeleton from '../skeletone/brands-skeletone'
import CartSkeleton from '../skeletone/cart-skeletone'

function HomePage() {
  return (
    <Layout>
      <FeaturesSkeleton/>
      <BrandSkeleton/>
      <CartSkeleton/>
    </Layout>
  )
}

export default HomePage
