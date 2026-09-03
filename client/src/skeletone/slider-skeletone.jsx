import React from 'react'
import Skeleton from 'react-loading-skeleton'
function SliderSkeletone() {
  return (
    <div className='container-fluid hero-bg'>
      <Skeleton count={7}/>
    </div>
  )
}

export default  SliderSkeletone