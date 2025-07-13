import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './features/todos/Todo-Slice';
import './Styles.css'
import { useState } from 'react';
function Home(){
    const [Task,setTask]=useState()
    let todo = useSelector(state => state.todo.items)
    let dispatch=useDispatch()
    return (
        <>
        <div className='flex flex-col justify-center h-[100vh] w-full bg-green-200'>
            <h1 className="text-green-800 font-black text-center">Home</h1>
            <div className='flex flex-col bg-amber-200 p-2 font-black'>
            add a task <input className='m-2 border-2 border-gray-500 rounded-md' placeholder='add your tasks' onChange={(e)=>setTask(e.target.value)}/>
            <button className='bg-[rgb(59,255,180)] p-1 rounded-md' onClick={()=>{dispatch(addTodo(Task));}}>Add it now!</button>
            </div>
            <div className='flex flex-col w-full bg-blend-hue'>
            {todo.map(res=>
            <i className='m-2 p-1.5 bg-amber-200 text-center font-mono text-blue-700'>{res.Task}</i>
            )}
            </div>
        </div>
        </>
    );
}
export default Home;