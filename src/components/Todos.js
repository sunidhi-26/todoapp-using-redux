import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Icon} from 'react-icons-kit';
import {trash, edit2} from 'react-icons-kit/feather';
import { removeTodo, handleCheckbox } from "../redux/todoapp/actions";

export const Todos = ({handleEditClick, editFormVisiblity}) => {
    const todos = useSelector((state) => state.operationsReducer);
    // console.log(todos);
    const dispatch = useDispatch();
    
    return (
        todos.map((todo) => (
            <div key={todo.id} className="todo-box">
                <div className="content">
                    {editFormVisiblity===false && 
                        <input type="checkbox" checked={todo.completed} onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
                    }
                    <p style={todo.completed===true ? {textDecoration: 'line-through'} : {textDecoration:'none'}}>
                        {todo.todo}
                    </p>
                </div>
                <div className="actions-box">
                    {editFormVisiblity===false &&
                        <>
                            <span onClick={()=>handleEditClick(todo)}><Icon icon={edit2}/></span>
                            <span onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={trash}/></span>
                        </>
                    }
                </div>
            </div>
        ))
    )
}