import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const INITIAL_STATE = {
    todos:[],
    currentTodo:{}
}

const todoSlicer = createSlice({
    name:'todoSlicer',
    initialState: INITIAL_STATE,
    reducers:{
        ADD_TODO: (state,action) =>{
            console.log('Action Payload ADD_TODO: '+ JSON.stringify(action.payload))
            const {task} = action.payload;
            console.log('TASK: '+task)
            const id = uuidv4() 
            state.todos.push({task:task,id:id})
        },
        DELETE_TODO:  (state,action) =>{
            const {id} = action.payload
            console.log('Id from delete'+ id)
            const newState = state.todos.filter(e => e.id !== id ? e : null)
            return {...state, todos:newState}
        },
        EDIT_TODO: (state,action) =>{
            const {id,task} = action.payload
            console.log('From edit',id,task)
            return {...state,currentTodo:{id:id,task:task}}
        },
        SAVE_EDIT_TODO: (state,action) =>{
            const {id,task} = action.payload
            console.log('SAVE_EDIT:'+id,task)
            const todo = state.todos.find(e => e.id === id)
            todo.task = task
        },
        CLEAR_EDIT: (state,action) =>{
            state.currentTodo.task = undefined
            state.currentTodo.id = undefined
        }
    }
})

export const {ADD_TODO,DELETE_TODO,EDIT_TODO,SAVE_EDIT_TODO,CLEAR_EDIT} = todoSlicer.actions

export default todoSlicer.reducer