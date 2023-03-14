import "./App.css";
import Create from "./component/Create";
import Read from "./component/Read";
import Update from "./component/Update";
import Header from "./widget/Header";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div>
   <Header/>
    <div className="main">
      <h1 className="main-header">React Crud</h1>
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Create />} />
          
          <Route style={{marginTop: 20 }} exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </Router>
  
    </div>

    </div>

  );
}

export default App;
