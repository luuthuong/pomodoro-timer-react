import React, { useState } from 'react'
import './sidebar.scss'

import { Link, NavLink } from 'react-router-dom'

import listFeatures from './../../constants/fearuture';



const Sidebar = () => {

    return (
        <div className="sidebar neu-shadow">
            <div className="sidebar__container">
                <div className="sidebar-user">
                        <img src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="user-name">
                        Nguyen Luu Thuong
                    </div>
                </div>
                <div className="sidebar-element">
                    {listFeatures.map((item, index) => {
                        return (
                                <NavLink key={index} 
                                className={`sidebar-item ${({isActive})=>isActive?'active':''}`} to={item.path}>
                                    <i className={item.icon}></i>
                                    <div className="">{item.title}</div>
                                </NavLink>
                        );
                    })}
                </div>
                <div className="sidebar-poster">
                    <img src="https://images.unsplash.com/photo-1508599804355-8ce5238b44b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar