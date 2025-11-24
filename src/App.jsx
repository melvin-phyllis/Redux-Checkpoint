import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-4">
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold">Ma liste de tâches Redux</h1>
        <p className="text-sm text-base-content/70">Version simple avec Tailwind + DaisyUI.</p>
      </div>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
