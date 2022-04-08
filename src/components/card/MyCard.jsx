import React from 'react'

import './mycard.scss'

import Drop from '../../drop/Drop'



const MyCard = () => {
  return (
    <div className="mycard">
        <Drop data={[{title:'nguyen '}]}  placeholder="Choose Task"/>
    </div>
  )
}

export default MyCard