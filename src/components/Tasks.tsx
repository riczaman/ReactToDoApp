import React from 'react'
import { useState } from 'react';
import Task from '../components/Task';

const Tasks = ({tasks, onDelete, reminderToggle}) => {
    const taskList = tasks.map(task => <Task onDelete = {onDelete} key={task.id} task={task} reminderToggle = {reminderToggle}/>)

    return (
        <>
           {taskList}
        </>
    )
}

export default Tasks
