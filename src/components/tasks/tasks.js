import { useState } from "react";
import AddTask from "./add-task";
import Search from "../filters/search";
import Status from "../filters/status";
import Category from "../filters/category";
import ImgDelete from "../../static/media/Delete.png";


function Tasks() {

    const [taskList, setTaskList] = useState([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState(["All", ]);
    const [category, setCategory] = useState("All")
    const [categories, setCategories] = useState([])

    const addTask = (task, category) => {
        const newTask = [
            ...taskList,
            {
                id: taskList.length + 1,
                task: task,
                category: category,
                is_completed: false,
            }
        ]
        setTaskList(newTask);

        if (!categories.includes(category)) {
            setCategories([...categories, category]);
        }
    };

    const removeTask = (id) => {
        const filterTasks = taskList.filter(
            (selectTask) => selectTask.id !== id ? selectTask : null
        )
        setTaskList(filterTasks);
    }

    const toggleCompletion = (id) => {
        const updatedTasks = taskList.map(task => 
            task.id === id ? { ...task, is_completed: !task.is_completed } : task
        );
        setTaskList(updatedTasks);
    }

    const filteredTasks = taskList
        .filter(item => {
            if (status.includes("All")) return true;
            if (status.includes("Completed")) return item.is_completed;
            if (status.includes("Incompleted")) return !item.is_completed;
            return false;
        })
        .filter(item => item.task.toLowerCase().includes(search.toLowerCase()))
        .filter(item => {
            if (category === "All") return true;
            return item.category === category;
        })


    return(
        <main>
            <div className="filters">
                <h2>FILTROS</h2>
                <Search search={search} setSearch={setSearch} />
                <Category category={category} setCategory={setCategory} categories={categories} />
                <Status status={status} setStatus={setStatus}/>
            </div>
            <div className="tasks">
                <AddTask addTask={addTask} />
                <div>
                    <h2>TAREFAS</h2>
                    {filteredTasks.map(item => (
                        <div key={item.id} className="tasks__list">
                            <input
                                type="checkbox"
                                checked={item.is_completed}
                                onChange={() => toggleCompletion(item.id)}
                            />
                            <p className={`tasks__individual_task ${item.is_completed ? 'completed' : ''}`}>{item.task}</p>
                            <p className={`tasks__individual_category ${item.is_completed ? 'completed' : ''}`}>{item.category}</p>
                            <button onClick={() => removeTask(item.id)}>
                                <img src={ImgDelete} alt="Deletar" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Tasks;
