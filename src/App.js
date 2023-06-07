import './App.css';
import { useState } from 'react';
import {Form} from "./components/Form";
import {Todos} from "./components/Todos";
import { deleteAll } from './redux/todoapp/actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  const [editFormVisiblity, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState('');

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (
    <div className="wrapper">
      <br></br>
      <h1 className='text-center'>TODO-APP USING REACT-REDUX</h1>
      <Form editFormVisiblity={editFormVisiblity} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisiblity={editFormVisiblity}/>
      {todos.length > 0 && 
      (<button className='btn btn-danger btn-md delete-all' onClick={()=>dispatch(deleteAll())}>
        DELETE ALL
      </button>)}
    </div>
  );
}

export default App;
