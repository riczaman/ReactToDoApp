import { useState } from "react";

const AddTask = ({addTask}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit =(event) =>{
        event.preventDefault();

        if(!text){
            alert('Please enter the task description');
            return
        }

        addTask({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);


    }
    return (
        <form className="add-form" onSubmit = {onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder="Add Task" value={text} onChange={(event)=> setText(event.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type='text' placeholder="Add Day & Time" value={day} onChange={(event) => setDay(event.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type='checkbox' checked= {reminder} onChange={(event) => setReminder(event.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Save Task' className="btn btn-block"/>
        </form>
            
    )
}

export default AddTask
