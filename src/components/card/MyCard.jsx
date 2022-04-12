import React from 'react'

import './mycard.scss'

import Drop from '../../drop/Drop'



const MyCard = (props) => {
  return (
    <div className="mycard neu-shadow">
        <Drop data={props.data}  placeholder={props.placeholder}/>
    </div>
  )
}

export default MyCard