import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice.js";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanTitle = title.trim();
    const cleanDescription = description.trim();
    if (!cleanTitle || !cleanDescription) return;
    dispatch(addTask(cleanTitle, cleanDescription));
    setTitle("");
    setDescription("");
  };

  return (
    <form className="card bg-base-100 shadow" onSubmit={handleSubmit}>
      <div className="card-body space-y-3">
        <h2 className="card-title">Ajouter une tâche</h2>
        <input
          id="task-title"
          type="text"
          placeholder="Titre (ex: Faire mes devoirs)"
          className="input input-bordered w-full"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          id="task-description"
          rows={3}
          placeholder="Description (ex: maths + histoire)"
          className="textarea textarea-bordered w-full"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit" className="btn btn-primary w-fit">
          Créer la tâche
        </button>
      </div>
    </form>
  );
}

export default AddTask;
