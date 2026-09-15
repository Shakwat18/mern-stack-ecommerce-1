import React from 'react'
import featureStore from '../../store/features.store'
import Card from '../card/Card'
import FeaturesSkeleton from '../../skeletone/feature-skeletone'

export default function Features() {
    const {featuresList}=featureStore()
    


    if(featuresList==null){
        return <FeaturesSkeleton/>
    }


return (
    <div className='d-flex flex-column align-items-center justify-content-center m-4'>
      <h3 > Featues</h3>
      <div className='d-flex'>

      {featuresList.map((feature)=>{
        return(
          
          <Card key={feature._id} name={feature.name} img={feature.img} des={feature.des}/>
          // <div key={feature._id}>
          //   <h3>{feature.name}</h3>
          // </div>
        )
      })}
      </div>
    </div>
  )
}
