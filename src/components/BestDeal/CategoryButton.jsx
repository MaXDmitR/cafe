import React from 'react'

const CategoryButton = (props) => {
  return (
    <div  className={`categoryButton btn btn-outline-dark btn-lg mt-4 ${props.active ? 'active' : ''}`} onClick={() => props.setCategory(props.name)}>
        {props.name}
    </div>
  )
}

export default CategoryButton
