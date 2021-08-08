import React from 'react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
const Task = ({task, onDelete, reminderToggle}) => {

    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => reminderToggle(task.id)}>
            <h3>{task.text} <FaTimes onClick = {() => onDelete(task.id)} style ={{color:'red', cursor:'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
