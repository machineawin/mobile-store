import React from 'react'

const CartPhones = ( {phones} ) => {
    
    return (
    phones.map ((phone) => {
        return (
            <div className='mobile-phone' key={phone.id}>
                <span>{`${phone.brand} `}</span>
                <span>{`${phone.model} `}</span>
                <span>{`- ${phone.price} AUD `}</span>
                <div>{`Count - ${phone.count}`}</div>
                <div>{`Total for line item - ${phone.count*phone.price}`}</div>                
            </div>
        )
    })    
    )
}

export default CartPhones