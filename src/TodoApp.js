// import React from 'react';

// import { useState } from "react";
import { useState } from 'react'
import CreateToDo from './CreateTodo'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

function TodoApp(props){
    console.log('todo app rerun')

    const [todoList,setTodoList]=useState([])


    const  handleNewToDo=(todo)=>{
        console.log('new to do added is ',todo)
        setTodoList([...todoList,{value:todo,isChecked:false,id:uuidv4()}])
    }

    const handleTodoUpdate=(todo,index)=>//set state must always replace the whole array ?
    {
        console.log('handleTodoUpdate called with',todo,index)
        //clone list, replace mutated todo , setState to new list
        let todoListClone=[...todoList]
        todoListClone.splice(index,1,todo)
        setTodoList(todoListClone)
    }

    const handleTodoDelete=(index)=>//set state must always replace the whole array ?
    {
        console.log('handleTodoDelete called with')
        //clone list, replace mutated todo , setState to new list
        let todoListClone=[...todoList]
        todoListClone.splice(index,1)
        setTodoList(todoListClone)
    }


    return (
        <div className="todo-app">
            <CreateToDo onCreate={handleNewToDo}></CreateToDo>         
            <TodoList todoList={todoList} onTodoUpdate={handleTodoUpdate} onTodoDelete={handleTodoDelete}></TodoList>
        </div>
    )

}

export default TodoApp