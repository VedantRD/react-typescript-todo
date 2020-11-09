import React, { FormEvent, useRef } from 'react'
import './AddTodoForm.css'

interface props {
    addTodo: (title: string, desc: string) => void
}

const AddTodoForm: React.FC<props> = ({ addTodo }) => {

    const titleRef = useRef<HTMLInputElement>(null)
    const descRef = useRef<HTMLInputElement>(null)

    const title = titleRef.current!
    const desc = descRef.current!

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault()
        addTodo(
            title.value.toString().charAt(0).toUpperCase() + title.value.toString().slice(1),
            desc.value.toString().charAt(0).toUpperCase() + desc.value.toString().slice(1)
        )
    }

    return (
        <form>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Enter Title' ref={titleRef} required={true}></input>
                <label>Description</label>
                <input placeholder='Enter description' ref={descRef} required={true}></input>
                <button onClick={handleFormSubmit}>Add Todo</button>
            </div>
        </form>
    )
}

export default AddTodoForm
