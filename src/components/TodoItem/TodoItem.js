import React from 'react'
import styles from "./TodoItem.module.css"
export default function TodoItem(props) {
    const { title, done, handleDelete, handleEdit, finishTodo } = props
    return (
        <li className={styles.listItem}>
            <h6 className={`${styles.inline} ${styles.title} ${done ? styles.done : " "}`}>{title}</h6>
            <div className={`${styles.todoIcon} ${styles.inline}`} >
                <span onClick={handleEdit}><i className={`fas fa-pencil-alt ${styles.icon}`}></i></span>
                <span onClick={handleDelete}><i className={`fas fa-trash-alt ${styles.icon}`}></i></span>
                <span onClick={finishTodo}><i className="fas fa-check"></i></span>
            </div>
        </li>
    )
}
