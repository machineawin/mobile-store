import React from 'react'
import CartPhones from './CartPhones'
import Header from './Header'

const ShoppingCart = ({ phones }) => {
  return (
    <div className='container'>
        <Header title = 'Shopping Cart' />
        <CartPhones phones = {phones} />

    </div>
  )
}

export default ShoppingCart