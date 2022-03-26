import React from 'react'

const MobilePhones = ( {phones, onAdd} ) => {

    
  return (
      phones.map ((phone) => {
          return (
              <div className='mobile-phone' key={phone.id}>
                  <span>{`${phone.brand} `}</span>
                  <span>{`${phone.model} `}</span>
                  <span>{`- ${phone.price} AUD `}</span>
                  <button onClick={()=>onAdd(phone.id)}>Add to cart</button>
              </div>
          )
      })    
  )
}

export default MobilePhones