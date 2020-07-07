import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TODO, SAVE_EDIT_TODO, CLEAR_EDIT } from '../reducers/todoreducer'


export const Add = () => {

    const [form, setForm] = useState({ task: '' })
    const { currentTodo } = useSelector(state => state.todo)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('Current' + JSON.stringify(currentTodo))
        if (currentTodo.id !== undefined) {
            setForm({ task: currentTodo.task })
        } else {

        }
    }, [currentTodo])
    // const teste = useSelector(state => state.teste)

    const HandleChange = (e) => {
        setForm({ ...form, task: e.target.value })
    }
    const HandleSubmit = (e) => {
        e.preventDefault();

        if (form.task.length === 0) {
            alert('Preencha a tarefa')
        } else {
            if (currentTodo.id !== undefined) {
                console.log('entrei aquiiiii')
                dispatch(SAVE_EDIT_TODO({ task: form.task, id: currentTodo.id }))
                dispatch(CLEAR_EDIT())
                setForm('')
            } else {
                dispatch(ADD_TODO({ task: form.task }))
                setForm('')
            }
        }
    }

    return (
        <>
            <hr />
            <input type='text' placeholder="Adicionar tarefa" name='task' id='task' onChange={HandleChange} value={form.task || ''} required />
            <br />
            <button type='button' onClick={HandleSubmit}>Adicionar</button>

        </>
    )
}
