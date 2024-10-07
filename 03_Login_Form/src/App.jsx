import { useState } from "react";

function App() {
  const [userData, setUserdata] = useState({ username: "", password: "" });

  function submitForm(e) {
    e.preventDefault();
    console.log(userData);
  }

  return (
    <>
      <div className="w-screen h-screen bg-purple-500 flex justify-center items-center">
        <form
          className="w-72 bg-white rounded-lg p-4 flex flex-col gap-4"
          onSubmit={(e) => submitForm(e)}
        >
          <input
            className="rounded p-2 border-purple-500 border-2 active: outline-none"
            placeholder="username"
            type="text"
            value={useState.username}
            onChange={(e) =>
              setUserdata({ ...userData, username: e.target.value })
            }
          />
          <input
            className="rounded p-2 border-purple-500 border-2 active: outline-none"
            placeholder="Password"
            type="password"
            value={useState.password}
            onChange={(e) =>
              setUserdata({ ...userData, password: e.target.value })
            }
          />
          <input
            type="submit"
            value="Login"
            className="bg-purple-500 p-3 rounded text-white font-bold"
          />
        </form>
      </div>
    </>
  );
}

export default App;
