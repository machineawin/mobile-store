import React from 'react'
import AddPhone from './AddPhone'
import Header from './Header'
import MobilePhones from './MobilePhones'

const MobileStore = ( {phones, onAdd} ) => {
  return (
    <div className='container'>        
        <Header title='Mobile Store' />
        <AddPhone/>
        <MobilePhones phones = {phones} onAdd = {onAdd}/>
    </div>
  )
}

export default MobileStore