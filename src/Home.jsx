import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './features/todos/Todo-Slice';
import './Styles.css'
function Home(){
    let todo = useSelector(state => state.todo.items)
    let dispatch=useDispatch()
    return (
        <>
            <h1 className="text-green-300">Home Page</h1>
        </>
    );
}
export default Home;