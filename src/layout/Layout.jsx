import React from "react";

import { BrowserRouter } from "react-router-dom";

import MyCard from "../components/card/MyCard";

import Footer from "../components/footer/Footer";

import Sidebar from "../components/sidebar/Sidebar";

import MyRouter from "./../router/MyRouter";

import "./layout.scss";

const Layout = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Sidebar />
                <div className=" container__content">
                    <div className="container__break top">
                        <MyRouter />
                        <div className="right ">
                            <MyCard
                                data={[{ title: "task" }]}
                                placeholder="Choose task"
                            ></MyCard>
                            <MyCard
                                data={[{ title: "music" }]}
                                placeholder="Choose music"
                            ></MyCard>
                        </div>
                    </div>
                    <div className=" footer ">
                        <Footer />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Layout;
