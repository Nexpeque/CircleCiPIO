import React from 'react'
import styles from './TodoInput.module.css';

export default function TodoInput(props) {
    const { item, handleChange, handleSubmit, editItem } = props
    return (
        <div className={styles.block}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Add a to do item"
                        className={styles.input}
                        value={item}
                        onChange={handleChange}
                    />
                    <button
                        className={editItem ? styles.buttonEdit : styles.button}>
                        <i className={`${editItem ? 'fas fa-pencil-alt' : 'fas fa-plus'} ${styles.addIcon}`} ></i>
                    </button>
                </div>
            </form>
        </div>
    )
}
