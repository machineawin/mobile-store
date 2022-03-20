import React from 'react'
import Header from './Header'
import MobilePhones from './MobilePhones'

const MobileStore = ( {phones, onAdd} ) => {
  return (
    <div className='container'>
        <Header title='Mobile Store' />
        <MobilePhones phones = {phones} onAdd = {onAdd}/>
    </div>
  )
}

export default MobileStore