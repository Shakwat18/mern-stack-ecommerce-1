import Layout from '../components/layout/Layout'
import productStore from '../store/product.store'
import Features from '../components/features/Features'
import featureStore from '../store/features.store'
import SliderList from '../components/slider list/SliderList'
import CategoiresList from '../components/categories List/CategoiresList'
import Product from '../components/product/Product'
import BrandList from '../components/brand lIst/BrandList'
import { useEffect } from 'react'

function HomePage() {

const {getSliderList,getBrandList,getCategoriesList,getProductByRemark}=productStore()
const {getFeaturesList}=featureStore()

useEffect(()=>{
 (async () => {
await   getSliderList()
await  getBrandList()
await  getCategoriesList()
 await getFeaturesList()
 await getProductByRemark('Popular')
 })()
},[])

const trendingBtn=["Popular", "New", "Trending"]

  return (
    <Layout>
  <div className="container home">
        <SliderList/>
      <Features/>
    <>
    <div className="d-flex flex-column align-items-center"
     >
      <h4> Top Categories </h4>

      <p>Selecte Category</p>
    </div >
    
       <CategoiresList />
    </>
    <>
    <div className='mt-5 mb-3 d-flex flex-column justify-content-center align-items-center'>
<h3> Products </h3>
<h4>Select Trending Product</h4>

<div className="d-flex flex-wrap gap-2 justify-content-around">
  {trendingBtn.map((btn) => (
    <div key={btn} className="d-inline-flex ">
      <button 
        onClick={async () => getProductByRemark(btn)} 
        className="btn rounded-pill px-4 py-2 fw-medium border-0 position-relative overflow-hidden shadow-sm"
        style={{
          backgroundColor: '#f8f9fa',
          color: '#343a40',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#212529';
          e.currentTarget.style.color = '#ffffff';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f8f9fa';
          e.currentTarget.style.color = '#343a40';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(0.96)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1)';
        }}
      >
        {btn}
      </button>
    </div>
  ))}
</div>
   
    </div>
     <Product/>
    </>
     <BrandList/>
  </div>
    </Layout>
  )
}

export default HomePage
