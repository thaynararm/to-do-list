import { useState } from "react";
import ImgSent from "../../static/media/Sent.png"

const AddTask = ({ addTask }) => {
    const [task, setTask] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState(["Trabalho", "Pessoal", "Estudos"])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!category) {
            // toast.error("Selecione uma categoria");
            console.log("insira uma categoria");
        }
        if (!task) {
            // toast.error("Insira uma tarefa");
            console.log("insira uma tarefa");
        }
        if (!categories.includes(category)) {
            setCategories([...categories, category]);
        }
        addTask(task, category);
        setTask("");
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>ADICIONE UMA TAREFA</h2>
            <div className="tasks__input">
                <input
                    className="tasks__input__text"
                    type="text"
                    placeholder="Digite sua próxima tarefa"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <input
                    className="tasks__input__select"
                    list="category-options"
                    placeholder="Selecione ou adicione uma categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <datalist id="category-options">
                    {categories.map((cat, index) => (
                        <option key={index} value={cat} />
                    ))}
                </datalist>            
                <button className="tasks__input__button" type="submit">
                    <img src={ImgSent} alt="Enviar" />
                </button>
            </div>
        </form>
    );
};

export default AddTask;
