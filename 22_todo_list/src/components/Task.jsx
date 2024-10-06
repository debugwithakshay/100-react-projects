import { CloseIcon } from "../assets/assets";

export const Task = ({ content, isCompleted, toggleCompletion, deleteTask }) => {
  

  return (
    <div className="border-b-2 pb-4 flex justify-between">
      <div className="flex cursor-pointer">
        <input
          className="mr-2 w-6 cursor-pointer"
          style={{ accentColor: "#a855f7" }}
          type="checkbox"
          checked={isCompleted}
          onChange={toggleCompletion} // Call toggle function on change
        />
        <h1
          style={{
            color: isCompleted ? "#727272" : "#000",
            textDecoration: isCompleted ? "line-through" : "none",
          }}
        >
          {content}
        </h1>
      </div>
      <img src={CloseIcon} alt="delete task" className="cursor-pointer" onClick={deleteTask} />
    </div>
  );
};
