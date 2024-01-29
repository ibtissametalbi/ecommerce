import React from 'react'
import Header from './Header'
import ProductList from './ProductList'
import Total from './Total'
import Rechercher from './Rechercher'

function Accueil() {
  return (
    <div className='container-fluid'>
      <Header/>
      <div className='row'>
        <Rechercher/>
        <Total/>
      </div>
      <ProductList/>
    </div>
  )
}

export default Accueil