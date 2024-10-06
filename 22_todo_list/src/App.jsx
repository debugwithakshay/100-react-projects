import { useEffect, useState } from "react";
import { Task } from "./components/Task";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);
  const [uploadTask, fetchTask] = useLocalStorage("tasks");

  //fill tasks after refresh
  useEffect(() => {
    setTask(JSON.parse(fetchTask()));
  }, []);

  //upload task after adding, updating and deleteing new Task
  useEffect(() => {
    uploadTask(tasks);
  }, [addTask, toggleTaskCompletion, uploadTask]);

  //Add new task
  function addTask(input) {
    setTask([...tasks, { taskContent: input, isCompleted: false }]);
    setInput("");
  }

  // Toggle completion status
  function toggleTaskCompletion(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTask(updatedTasks);
  }

  //delete completed tasks
  function deleteTask(taskindex) {
    setTask(tasks.filter((task, index) => index !== taskindex));
  }

  return (
    <>
      <div className="w-screen h-screen bg-purple-500 flex justify-center items-center flex-col p-3">
        {/* Input Container */}
        <div className="bg-white rounded-lg p-5 flex justify-between gap-4 max-w-96 w-96">
          <Input
            inputType="text"
            inputPlaceholder="Task to be done..."
            value={input}
            onChangeFunc={(e) => setInput(e.target.value)}
            onKeyDownFunc={(e) =>
              e.key === "Enter" && input.length !== 0 ? addTask(input) : null
            }
          />
          <Button
            text="Add"
            textColor="white"
            bgColor="#a855f7"
            onClickFunc={() => addTask(input)}
          />
        </div>

        {/* Task Container */}
        <div className="mt-4 bg-white rounded-lg p-7 flex flex-col gap-6 w-96 max-w-96 ">
          {tasks.map((task, index) => (
            <Task
              key={index}
              content={task.taskContent}
              isCompleted={task.isCompleted}
              toggleCompletion={() => toggleTaskCompletion(index)}
              deleteTask={() => deleteTask(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
