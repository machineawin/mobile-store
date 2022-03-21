import React from 'react'
import CartPhones from './CartPhones'
import Header from './Header'

const ShoppingCart = ({ phones }) => {
  return (
    <div className='container'>
        <Header title = 'Shopping Cart' />
        {phones.length >0 ? 
        (<CartPhones phones = {phones} />) :
        'Your shopping cart is empty'
        }
        

    </div>
  )
}

export default ShoppingCart