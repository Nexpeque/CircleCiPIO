import React from 'react'
import styles from  './TodoList.module.css'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList(props) {
    const { items, clearList, handleDelete, handleEdit, finishTodo } = props
    var content = items.map(item => {
        return (
            <TodoItem
                key={item.id}
                title={item.title}
                done={item.done}
                handleDelete={() => { handleDelete(item.id) }}
                handleEdit={() => { handleEdit(item.id) }}
                finishTodo={() => { finishTodo(item.id) }}
            />
        );
    });
    return (
        <div className={styles.block}>
            <ul>
                {content}
            </ul>
            <button className={styles.button} onClick={clearList}>Clean list</button>
        </div>
    )
}

