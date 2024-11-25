import React from 'react'
import PropTypes from 'prop-types'
const Child = ({name="unknown",age=0}) => {
  return (
    <div>name:{name} age:{age}</div>
  )
}

Child.propTypes={
name:PropTypes.string,
age:PropTypes.number
}


export default Child