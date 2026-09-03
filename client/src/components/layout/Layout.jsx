import React from 'react'
import AppHeader from './appHeader'
import Footer from './footer'

function Layout({children}) {
  return (
    <>
      <AppHeader/>
{children}
      <Footer/>
    </>
  )
}

export default Layout
