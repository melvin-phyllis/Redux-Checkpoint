import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task.jsx";

const filters = {
  all: "Toutes",
  todo: "À faire",
  done: "Terminées",
};

function TaskList() {
  const tasks = useSelector((state) => state.tasks.items);
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    if (activeFilter === "todo") return tasks.filter((task) => !task.done);
    if (activeFilter === "done") return tasks.filter((task) => task.done);
    return tasks;
  }, [tasks, activeFilter]);

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body space-y-4">
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <h2 className="card-title">Liste des tâches</h2>
          <div className="join">
            {Object.entries(filters).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`btn btn-sm join-item ${
                  activeFilter === key ? "btn-primary" : "btn-outline"
                }`}
                onClick={() => setActiveFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        {tasks.length === 0 ? (
          <p className="text-sm text-base-content/70">Aucune tâche pour le moment.</p>
        ) : filtered.length === 0 ? (
          <p className="text-sm text-base-content/70">Rien ici pour ce filtre.</p>
        ) : (
          <ul className="list-none p-0 m-0 space-y-3">
            {filtered.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TaskList;
