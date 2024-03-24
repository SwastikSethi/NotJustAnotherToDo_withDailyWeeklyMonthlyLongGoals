import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import React from 'react'

const Month = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [showFinished, setshowFinished] = useState(true)

    useEffect(() => {
        let todostring = localStorage.getItem("todos-monthly")
        if (todostring) {
            let oldtodo = JSON.parse(localStorage.getItem("todos-monthly"));
            setTodos(oldtodo);
            console.log(todos);
        }
    }, [showFinished])

    const toggleFinished = () => {
        setshowFinished(!showFinished);
    }

    const saveToLS = () => {
        localStorage.setItem("todos-monthly", JSON.stringify(todos));
    }

    const handleEdit = (e, id) => {
        let t = todos.filter(i => i.id == id);
        setTodo(t[0].todo);

        let newTodos = todos.filter(item => {
            return item.id != id;
        })
        setTodos(newTodos);
        saveToLS()

    }


    const handleDelete = (e, id) => {
        let newTodos = todos.filter(item => {
            return item.id != id;
        })
        setTodos(newTodos);
        saveToLS()

    }
    const handleAdd = (idd = "a") => {
        if (todo.length < 4) return;
        let newId = idd == "a" ? idd : uuidv4();
        setTodos([...todos, { id: newId, todo, isCompleted: false }]);
        setTodo("");
    }
    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleComplete = (e) => {
        let idd = e.target.name;
        let index = todos.findIndex(item => {
            return item.id == idd;
        })
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
        saveToLS()
    }

    return (
        <>
            <div className="container flex flex-col gap-5 items-center rounded-xl bg-slate-700 text-white px-10 min-h-[80vh] md:w-[80vw] absolute md:left-[10vw]">
                monthly
                <div className="addTodo my-5 flex gap-5">
                    <h2 className="text-lg font-bold">Add a ToDo</h2>
                    <input onChange={handleChange} value={todo} className='w-80 text-black rounded-full' type="text" />
                    <button onClick={handleAdd} disabled={todo.length < 4} className='bg-slate-800 hover:bg-slate-950 py-1 px-3  font-bold text-white rounded-md '>I Got THIS!!</button>
                </div>

                <h2>Your ToDo's</h2>

                <input onChange={toggleFinished} type="checkbox" checked={showFinished} class="w-5 h-5 rounded border-gray-300 focus:ring-indigo-500 checked:bg-indigo-500 checked:border-transparent"/> Show Finished Tasks

                <div className="todos flex flex-col  ">
                    {todos.length == 0 && <div className='m-6 '>You are all Done !!</div>}
                    {todos.map(item => {


                        return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-2 w-1/2 justify-between ">
                            <div className='flex gap-2 place-items-center min-w-[500px]'>
                                <input name={item.id} type="checkbox" onChange={handleComplete} checked={item.isCompleted} id="" class="w-4 justify-center h-4 rounded border-gray-300 focus:ring-indigo-500 checked:bg-indigo-500 checked:border-transparent"/>

                                {/* svg */}

                                <div className={item.isCompleted ? "line-through" : "text"}>
                                    {item.todo}
                                </div>
                            </div>
                            <div className="buttons flex h-full ">
                                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-slate-800 hover:bg-slate-950 py-1 px-3 mx-3 font-bold text-white rounded-md' >Edit</button>
                                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-slate-800 hover:bg-slate-950 py-1 px-3 mx-3 font-bold text-white rounded-md' >Delete</button>
                            </div>

                        </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default Month