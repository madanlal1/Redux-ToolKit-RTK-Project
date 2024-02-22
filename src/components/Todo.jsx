import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addUser, deleteUsers} from '../store/slices/UserSlice';
import DisplayData from './DisplayData';
import { useSelector } from 'react-redux';

const Todo = () => {

    const [taskData, setTaskData] = useState("");
    const dispatch = useDispatch();
    const data = useSelector(state => state.users)

    const addTask = () => {
        if(taskData !== ""){
            dispatch(addUser(taskData))
        }
        setTaskData("");
    }

    const removeAll = () => {
        dispatch(deleteUsers());
    }

  return (
    <div className="todoContainer">
        <div className="todoInnerContainer">
            <h2>My TODO List</h2>
            <input id='todoInput' onChange={event => setTaskData(event.target.value)} value={taskData} className='form-control mt-2' type="text" placeholder='Add Task...' />
            <button className='btn btn-outline-primary mt-2' onClick={() => addTask()}>Add Data</button>
            <hr />
            <ul className="dataContainer">
                <DisplayData/>
            </ul>
            {data.length > 0 && <button className='btn btn-outline-danger mt-2' onClick={() => removeAll()}>RemoveAll</button> }
        </div>
    </div>
  )
}

export default Todo