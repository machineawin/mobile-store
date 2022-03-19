import React from 'react'
import propTypes from 'prop-types'

const Header = ( {title} ) => {
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}

Header.defaultProps = {
    title: 'Default Heading'
}

Header.propTypes = {
    title: propTypes.string
}

export default Header