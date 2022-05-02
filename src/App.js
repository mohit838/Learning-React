import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AddUser from "./components/AddUsers/AddUser";
import Home from "./components/Home/Home";
import UpdateUsers from "./components/UpdateUsers/UpdateUsers";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/users/add" element={<AddUser />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/update/users/:id" element={<UpdateUsers />}></Route>
            <Route
              path="*"
              element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
