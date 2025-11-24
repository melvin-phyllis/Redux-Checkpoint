import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask, updateTask } from "../store/tasksSlice.js";

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const saveEdit = () => {
    const cleanTitle = title.trim();
    const cleanDescription = description.trim();
    if (!cleanTitle || !cleanDescription) return;
    dispatch(updateTask({ id: task.id, title: cleanTitle, description: cleanDescription }));
    setIsEditing(false);
  };

  return (
    <li className="card bg-base-100 border border-base-200 shadow-sm">
      <div className="card-body gap-4">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            className="checkbox checkbox-primary mt-1"
            checked={task.done}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          {isEditing ? (
            <div className="flex-1 space-y-2">
              <input
                className="input input-bordered w-full"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <textarea
                className="textarea textarea-bordered w-full"
                rows={2}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          ) : (
            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3
                  className={`font-semibold ${
                    task.done ? "line-through text-base-content/60" : ""
                  }`}
                >
                  {task.title}
                </h3>
                <span className={`badge ${task.done ? "badge-success" : "badge-ghost"}`}>
                  {task.done ? "Terminée" : "À faire"}
                </span>
              </div>
              <p
                className={`text-sm text-base-content/70 ${
                  task.done ? "line-through" : ""
                }`}
              >
                {task.description}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {isEditing ? (
            <>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setIsEditing(false)}>
                Annuler
              </button>
              <button type="button" className="btn btn-primary btn-sm" onClick={saveEdit}>
                Enregistrer
              </button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-outline btn-sm" onClick={() => setIsEditing(true)}>
                Modifier
              </button>
              <button
                type="button"
                className="btn btn-error btn-sm"
                onClick={() => dispatch(removeTask(task.id))}
              >
                Supprimer
              </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default Task;
