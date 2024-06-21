import { useState } from "react";
import Field from "../utils/field";

const AddTask = ({ addTask }) => {
    const [task, setTask] = useState("");
    const [category, setCategory] = useState("");

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
        addTask(task, category);
        setTask("");
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Field
                type="text"
                placeholder="Digite sua próxima tarefa"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="Teste">Teste</option>
            </select>
            <button type="submit">Criar</button>
        </form>
    );
};

export default AddTask;
