import { useDispatch, useSelector } from 'react-redux';
import { addTodo , completeTodo , DeleteTodo} from './features/todos/Todo-Slice';
import './Styles.css'
import { useEffect, useRef, useState } from 'react';
function Home(){
    const [Task,setTask]=useState('')
    let todo = useSelector(state => state.todo.items)
    let dispatch=useDispatch()
    const input=useRef(null)
    function handlekeyDown(e){
        if(e.key === 'Enter'){
            addTaskFunction()
        }
    }
    let addTaskFunction=()=>{dispatch(addTodo(Task)); input.current.value=''; setTask('');}
    return (
        <>
        <div className='flex flex-col justify-center h-[100vh] w-full bg-green-200'>
            <h1 className="text-green-800 font-black text-center">Home</h1>
            <div className='flex flex-col bg-amber-200 p-2 font-black'>
            add a task <input onKeyPress={(e)=>{handlekeyDown(e)}} ref={input} className='m-2 border-2 border-gray-500 rounded-md' placeholder='add your tasks' onChange={(e)=>setTask(e.target.value)}/>
            <button className='bg-[rgb(59,255,180)] p-1 rounded-md' onClick={addTaskFunction}>Add it now!</button>
            </div>
            <div className='flex flex-col w-full bg-blend-hue'>
            {todo.map(res=>
            <div className='flex justify-around items-center m-2 p-1.5 bg-amber-200 text-center font-mono text-blue-700' key={res.id}>
            <i className={`w-[15%] ${res.completed ? 'line-through text-green-500' : ''}`}>{res.Task}</i>
             <div className='w-[80%] flex justify-around'>
            <div className='bg-amber-500 w-50 p-2 rounded-md'>{res.completed ? '✔️completed' : '❌not completed'}</div>
            <input type="checkbox" onClick={()=>{dispatch(completeTodo(res.id))}}/>
            <button className='bg-red-500 cursor-pointer p-1 rounded-md' onClick={() => {dispatch(DeleteTodo(res.id))}}>🗑️delete this</button>
             </div>
            </div>
            )}
            </div>
        </div>
        </>
    );
}
export default Home;