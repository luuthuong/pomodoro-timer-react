import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

const Button = props => {
  return (
    <div className="button-wraper">
        <button className={`button ${props.className}`} onClick={props.onClick}>
            {props.title}
            <i className={props.icon}></i>
        </button>
    </div>
  )
}
Button.propTypes = {
    onClick:PropTypes.func
}
export const ButtonOutLine = props => {
    return(
        <button onClick={props.onClick} className={`button-outline ${props.className}`}> 
        {props.title}
        <i className={props.icon}></i>
        </button>
    )
}
ButtonOutLine.propTypes = {
    onClick:PropTypes.func
}

export default Button