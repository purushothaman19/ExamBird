import Home from "../components/Homepage/Home";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Uploader from "../components/UploadPage/UploadPage";
import Create from "../components/CreatePage/create";
import Sparrow from "../components/SparrowPage/sparrow";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/upload" element={<Uploader/>}/>
          <Route exact path="/create" element={<Create/>}/>
          <Route exact path="/create/sparrow" element={<Sparrow/>}/>
        </Routes>
    </Router>

    </div>
  );
}

export default App;
