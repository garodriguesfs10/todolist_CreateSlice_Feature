import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_TODO, EDIT_TODO } from '../reducers/todoreducer'
export const Todolist = () => {

    const dispatch = useDispatch()
    const { todos } = useSelector(state => state.todo)

    console.log("From list item: " + JSON.stringify(todos))

    const HandleDelete = (id) => {
        dispatch(DELETE_TODO({ id: id }))
    }

    const HandleEdit = (id, task) => {
        dispatch(EDIT_TODO({ id, task }))
    }

    const data = todos.map(e => {
        return (
            <tr key={e.id}>
                <td>{e.task} </td>
                <td><button className='btn btn-warning' onClick={() => HandleEdit(e.id, e.task)}>Editar</button>  <button className='btn btn-danger' type='button' onClick={() => HandleDelete(e.id)}>Deletar</button> </td>
            </tr>
        )
    })


    return (
        <>
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th style={{ width: '80%' }}>Tarefa</th>
                            <th style={{ width: '20%' }}>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>



            </div>



        </>
    )
}
