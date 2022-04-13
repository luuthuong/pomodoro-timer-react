import React from 'react'
import Drop from '../drop/Drop'

import './mycard.scss'




const MyCard = (props) => {
  return (
    <div className="mycard neu-shadow">
        <Drop data={props.data}  placeholder={props.placeholder}/>
        <div>
        {props.children}
        </div>
    </div>
  )
}

export default MyCard