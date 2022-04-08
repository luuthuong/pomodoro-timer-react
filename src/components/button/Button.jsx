import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

const Button = props => {
  return (
    <div className="button-wraper">
        <button className={`button ${props.className}`} onClick={props.onClick}>
            {props.title}
            <i class='bx bx-play'></i>
        </button>
    </div>
  )
}
Button.propTypes = {
    onClick:PropTypes.func
}
export const ButtonOutLine = props => {
    return(
        <button className="button-outline"> 
        {props.title}
        <i class='bx bx-stop'></i>
        </button>
    )
}
ButtonOutLine.propTypes = {
    onClick:PropTypes.func
}

export default Button