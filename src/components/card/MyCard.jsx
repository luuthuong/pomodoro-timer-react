import React from 'react'
import Drop from '../drop/Drop'

import './mycard.scss'




const MyCard = (props) => {
  return (
    <div className="mycard neu-shadow">
      <h1 className="text-textColor text-3xl font-bold text-center mb-2">{props.title}</h1>
        <Drop data={props.data}  placeholder={props.placeholder}/>
        <div>
        {props.children}
        </div>
    </div>
  )
}

export default MyCard