import React, { useEffect, useState } from "react";

import Button from "../button/Button";

import "./formcustom.scss";

import { ButtonOutLine } from "./../button/Button";

import handleFirebase from "./../../firebase/index";

import datetime from "../../constants/datetime";

const FormCustom = ({ label, className, placeholder }) => {
    const [content, setContent] = useState({
        name: "",
        description: "",
    });
    const addData = {
        ...content,
        date: datetime.getDate,
        complete: false,
    };
	useEffect(() => {
		// console.log(content);
	},[content])

    return (
        <div className={`form-custom neu-shadow ${className}`}>
            <h1 className="text-center font-bold text-textColor text-xl">
                {label}
            </h1>
            <form className="flex flex-col ">
                <input
                    value={content.name}
                    onChange={(e) =>
                        setContent({
                            ...content,
                            name: e.target.value,
                        })
                    }
                    className="input-custom"
                    type="text"
                    placeholder={placeholder}
                />
                <textarea
                    value={content.description}
                    onChange={(e) =>
                        setContent({
                            ...content,
                            description: e.target.value,
                        })
                    }
                    className="input-custom"
                    name=""
                    id=""
                    placeholder="Desciption"
                    cols="30"
                    rows="5"
                ></textarea>
            </form>
            <div className="w-full grid grid-cols-2 gap-3 ">
                <ButtonOutLine
                    onClick={() =>
                        document
                            .querySelector(".form-custom")
                            .classList.remove("active")
                    }
                    title="CANCEL"
                    icon=""
                    className="btn-add"
                />
                <Button 
					onClick={()=>handleFirebase.addData('todolist',addData)}
					title="ADD" 
					icon="bx bx-plus" 
					className="btn-add" 
				/>
            </div>
        </div>
    );
};

export default FormCustom;
