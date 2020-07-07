import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {DELETE_TODO,EDIT_TODO} from '../reducers/todoreducer'
export const Todolist = () => {

    const dispatch = useDispatch()
    const {todos} = useSelector(state => state.todo)
    
    console.log("From list item: "+JSON.stringify(todos))

    const HandleDelete = (id) =>{
        dispatch(DELETE_TODO({id:id}))
    }

    const HandleEdit = (id,task) =>{
        dispatch(EDIT_TODO({id,task}))
    }

    return (
        <>
            <ul>
                
                {todos.map(e => {
                    return (
                    <li key={e.id}>{e.task} <button onClick={() => HandleEdit(e.id,e.task)}>Editar</button>  <button type='button' onClick={() => HandleDelete(e.id)}>Deletar</button> </li>
                    )
                })}
            </ul>
        </>
    )
}
