import React from 'react'
import Header from './Header'
import MobilePhones from './MobilePhones'

const MobileStore = () => {
  return (
    <div className='container'>
        <Header title='Mobile Store' />
        <MobilePhones />
    </div>
  )
}

export default MobileStore