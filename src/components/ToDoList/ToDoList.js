import React from 'react';
import Task from '../Task/Task';
import classes from './ToDoList.module.scss';

const ToDoList = props => {
    const {lists,deleted,edited,cleared} = props;

    let taskLists = null;

    if(lists){
        taskLists = lists.map(list=>{
            return <Task 
                    key={list.id} 
                    title={list.title}
                    handleEdit={()=>edited(list.id)}
                    handleDelete={()=>deleted(list.id)} />
        })
    }
    return (
        <React.Fragment>    
            <ul className={classes.Lists}>
                <h2>To Do List</h2>
                {taskLists}
                <button type="button" 
                        className={classes.Clear} 
                        onClick={cleared}>Clear</button>
            </ul>
        </React.Fragment>
    )
}

export default ToDoList;