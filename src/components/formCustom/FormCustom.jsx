import React, { useState } from "react"

import Button from "../button/Button";

import './formcustom.scss'

import { ButtonOutLine } from './../button/Button';
import handleFirebase from './../../firebase/index';

const FormCustom = ({label,className,placeholder}) => {
	const [content,setContent]=useState({
		title:'',
		description:''
	});

    return <div className={`form-custom neu-shadow ${className}`}>
		<h1 className="text-center font-bold text-textColor text-xl">{label}</h1>
		<form className="flex flex-col ">
			<input className="input-custom" type="text" placeholder={placeholder} />
			<textarea className="input-custom" name="" id="" placeholder="Desciption" cols="30" rows="5"></textarea>
		</form>
		<div className="w-full grid grid-cols-2 gap-3 ">


		<ButtonOutLine onClick={()=>document.querySelector('.form-custom').classList.remove('active')} title="CANCEL" icon="" className="btn-add" />
		<Button title="ADD" icon="bx bx-plus" className="btn-add"/>
		</div>
	</div>;
};

export default FormCustom;
