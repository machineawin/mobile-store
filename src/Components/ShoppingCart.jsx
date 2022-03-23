import React from 'react'
import CartPhones from './CartPhones'
import Header from './Header'

const ShoppingCart = ({ phones, total }) => {
  return (
    <div className='container'>
        <Header title = 'Shopping Cart' />
        {phones.length >0 ? 
        (<CartPhones phones = {phones} /> 
        ) :
        'Your shopping cart is empty'
        }
        <h3>{`Total = ${total} AUD`}</h3>

    </div>
  )
}

export default ShoppingCart