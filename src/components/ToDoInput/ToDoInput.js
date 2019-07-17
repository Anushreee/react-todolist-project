import React from 'react';
import classes from './ToDoInput.module.scss';

const ToDoInput = (props) => {
    const { task,changed,editTask} = props;
    return (
        <React.Fragment>
            <input type="text" 
                    className = {classes.Input}
                    onChange = {changed}
                    value = {task}
                    
            />
            <button className = {editTask ? classes.Success: classes.Submit}
                disabled = {task ? false:true}
                type="submit">
                {editTask?'Edit List':'Submit'}
            </button>
        </React.Fragment>
    )
}

export default ToDoInput;