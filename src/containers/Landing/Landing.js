import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';
import TodoInput from '../../components/TodoInput/TodoInput';
import TodoList from '../../components/TodoList/TodoList';
import styles from './Landing.module.css';

export default class Landing extends Component {
    state = {
        items: [
            {
                done: false,
                id: "bc07c727-28e7-4a6f-94e9-260a08df59ce",
                title : "Create circleCi ppt"
            },
        ],
        id: uuid(),
        item: "",
        editItem: false
    }
    render() {
        return (
            <React.Fragment>
                <h1 className={styles.title} >Add</h1>
                <TodoInput
                    item={this.state.item}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    editItem={this.state.editItem}
                />
                <h1 className={styles.title} >To Do list</h1>
                <TodoList
                    items={this.state.items}
                    clearList={this.clearList}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    finishTodo={this.finishTodo}
                />
            </React.Fragment>
        );
    }
    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item,
            done: false
        }
        console.log(newItem)
        const updatedItems = [...this.state.items, newItem];
        this.setState({
            items: updatedItems,
            item: "",
            id: uuid(),
            editItem: false
        });
    }
    clearList = () => {
        this.setState({
            items: []
        });
    }
    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        });
    }
    handleEdit = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);
        this.setState({
            items: filteredItems,
            item: selectedItem.title,
            editItem: true,
            id: id
        });

    }
    finishTodo = id => {
        const selectedItem = this.state.items.find(item => item.id === id);
        const filteredItems = this.state.items.filter(item => item.id !== id);
        selectedItem.done = !selectedItem.done;
        this.setState({
            items: [...filteredItems, selectedItem]
        });
    }
}
