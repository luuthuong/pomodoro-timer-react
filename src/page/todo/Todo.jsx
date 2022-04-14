import React, { useState } from "react";

import Drop from "../../components/drop/Drop";

import filter from "./../../constants/filter";

import "./todo.scss";

import Button from "./../../components/button/Button";

import FormCustom from "../../components/formCustom/FormCustom";

import VisibilityIcon from '@mui/icons-material/Visibility';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import ModeEditIcon from '@mui/icons-material/ModeEdit';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Checkbox from '@mui/material/Checkbox';

import { useSelector } from "react-redux";

import { todoListSelector } from "../../redux/selector";

const Todo = () => {
    const [state, setState] = useState(false);
	const [visible,setVisible] = useState(false);
	const todolist = useSelector(todoListSelector)

	console.log(todolist);

    return (
        <div className="todo">
            <header className="todo__title">
                <h1>TODO LIST</h1>
            </header>
            <section className="todo__options w-full flex mb-sm:flex-col">
                <Drop data={filter} title="filter" placeholder="Filter-Todo" />
                <Button
                    className="add-task"
                    onClick={() => setState(!state)}
                    title="Add Task"
                    icon="bx bx-book-add"
                />
            </section>
            <section className="relative">
                <FormCustom
                    label="Add new Task"
                    className={state ? "active" : ""}
                    placeholder="Name task"
                />
            </section>
            <section className="todo__content">
                {todolist.map((item, index) => (
                    <div key={index} className="todo__content__element">
                        <div className="flex gap-3 justify-center items-center">
                            <Checkbox
                                inputProps={{ "aria-label": "controlled" }}
								sx={{
									'&.Mui-checked': {
									color: "#05c46b",
									},}}
								className="icon"
                            />
                            <div>
                                {item.data.name}
                            </div>
                        </div>
                        <div className="flex gap-1">
                            {!visible ? (
                                <VisibilityIcon onClick={()=>setVisible(!visible)} className="icon" />
                            ) : (
                                <VisibilityOffIcon onClick={()=>setVisible(!visible)} className="icon" />
                            )}
                            <ModeEditIcon className="icon" />
                            <DeleteForeverIcon className="icon" />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Todo;
