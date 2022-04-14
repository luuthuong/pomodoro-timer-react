import React, { useState } from "react";

import Drop from "../../components/drop/Drop";

import filter from "./../../constants/filter";

import "./todo.scss";

import Button from "./../../components/button/Button";

import FormCustom from "../../components/formCustom/FormCustom";

const Todo = () => {
    const [state, setState] = useState(false);
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

			</section>
        </div>
    );
};

export default Todo;
