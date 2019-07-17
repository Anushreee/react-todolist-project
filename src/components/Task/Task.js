import React from 'react';
import classes from './Task.module.scss';
import { FaEdit, FaTrash } from 'react-icons/fa';


const Task = props => {
    const {title,handleDelete,handleEdit} = props;

    return (
        <li className={classes.List}>
            <h5 className={classes.Title}>{title}</h5>
            <div className={classes.ButtonSection}>
                <span
                    className={[classes.ButtonIcon, classes.Success].join(' ')}
                    onClick={handleEdit}><FaEdit /></span>
                <span 
                    className={[classes.ButtonIcon, classes.Danger].join(' ')}
                    onClick={handleDelete}><FaTrash /></span>
            </div>
        </li>
    )
}

export default Task;    