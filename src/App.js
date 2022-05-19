//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar }           from './Components/Navbar';
import { Model_Create }     from './Components/Model_Create';
import { Model_Get }     from './Components/Model_Get';
import { Manager_Create }   from './Components/Manager_Create';
import { ModelToJob_Add}    from './Components/ModelToJob_Add';
import { ModelToJob_Delete} from './Components/ModelToJob_Delete';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/model_create" element={<Model_Create/>} />
        <Route path="/model_get" element={<Model_Get/>} />
        <Route path="/manager_create" element={<Manager_Create/>} />
        <Route path="/modeltojob_add" element={<ModelToJob_Add/>} />
        <Route path="/modeltojob_delete" element={<ModelToJob_Delete/>} />
      </Routes> 
    </Router>
  );
}

export default App;
