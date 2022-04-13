import React from 'react'
import { NavLink } from 'react-router-dom'
import listFeatures from '../../constants/fearuture'

import './navmobile.scss'

const NavMobile = () => {
  return (
    <div className="navmobile">
        {
          listFeatures.map((feature,index) => {
            return (
                <NavLink
                    key={index}
                    className={`navmobile-element ${({ isActive }) => {
                        return isActive ? "active" : "";
                    }}`}
                    to={feature.path}
                >
                    <i className={feature.icon}></i>
                    <div>{feature.title}</div>
                </NavLink>
            );
          })
        }
    </div>
  )
}

export default NavMobile