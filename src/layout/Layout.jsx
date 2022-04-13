import React from "react";

import { BrowserRouter } from "react-router-dom";

import MyCard from "../components/card/MyCard";

import Footer from "../components/footer/Footer";

import Sidebar from "../components/sidebar/Sidebar";

import MyRouter from "./../router/MyRouter";

import "./layout.scss";
import NavMobile from './../components/navigation/NavMobile';

const Layout = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Sidebar />
                <div className="container__content">
                    <div className=" top">
                        <MyRouter />
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </div>
            <NavMobile/>
        </BrowserRouter>
    );
};

export default Layout;
