import {  ADD_TODO, EDIT_TODO, DELETE_TODO, COMPLETE  } from './actiontypes'

export const Add = (newTodo) => {
    return {
        type : ADD_TODO,
        payload : newTodo
    }
}

export const Edit = (editTodo) => {
    return {
        type : EDIT_TODO,
        payload :editTodo
    }
}

export const Delete = (id) => {
    return {
        type : DELETE_TODO,
        payload: id
    }
}
export const Complete = (todo) => {
    return {
        type : COMPLETE,
        payload : todo
    }
}

