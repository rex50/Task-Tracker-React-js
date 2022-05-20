import { useState } from "react"

const AddTask = ({ onSave }) => {
    
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add task details!!')
            return
        }
        onSave({text, day, reminder})
        clearForm()
    }

    const clearForm = () => {
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={submitForm}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Task details'
                    value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type='text' placeholder='e.g. May 24th at 10:30am'
                    value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type='checkbox'
                    checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save task' className="btn btn-block" />
        </form>
    )
}

export default AddTask