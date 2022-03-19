import React from 'react'

const MobilePhones = () => {

    const phones = [
        {
            id: 1,
            brand: 'Samsung',
            model: 'Galaxy S20',
            price: 700
        },
        {
            id: 2,
            brand: 'Google',
            model: 'Pixel 4',
            price: 600
        },
        {
            id: 3,
            brand: 'Apple',
            model: 'iPhone 7',
            price: 400
        },
    ]

  return (
      phones.map ((phone) => {
          return (
              <div className='mobile-phone' key={phone.id}>
                  <h3>{phone.brand}</h3>
                  <h3>{phone.model}</h3>
                  <bold>{`${phone.price} AUD`}</bold>
              </div>
          )
      })    
  )
}

export default MobilePhones