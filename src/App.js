import Login from "./SignIn";
import { useState } from "react";
import Chat from "./Chat";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <div className="App">
      {isAuth ? <Chat /> : <Login setIsAuth={setIsAuth} />}
    </div>
  );
}

export default App;
