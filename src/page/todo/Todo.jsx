import React from 'react'

import './todo.scss'

import Drop from '../../components/drop/Drop'
import filter from './../../constants/filter';

const Todo = () => {
  return (
    <div className="todo">
      <header className="todo__title">
        <h1 >TODO LIST</h1>
      </header>
      <section>
      <Drop data={filter} title="filter" placeholder="Filter-Todo"/>
      </section>
    </div>
  )
}

export default Todo