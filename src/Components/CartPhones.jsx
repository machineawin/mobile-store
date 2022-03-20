import React from 'react'

const CartPhones = () => {
  return (
    <div className='mobile-phone' key={phone.id}>
        <span>{`${phone.brand} `}</span>
        <span>{`${phone.model} `}</span>
        <span>{`- ${phone.price} AUD `}</span>
        <button className='btn' onClick={()=>onAdd(phone.id)}>Add to cart</button>
    </div>
  )
}

export default CartPhones